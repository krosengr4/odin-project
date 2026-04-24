# FLEXBOX GROW AND SHRINK

- The flex declaration is actually shorthand for 3 properties: flex-grow, flex-shrink, and flex-basis.
- Whenever "flex: 1;" is set, this means flex-grow : 1 , flex-shrink: 1 , and flex-basis: 0;

## Flex Grow
- Used for a flex-item's "growth" factor.
- When flex: 1 is applied, we are telling every div to grow the same amount.
- If we applied flex: 2 to just one of the divs, then that div would grow twice the size of others.

## Flex Shrink
- Similar to flex-grow, but this sets the "shrink factor".
- Shrink only gets applied if the size of all flex items is larger than their parent container.
- flex-shrink: 1; is default which means all items will shrink evenly.
- flex items do not necessarily respect the given values for width.

## Flex Basis
- flex-basis is the initial size of a flex item, so any sort of growing or shrinking starts with the baseline size.

## What is Flex Auto?
- flex: auto; is one of the shorthand's of flex.
- When flex: auto; is defined it is equivalent to using flex: 1 1 auto;

## Overall
- In practice you will not likely be using complex values for flex-grow, flex-shrink, or flex-basis.
- Generally you will use flex: 1; to make div's grow evenly, and then flex-shrink: 0; to keep certain div's from shrinking.

#### Useful Links
- Basic Values of flex: https://www.w3.org/TR/css-flexbox-1/#flex-common
- MDN's flex documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex
