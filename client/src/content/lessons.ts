import type { Lesson } from "@/lib/types";

export const lessons: Lesson[] = [
  {
    title: "Default (Static) Positioning",
    content: `
      <h2>Default Positioning</h2>
      <p>Elements with <code>position: static</code> are positioned according to the normal flow of the document. This is the default positioning behavior in CSS.</p>
      <ul>
        <li>Not affected by top, bottom, left, or right properties</li>
        <li>Follows the natural document flow</li>
        <li>Most commonly used positioning method</li>
      </ul>
    `,
    demo: {
      defaultPosition: "static",
      positions: ["static"],
      codeExample: (pos: string) => `.element {
  position: ${pos};
}`
    },
    exercise: {
      instructions: "Create a static positioned element that follows the normal document flow.",
      startingCode: `.target {
  /* Add your code here */
}`,
      solution: `.target {
  position: static;
}`
    }
  },
  {
    title: "Relative Positioning",
    content: `
      <h2>Relative Positioning</h2>
      <p>Elements with <code>position: relative</code> can be moved relative to their normal position using top, right, bottom, and left properties.</p>
      <ul>
        <li>Position is relative to its normal position</li>
        <li>Takes up space in normal flow</li>
        <li>Other elements are not affected</li>
      </ul>
    `,
    demo: {
      defaultPosition: "relative",
      positions: ["relative"],
      codeExample: (pos: string) => `.element {
  position: ${pos};
  top: 20px;
  left: 20px;
}`
    },
    exercise: {
      instructions: "Position the element 30px from the top and 30px from the left of its normal position.",
      startingCode: `.target {
  /* Add your code here */
}`,
      solution: `.target {
  position: relative;
  top: 30px;
  left: 30px;
}`
    }
  },
  {
    title: "Absolute Positioning",
    content: `
      <h2>Absolute Positioning</h2>
      <p>Elements with <code>position: absolute</code> are removed from the normal document flow and positioned relative to their nearest positioned ancestor.</p>
      <ul>
        <li>Removed from normal flow</li>
        <li>Positioned relative to nearest positioned ancestor</li>
        <li>Can overlap other elements</li>
      </ul>
    `,
    demo: {
      defaultPosition: "absolute",
      positions: ["absolute"],
      codeExample: (pos: string) => `.element {
  position: ${pos};
  top: 0;
  right: 0;
}`
    },
    exercise: {
      instructions: "Position the element in the bottom right corner of its container.",
      startingCode: `.target {
  /* Add your code here */
}`,
      solution: `.target {
  position: absolute;
  bottom: 0;
  right: 0;
}`
    }
  },
  {
    title: "Fixed Positioning",
    content: `
      <h2>Fixed Positioning</h2>
      <p>Elements with <code>position: fixed</code> are positioned relative to the viewport and stay in place even when scrolling.</p>
      <ul>
        <li>Positioned relative to the viewport</li>
        <li>Stays fixed while scrolling</li>
        <li>Removed from the document flow</li>
      </ul>
    `,
    demo: {
      defaultPosition: "fixed",
      positions: ["fixed"],
      codeExample: (pos: string) => `.element {
  position: ${pos};
  top: 20px;
  right: 20px;
}`
    },
    exercise: {
      instructions: "Create a fixed element that stays in the top-right corner of the viewport.",
      startingCode: `.target {
  /* Add your code here */
}`,
      solution: `.target {
  position: fixed;
  top: 20px;
  right: 20px;
}`
    }
  },
  {
    title: "Sticky Positioning",
    content: `
      <h2>Sticky Positioning</h2>
      <p>Elements with <code>position: sticky</code> toggle between relative and fixed positioning based on the scroll position.</p>
      <ul>
        <li>Acts like relative positioning until a scroll threshold</li>
        <li>Becomes fixed after reaching the threshold</li>
        <li>Stays within its parent container</li>
      </ul>
    `,
    demo: {
      defaultPosition: "sticky",
      positions: ["sticky"],
      codeExample: (pos: string) => `.element {
  position: ${pos};
  top: 0;
}`
    },
    exercise: {
      instructions: "Create a sticky header that stays at the top of the viewport while scrolling within its container.",
      startingCode: `.target {
  /* Add your code here */
}`,
      solution: `.target {
  position: sticky;
  top: 0;
}`
    }
  }
];