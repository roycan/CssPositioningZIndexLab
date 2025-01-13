import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { LessonContent } from "@/components/LessonContent";
import { Demo } from "@/components/Demo";
import { PracticeExercise } from "@/components/PracticeExercise";
import { useProgress } from "@/hooks/useProgress";
import { lessons } from "@/content/lessons";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HomePage() {
  const [activeLesson, setActiveLesson] = useState(0);
  const { progress, markLessonComplete, isLessonCompleted } = useProgress();
  const currentLesson = lessons[activeLesson];

  const handleComplete = () => {
    if (currentLesson && !isLessonCompleted(currentLesson.id)) {
      markLessonComplete(currentLesson.id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
          <aside className="w-64 shrink-0">
            <Navigation
              lessons={lessons}
              activeLesson={activeLesson}
              onSelect={setActiveLesson}
              completedLessons={progress.completedLessons}
            />
          </aside>

          <main className="flex-1 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{currentLesson.title}</h1>
              <Button
                onClick={handleComplete}
                variant={isLessonCompleted(currentLesson.id) ? "secondary" : "default"}
                disabled={isLessonCompleted(currentLesson.id)}
              >
                {isLessonCompleted(currentLesson.id) ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Completed
                  </>
                ) : (
                  "Mark as Complete"
                )}
              </Button>
            </div>

            <div className="space-y-8">
              <LessonContent content={currentLesson.content} />
              <Demo demo={currentLesson.demo} />
              <PracticeExercise exercise={currentLesson.exercise} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}