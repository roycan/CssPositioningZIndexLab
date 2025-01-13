import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Exercise } from "../lib/types";

export function PracticeExercise({ exercise }: { exercise: Exercise }) {
  const [code, setCode] = useState(exercise.startingCode);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">{exercise.instructions}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Textarea
            value={showSolution ? exercise.solution : code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono h-[200px]"
            disabled={showSolution}
          />
          <Button 
            className="mt-2"
            variant={showSolution ? "destructive" : "default"}
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </Button>
        </div>

        <Card className="p-4 bg-muted">
          <div className="relative h-[200px]">
            <style>{showSolution ? exercise.solution : code}</style>
            <div className="target bg-primary/20 border border-primary w-20 h-20 flex items-center justify-center">
              Target
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}