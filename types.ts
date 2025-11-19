
export type EditMode = 'none' | 'rotate' | 'resize' | 'crop' | 'grayscale' | 'collage' | 'remove-bg' | 'color-adjust' | 'ai-edit';

export type IconName = 
  | 'upload' 
  | 'rotate' 
  | 'resize' 
  | 'crop'
  | 'grayscale' 
  | 'collage' 
  | 'download' 
  | 'add' 
  | 'close' 
  | 'reset'
  | 'wand'
  | 'palette'
  | 'undo'
  | 'save'
  | 'home'
  | 'cutout'
  | 'expand'
  | 'erase'
  | 'rotate-left'
  | 'flip-horizontal'
  | 'flip-vertical'
  | 'layout-horizontal'
  | 'layout-vertical'
  | 'layout-grid'
  | 'ratio-free'
  | 'ratio-1-1'
  | 'ratio-16-9'
  | 'ratio-4-3'
  | 'settings';

export type CollageLayoutType = 'horizontal' | 'vertical' | 'grid';

export type AiStyle = 'None' | 'Realistic' | 'Anime' | 'Cartoon' | 'Oil Painting' | 'Cyberpunk' | 'Sketch' | 'Watercolor' | '3D Render';
export const AI_STYLES: AiStyle[] = ['None', 'Realistic', 'Anime', 'Cartoon', 'Oil Painting', 'Cyberpunk', 'Sketch', 'Watercolor', '3D Render'];