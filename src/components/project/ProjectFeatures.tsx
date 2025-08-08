import React from "react";
import { FeatureTag } from "./FeatureTag";

export const ProjectFeatures: React.FC<{
  features: string[];
  isExpanded: boolean;
  onToggle: () => void;
  projectName: string;
}> = ({ features, isExpanded, onToggle, projectName }) => {
  const visibleFeatures = features.slice(0, 2);
  const hiddenFeatures = features.slice(2);
  const hasMoreFeatures = features.length > 2;

  return (
    <div className="mb-6">
      {visibleFeatures.map((feature, index) => (
        <FeatureTag key={index}>{feature}</FeatureTag>
      ))}

      {isExpanded &&
        hiddenFeatures.map((feature, index) => (
          <FeatureTag key={`expanded-${index}`}>{feature}</FeatureTag>
        ))}

      {hasMoreFeatures && (
        <button
          onClick={onToggle}
          className="rounded px-1 py-0.5 text-xs font-medium text-purple-500 transition-colors duration-200 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label={
            isExpanded
              ? `Hide additional features for ${projectName}`
              : `Show ${hiddenFeatures.length} more features for ${projectName}`
          }
        >
          {isExpanded ? "Show less" : `+${hiddenFeatures.length} more features`}
        </button>
      )}
    </div>
  );
};
