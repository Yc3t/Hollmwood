// Character-related types
export interface Character {
  name: string;
  role: string;
  description: string;
  traits: string[];
}

// Plot structure types
export interface OutlinePoint {
  title: string;
  description: string;
  characters: string[];
  act: 'ACT I' | 'ACT II' | 'ACT III';
}

export interface Performance {
  character: string;
  action: string;
  parenthetical?: string;
  dialogue?: string;
}

export interface PlotPoint {
  title: string;
  description: string;
  scene: string;
  characters: string[];
  act: 'ACT I' | 'ACT II' | 'ACT III';
  sceneHeading?: string;
  performances?: Performance[];
}

// Role interfaces
export interface Writer {
  generateCharacters: () => Character[];
  generateOutline: () => OutlinePoint[];
  expandStory: (subplot: OutlinePoint) => string;
  draftScreenplay: (chapter: string) => PlotPoint;
}

export interface Editor {
  reviewCharacters: (characters: Character[]) => string;
  reviewOutline: (outline: OutlinePoint[]) => string;
  suggestRevisions: (content: string) => string;
}

export interface Actor {
  character: string;
  profile: string;
  history: string[];
  performScene: (scene: string) => Performance;
}

// Additional utility types
export type ActType = 'ACT I' | 'ACT II' | 'ACT III';

export interface SceneMetadata {
  location: string;
  timeOfDay: string;
  interior: boolean;
}

export interface EditorFeedback {
  characters: string;
  outline: string;
  script: string;
}

export interface GenerationState {
  isGenerating: boolean;
  progress: number;
  error?: string;
}

export interface TimelineItem {
  id: string;
  type: 'image' | 'scene' | 'transition';
  duration: number;
  content: string;
  timestamp: number;
}

export interface VideoMetadata {
  duration: number;
  scenes: TimelineItem[];
  transitions: TimelineItem[];
  soundtrack?: string;
}

// UI-specific types
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface PreviewProps {
  content: PlotPoint | null;
  isLoading: boolean;
  error?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  currentTime: number;
  onTimeUpdate: (time: number) => void;
}

// System state types
export interface SystemState {
  currentAct: ActType;
  characters: Character[];
  outline: OutlinePoint[];
  screenplay: PlotPoint[];
  editorFeedback: EditorFeedback;
  generationState: GenerationState;
  timeline: TimelineItem[];
}

// Event types
export interface GenerationEvent {
  type: 'character' | 'outline' | 'script' | 'image' | 'video';
  status: 'start' | 'progress' | 'complete' | 'error';
  data?: any;
  error?: string;
  progress?: number;
}

// Configuration types
export interface GenerationConfig {
  temperature: number;
  maxTokens: number;
  model: string;
  style?: {
    genre: string;
    tone: string;
    pacing: string;
  };
}

// Response types
export interface GenerationResponse {
  success: boolean;
  data?: any;
  error?: string;
  metadata?: {
    tokensUsed: number;
    generationTime: number;
    model: string;
  };
}

// Utility type for grouping screenplay by acts
export type GroupedScreenplay = Record<ActType, PlotPoint[]>;

// Export a namespace for constants
export const Constants = {
  MAX_CHARACTERS: 6,
  MIN_CHARACTERS: 3,
  MAX_ACTS: 3,
  MAX_SCENES_PER_ACT: 5,
  MAX_PERFORMANCES_PER_SCENE: 4,
  VALID_TIMES_OF_DAY: ['MORNING', 'DAY', 'EVENING', 'NIGHT', 'DAWN', 'DUSK'] as const,
} as const;