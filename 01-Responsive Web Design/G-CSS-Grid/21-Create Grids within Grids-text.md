# CSS Grid: Create Grids within Grids

Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

For example, by setting the display and grid-template-columns properties of the element with the item3 class, you create a grid within your grid.


Turn the element with the item3 class into a grid with two columns with a width of auto and 1fr using display and grid-template-columns.

### Tests:

* item3 class should have a grid-template-columns property with auto and 1fr as values.
* item3 class should have a display property with the value of grid.

