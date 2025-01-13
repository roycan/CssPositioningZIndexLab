import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import type { Lesson } from "@/lib/types";

interface NavigationProps {
  lessons: Lesson[];
  activeLesson: number;
  onSelect: (index: number) => void;
  completedLessons: string[];
}

export function Navigation({ lessons, activeLesson, onSelect, completedLessons }: NavigationProps) {
  return (
    <nav className="space-y-2">
      {lessons.map((lesson, index) => (
        <Button
          key={index}
          variant={activeLesson === index ? "default" : "ghost"}
          className="w-full justify-start gap-2"
          onClick={() => onSelect(index)}
        >
          {completedLessons.includes(lesson.id) ? (
            <CheckCircle2 className="h-4 w-4 text-primary" />
          ) : (
            <Circle className="h-4 w-4 text-muted-foreground" />
          )}
          {lesson.title}
        </Button>
      ))}
    </nav>
  );
}