# CSS Grid: Create Flexible Layouts Using auto-fit

`auto-fit` works almost identically to `auto-fill`. The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and pushes your items to the side, while `auto-fit` collapses those empty rows or columns and stretches your items to fit the size of the container.

# Note:

If your container can't fit all your items on one row, it will move them down to a new one.

In the second grid, use `auto-fit` with `repeat` to fill the grid with columns that have a minimum width of `60px` and maximum of `1fr`. Then resize the preview to see the difference.

### Tests: 

`container2` class should have a `grid-template-columns` property with `repeat` and `auto-fit` that will fill the grid with columns that have a minimum width of `60px` and maximum of `1fr`.