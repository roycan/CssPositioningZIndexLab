export interface Demo {
  defaultPosition: string;
  positions: string[];
  codeExample: (position: string) => string;
}

export interface Exercise {
  instructions: string;
  startingCode: string;
  solution: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  demo: Demo;
  exercise: Exercise;
  completed?: boolean;
}

export interface Progress {
  completedLessons: string[];
  lastVisitedLesson: string;
}