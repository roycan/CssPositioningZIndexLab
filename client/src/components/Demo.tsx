import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Demo as DemoType } from "@/lib/types";

export function Demo({ demo }: { demo: DemoType }) {
  const [currentPosition, setCurrentPosition] = useState(demo.defaultPosition);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        {demo.positions.map((position) => (
          <Button
            key={position}
            variant={currentPosition === position ? "default" : "outline"}
            onClick={() => setCurrentPosition(position)}
          >
            position: {position}
          </Button>
        ))}
      </div>

      <Card className="relative bg-muted p-8 h-[300px] overflow-hidden">
        <div 
          className="absolute bg-primary/20 border border-primary p-4 rounded-md w-[100px] h-[100px] flex items-center justify-center text-sm"
          style={{ position: currentPosition as 'static' | 'relative' | 'absolute' }}
        >
          Positioned Element
        </div>
      </Card>

      <div className="mt-4 p-4 bg-muted rounded-md">
        <pre className="text-sm">
          {demo.codeExample(currentPosition)}
        </pre>
      </div>
    </div>
  );
}