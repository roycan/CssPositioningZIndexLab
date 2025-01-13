import { Card } from "@/components/ui/card";

export function LessonContent({ content }: { content: string }) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
