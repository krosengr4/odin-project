# ALIGNMENT

### Justify Content and Align Items
- The Justify Content rule in CSS will align items across the main axis.
- Adding flex: 1; will make each of the items grow to fill the available space, but won't stay the same width.

- Use *justify-content* rule to stay the same width and distribute themselves evenly across the container.
- space-between:
- center: centers the "boxes" along the main axis.
    - Ex: .container {
        justify-content: space-between;
    }

- Align Items in CSS will change the placement of items along the cross axis.
    - Ex: .container {
        align-items: center;
    }

### Gap
- Setting *gap* on a flex container adds a specified space between flex items.
    - Ex: .container {
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
