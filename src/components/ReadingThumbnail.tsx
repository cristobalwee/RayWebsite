import React from "react";

interface ReadingThumbnailProps {
  label: string;
  title?: string;
  author?: string;
  className?: string;
  size?: "small" | "default" | "large";
}

// Define the style type
type LabelStyle = {
  background: string;
  backgroundColor: string;
  textColor: string;
  textAlign: "left" | "center";
  textPosition: "top" | "center" | "bottom";
  hasDecorative?:
    | "grid"
    | "gradient-rect"
    | "columns"
    | "bottom-gradient"
    | "bottom-columns";
  reducedPadding?: boolean;
};

// Style mapping for each unique label from READINGS array
const LABEL_STYLES: Record<string, LabelStyle> = {
  // ENLIGHTENMENT_FORMAL - Clean, structured with linear gradient
  ENLIGHTENMENT_FORMAL: {
    background:
      "linear-gradient(135deg, rgba(211, 182, 137, 0.7) 0%, rgba(158, 132, 89, 0.5) 100%)",
    backgroundColor: "#9E8459",
    textColor: "#FFFFFF",
    textAlign: "center" as const,
    textPosition: "bottom",
  },

  // ROMANTIC_POETRY - Passionate, clean design with solid background
  ROMANTIC_POETRY: {
    background: "#AD3C69",
    backgroundColor: "#AD3C69",
    textColor: "#FFFFFF",
    textAlign: "center" as const,
    textPosition: "bottom",
  },

  // ROMANTIC_PROSE - Linear gradient with purple tones and white stripe
  ROMANTIC_PROSE: {
    background: "linear-gradient(135deg, #643981 0%, #844B4C 100%)",
    backgroundColor: "#541E79",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "bottom",
  },

  MODERN_FICTION: {
    background:
      "linear-gradient(150deg, #C28C5E -18.94%, #42556D 56.29%, #434556 127.31%)",
    backgroundColor: "#541E79",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "bottom",
  },

  // VICTORIAN_POETRY - Elegant three-color linear gradient
  VICTORIAN_POETRY: {
    background:
      "linear-gradient(135deg, #B5A159 0%, #8E8867 50%, #66461F 100%)",
    backgroundColor: "#B5A159",
    textColor: "#FFFFFF",
    textAlign: "center" as const,
    textPosition: "bottom",
  },

  // VICTORIAN_GOTHIC - Dark background with columns
  VICTORIAN_GOTHIC: {
    background: "#474033",
    backgroundColor: "#474033",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "bottom",
    hasDecorative: "columns",
  },

  // VICTORIAN_SOCIAL - Flat blue background with columns
  VICTORIAN_SOCIAL: {
    background: "#37518B",
    backgroundColor: "#37518B",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "bottom",
    hasDecorative: "columns",
  },

  // AMERICAN_TRANSCENDENTAL - White background with gradient rectangle
  AMERICAN_TRANSCENDENTAL: {
    background: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    textColor: "#111111",
    textAlign: "left" as const,
    textPosition: "bottom",
    hasDecorative: "gradient-rect",
    reducedPadding: true,
  },

  AMERICAN_REGIONAL: {
    background:
      "linear-gradient(202.68deg, #59B578 6.84%, #5F80B0 57.02%, #924B4B 103.44%)",
    backgroundColor: "#B5595B",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "top",
  },

  // AMERICAN_LITERARY - White background with bottom gradient rectangle
  AMERICAN_LITERARY: {
    background: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    textColor: "#111111",
    textAlign: "left" as const,
    textPosition: "top",
    hasDecorative: "bottom-gradient",
  },

  // NATURE_PASTORAL - Green background with top positioning and white stripe
  NATURE_PASTORAL: {
    background: "#338369",
    backgroundColor: "#338369",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "top",
  },

  DARK_TALES: {
    background: "#000",
    backgroundColor: "#000",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "bottom",
  },

  // EARLY_MODERN - White background with 3x3 grid
  EARLY_MODERN: {
    background: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    textColor: "#111111",
    textAlign: "left" as const,
    textPosition: "bottom",
    hasDecorative: "grid",
    reducedPadding: true,
  },

  // METAPHYSICAL_RELIGIOUS - Dark gray background with top positioning
  METAPHYSICAL_RELIGIOUS: {
    background: "#414141",
    backgroundColor: "#414141",
    textColor: "#FFFFFF",
    textAlign: "left" as const,
    textPosition: "top",
    hasDecorative: "bottom-columns",
  },
} as const;

// Default style for unknown labels
const DEFAULT_STYLE: LabelStyle = {
  background: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
  backgroundColor: "#64748b",
  textColor: "#f1f5f9",
  textAlign: "center" as const,
  textPosition: "center",
};

const ReadingThumbnail: React.FC<ReadingThumbnailProps> = ({
  label,
  title,
  author,
  className = "",
  size = "default",
}) => {
  // Get style for this label or use default
  const style =
    LABEL_STYLES[label as keyof typeof LABEL_STYLES] || DEFAULT_STYLE;

  // Scale factors for different sizes
  const scaleFactors = {
    small: 0.45,
    default: 1,
    large: 1.25,
  };

  const scale = scaleFactors[size];

  // Calculate actual dimensions based on scale
  const baseWidth = 110;
  const baseHeight = 150;
  const scaledWidth = baseWidth * scale;
  const scaledHeight = baseHeight * scale;

  // Format label for display when no title/author provided
  const formatLabel = (label: string) => {
    return label
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Get positioning classes based on text position
  const getPositionClasses = () => {
    const reducedPadding = "reducedPadding" in style && style.reducedPadding;
    const baseClasses = "absolute flex flex-col";

    // Adjust positioning to account for decorative elements and stripes
    const topOffset = "top-0"; // Space for decorative elements
    const padding = reducedPadding ? "p-2.5" : "p-3";
    const hasBottomGradient = style.hasDecorative === "bottom-gradient";
    const bottomOffset = hasBottomGradient ? "bottom-16" : "bottom-0";

    const adjustedClasses = `${baseClasses} inset-x-0 ${topOffset} ${bottomOffset} ${padding}`;

    switch (style.textPosition) {
      case "top":
        return `${adjustedClasses} justify-start`;
      case "center":
        return `${adjustedClasses} justify-center`;
      case "bottom":
        return `${adjustedClasses} justify-end`;
      default:
        return `${adjustedClasses} justify-center`;
    }
  };

  // Get text alignment classes
  const getTextAlignClasses = () => {
    switch (style.textAlign) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      default:
        return "text-center";
    }
  };

  const hasDecorative = "hasDecorative" in style && style.hasDecorative;

  // Render decorative elements
  const renderDecorative = () => {
    if (!hasDecorative) return null;

    switch (style.hasDecorative) {
      case "grid":
        return (
          <div className="flex-1 flex items-start justify-start">
            <div className="grid grid-cols-3 gap-1 w-full h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{ backgroundColor: "#DEC98F" }}
                />
              ))}
            </div>
          </div>
        );

      case "gradient-rect":
        return (
          <div className="flex-1 flex items-start justify-start">
            <div
              className="rounded-md w-full h-full mb-2"
              style={{
                background:
                  "linear-gradient(203.13deg, #B5595B 2.62%, #5F80B0 54.9%, #D0D0D0 103.28%)",
              }}
            />
          </div>
        );

      case "columns":
        return (
          <div className="flex-1 flex items-stretch justify-start gap-2">
            <div
              className="rounded-md w-full h-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <div
              className="rounded-md w-full h-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
          </div>
        );

      case "bottom-gradient":
        return null; // This will be rendered separately as absolute positioned

      case "bottom-columns":
        return (
          <div className="flex-1 flex items-stretch justify-start gap-2">
            <div
              className="rounded-md w-full h-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <div
              className="rounded-md w-full h-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <div
              className="rounded-md w-full h-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`inline-block overflow-hidden ${className}`}
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
      }}
    >
      <div
        className="relative w-[110px] h-[150px] rounded-[12px] overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: style.background,
            backgroundColor: style.backgroundColor,
          }}
        />

        {/* Bottom gradient rectangle for AMERICAN_LITERARY */}
        {style.hasDecorative === "bottom-gradient" && (
          <div
            className="absolute left-0 right-0 bottom-0"
            style={{
              height: "64px",
              background:
                "linear-gradient(117.21deg, #BCC873 -11.39%, #834B92 105.7%)",
            }}
          />
        )}

        {/* Text overlay */}
        <div
          className={`${getPositionClasses()} ${getTextAlignClasses()} gap-3`}
        >
          {style.hasDecorative !== "bottom-columns" && renderDecorative()}
          {title && author ? (
            <div className="flex flex-col">
              <h6
                className={`font-semibold leading-tight mb-1 max-w-full break-words text-[12px] ${style.textPosition === "top" ? "mr-3" : ""}`}
                style={{
                  color: style.textColor,
                }}
              >
                {title}
              </h6>
              <p
                className="leading-tight max-w-full break-words text-[12px]"
                style={{
                  color: style.textColor,
                }}
              >
                {author}
              </p>
            </div>
          ) : (
            <span
              className="text-sm font-medium leading-tight max-w-full break-words"
              style={{ color: style.textColor }}
            >
              {formatLabel(label)}
            </span>
          )}
          {style.hasDecorative === "bottom-columns" && renderDecorative()}
        </div>
        <div className="absolute top-2 right-2 bg-[#EFEFEF] flex justify-center items-center rounded-full h-[14px] w-[14px] text-[#111111]">
          <p className="logo text-[6px] text-center">
            R<span className="text-[#C6698B]">.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingThumbnail;
