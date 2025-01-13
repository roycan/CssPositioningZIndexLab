import { useEffect, useState } from 'react';
import type { Progress } from '@/lib/types';

const STORAGE_KEY = 'css-tutorial-progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {
      completedLessons: [],
      lastVisitedLesson: ''
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markLessonComplete = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: Array.from(new Set([...prev.completedLessons, lessonId]))
    }));
  };

  const setLastVisitedLesson = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      lastVisitedLesson: lessonId
    }));
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  };

  return {
    progress,
    markLessonComplete,
    setLastVisitedLesson,
    isLessonCompleted
  };
}