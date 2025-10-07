// In-memory cache for preview reading content
const previewContentCache: Record<string, PreviewReadingData> = {};

// Word count threshold - readings below this are shown in full
const FULL_READING_THRESHOLD = 600;

// Percentage of content to show for truncated previews
const PREVIEW_PERCENTAGE = 0.4;

export interface PreviewReadingData {
  content: string[];
  isPreview: boolean;
  isTruncated: boolean;
  progressCap: number; // 40 for truncated, 100 for full
  fullWordCount: number;
  previewWordCount: number;
}

/**
 * Loads reading content for preview mode
 * - Short readings (<500 words): Full content shown with completion overlay
 * - Long readings: 40% content shown with truncation overlay
 * @param title - The exact title of the reading
 * @param wordCount - Expected word count from READINGS constant
 * @returns Preview reading data with metadata
 */
export async function loadPreviewReading(
  title: string,
  wordCount: number
): Promise<PreviewReadingData> {
  // Return cached content if available
  if (previewContentCache[title]) {
    return previewContentCache[title];
  }

  try {
    // Fetch the text file from public directory
    const response = await fetch(`/readings/${title}.txt`);

    if (!response.ok) {
      throw new Error(`Failed to load reading: ${response.statusText}`);
    }

    const text = await response.text();

    // Parse full content into paragraphs
    const fullParagraphs = text
      .split("\n\n")
      .map((p) => p.trim())
      .filter((p) => p.length > 0)
      .flatMap((paragraph) => {
        // Check if paragraph contains section markers
        const lines = paragraph.split("\n");
        const result: string[] = [];
        let currentParagraph: string[] = [];

        for (const line of lines) {
          // Check if this line is a section marker
          if (/^\*\*[IVX]+\*\*$/.test(line.trim())) {
            // If we have accumulated content, add it as a paragraph
            if (currentParagraph.length > 0) {
              result.push(currentParagraph.join("\n"));
              currentParagraph = [];
            }
            // Add the section marker as its own paragraph
            result.push(line.trim());
          } else {
            currentParagraph.push(line);
          }
        }

        // Add any remaining content
        if (currentParagraph.length > 0) {
          result.push(currentParagraph.join("\n"));
        }

        return result;
      });

    // Determine if this reading should be truncated
    const shouldTruncate = wordCount >= FULL_READING_THRESHOLD;

    // Calculate how much content to show
    let contentToShow: string[];
    let previewWordCount: number;

    if (shouldTruncate) {
      // Show 40% of paragraphs
      const cutoffIndex = Math.ceil(fullParagraphs.length * PREVIEW_PERCENTAGE);
      contentToShow = fullParagraphs.slice(0, cutoffIndex);

      // Calculate approximate word count of preview
      previewWordCount = Math.round(wordCount * PREVIEW_PERCENTAGE);
    } else {
      // Show full content for short readings
      contentToShow = fullParagraphs;
      previewWordCount = wordCount;
    }

    const previewData: PreviewReadingData = {
      content: contentToShow,
      isPreview: true,
      isTruncated: shouldTruncate,
      progressCap: shouldTruncate ? 40 : 100,
      fullWordCount: wordCount,
      previewWordCount,
    };

    // Cache the preview data
    previewContentCache[title] = previewData;

    return previewData;
  } catch (error) {
    console.error("Error loading preview reading content:", error);
    throw error;
  }
}

/**
 * Preloads preview reading content into cache without returning it
 * Useful for hover preloading
 */
export async function preloadPreviewReading(
  title: string,
  wordCount: number
): Promise<void> {
  try {
    await loadPreviewReading(title, wordCount);
  } catch (error) {
    // Silently fail for preloading
    console.warn("Failed to preload preview reading:", title);
  }
}
