import { useState } from "react";

const lessons = [
  {
    title: "Default (Static)",
    content: "Elements with position: static are positioned according to the normal document flow."
  },
  {
    title: "Relative",
    content: "Elements with position: relative are positioned relative to their normal position."
  },
  {
    title: "Absolute",
    content: "Elements with position: absolute are positioned relative to their nearest positioned ancestor."
  }
];

export default function HomePage() {
  const [activeLesson, setActiveLesson] = useState(0);
  const currentLesson = lessons[activeLesson];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>CSS Positioning Tutorial</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Navigation */}
        <nav style={{ width: '200px' }}>
          {lessons.map((lesson, index) => (
            <button
              key={index}
              onClick={() => setActiveLesson(index)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: activeLesson === index ? '#0066cc' : 'white',
                color: activeLesson === index ? 'white' : 'black',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {index + 1}. {lesson.title}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '4px' }}>
          <h2 style={{ marginBottom: '20px' }}>{currentLesson.title} Positioning</h2>
          <p style={{ marginBottom: '30px' }}>{currentLesson.content}</p>

          {/* Demo */}
          <div style={{ 
            position: 'relative',
            height: '300px',
            backgroundColor: '#f8f8f8',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#e6f0ff',
              border: '1px solid #0066cc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: currentLesson.title.toLowerCase() as any
            }}>
              Positioned Box
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}