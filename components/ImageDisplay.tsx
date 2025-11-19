import React from 'react';
import { ImageIcon } from './IconComponents';

interface ImageDisplayProps {
  originalImage: string | null | undefined;
  editedImage: string | null;
}

const ImageBox: React.FC<{ title: string; imageUrl: string | null | undefined; isPlaceholder?: boolean; }> = ({ title, imageUrl, isPlaceholder }) => {
  return (
    <div className="flex-1 flex flex-col items-center gap-3">
      <h3 className="text-lg font-semibold text-slate-300">{title}</h3>
      <div className="w-full aspect-square rounded-lg bg-slate-900/50 border border-slate-700 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
        ) : (
          <div className={`flex flex-col items-center justify-center text-slate-500 ${isPlaceholder ? 'animate-pulse' : ''}`}>
            <ImageIcon className="w-16 h-16" />
            <span className="mt-2 text-sm">{isPlaceholder ? 'Waiting for result...' : 'Image will appear here'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, editedImage }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full h-full">
      <ImageBox title="Original" imageUrl={originalImage} />
      <ImageBox title="Edited" imageUrl={editedImage} isPlaceholder={!!originalImage && !editedImage} />
    </div>
  );
};