// In-memory cache for reading content
const contentCache: Record<string, string[]> = {};

/**
 * Loads reading content from public/readings/ directory
 * @param title - The exact title of the reading (matches filename)
 * @returns Array of paragraphs/sections from the text file
 */
export async function loadReading(title: string): Promise<string[]> {
  // Return cached content if available
  if (contentCache[title]) {
    return contentCache[title];
  }

  try {
    // Fetch the text file from public directory
    const response = await fetch(`/readings/${title}.txt`);

    if (!response.ok) {
      throw new Error(`Failed to load reading: ${response.statusText}`);
    }

    const text = await response.text();

    // Parse content: split by double newlines to create paragraphs
    // Also treat section markers (like **I**, **II**, etc.) as separate paragraphs
    const paragraphs = text
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .flatMap(paragraph => {
        // Check if paragraph contains section markers
        const lines = paragraph.split('\n');
        const result: string[] = [];
        let currentParagraph: string[] = [];
        
        for (const line of lines) {
          // Check if this line is a section marker
          if (/^\*\*[IVX]+\*\*$/.test(line.trim())) {
            // If we have accumulated content, add it as a paragraph
            if (currentParagraph.length > 0) {
              result.push(currentParagraph.join('\n'));
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
          result.push(currentParagraph.join('\n'));
        }
        
        return result;
      });

    // Cache the parsed content
    contentCache[title] = paragraphs;

    return paragraphs;
  } catch (error) {
    console.error('Error loading reading content:', error);
    throw error;
  }
}

/**
 * Preloads reading content into cache without returning it
 * Useful for hover preloading
 */
export async function preloadReading(title: string): Promise<void> {
  try {
    await loadReading(title);
  } catch (error) {
    // Silently fail for preloading
    console.warn('Failed to preload reading:', title);
  }
}
