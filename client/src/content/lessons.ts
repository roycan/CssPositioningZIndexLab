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
  }
];