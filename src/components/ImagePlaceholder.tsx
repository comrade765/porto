import React from 'react';

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  label: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = '100%',
  height = '400px',
  label,
  className = '',
}) => (
  <div
    className={`flex items-center justify-center border-2 border-dashed border-[#333333] 
      bg-[#111111] rounded-lg hover:border-[#444444] transition-colors ${className}`}
    style={{ width, height }}
  >
    <span className="text-[#444444] text-sm font-mono tracking-wider text-center px-4">
      [ {label} ]
    </span>
  </div>
);
