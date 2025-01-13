import { Button } from "@/components/ui/button";
import type { Lesson } from "@/lib/types";

interface NavigationProps {
  lessons: Lesson[];
  activeLesson: number;
  onSelect: (index: number) => void;
}

export function Navigation({ lessons, activeLesson, onSelect }: NavigationProps) {
  return (
    <nav className="space-y-2">
      {lessons.map((lesson, index) => (
        <Button
          key={index}
          variant={activeLesson === index ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onSelect(index)}
        >
          {index + 1}. {lesson.title}
        </Button>
      ))}
    </nav>
  );
}