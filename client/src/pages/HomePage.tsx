import { Navigation } from "@/components/Navigation";
import { LessonContent } from "@/components/LessonContent";
import { Demo } from "@/components/Demo";
import { PracticeExercise } from "@/components/PracticeExercise";
import { Card } from "@/components/ui/card";
import { lessons } from "@/content/lessons";
import { useState } from "react";

export default function HomePage() {
  const [activeLesson, setActiveLesson] = useState(0);
  const currentLesson = lessons[activeLesson];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            CSS Positioning Tutorial
          </h1>
          <p className="mt-2 text-muted-foreground">
            Learn CSS positioning through interactive examples and practice
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <Navigation 
              lessons={lessons}
              activeLesson={activeLesson}
              onSelect={setActiveLesson}
            />
          </div>

          <main className="lg:col-span-9 space-y-8">
            <Card className="p-6">
              <LessonContent content={currentLesson.content} />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
              <Demo demo={currentLesson.demo} />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
              <PracticeExercise exercise={currentLesson.exercise} />
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
