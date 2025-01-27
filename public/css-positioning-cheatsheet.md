# CSS Positioning Cheatsheet

## Position Properties

### Static (Default)
```css
.element {
    position: static;
}
```
- Default positioning
- Follows normal document flow
- Top, right, bottom, left, and z-index have no effect

### Relative
```css
.element {
    position: relative;
    top: 20px;
    left: 20px;
}
```
- Positioned relative to its normal position
- Creates a positioning context for absolute children
- Takes up space in normal flow
- Can use top, right, bottom, left

### Absolute
```css
.element {
    position: absolute;
    top: 0;
    right: 0;
}
```
- Positioned relative to nearest positioned ancestor
- Removed from normal flow
- Other elements ignore it
- Can use top, right, bottom, left

### Fixed
```css
.element {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```
- Positioned relative to viewport
- Stays in place during scrolling
- Removed from normal flow
- Can use top, right, bottom, left

### Sticky
```css
.element {
    position: sticky;
    top: 0;
}
```
- Hybrid of relative and fixed
- Becomes fixed when scroll position is reached
- Must specify at least one threshold (top, right, bottom, or left)

## Z-Index

```css
.element {
    position: relative;
    z-index: 10;
}
```
- Controls stacking order
- Only works on positioned elements
- Higher values appear on top
- Can be negative
