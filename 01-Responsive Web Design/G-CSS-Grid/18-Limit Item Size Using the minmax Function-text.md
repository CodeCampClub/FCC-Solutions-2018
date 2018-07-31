# CSS Grid: Limit Item Size Using the minmax Function

There's another built-in function to use with `grid-template-columns` and `grid-template-rows` called `minmax`. It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:

``` grid-template-columns: 100px minmax(50px, 200px); ```

In the code above, `grid-template-columns` is set to create two columns; the first is `100px` wide, and the second has the minimum width of `50px` and the maximum width of `200px`.


Using the `minmax` function, replace the `1fr` in the `repeat` function with a column size that has the minimum width of `90px` and the maximum width of `1fr`, and resize the preview panel to see the effect.

# Test:

`container` class should have a `grid-template-columns` property that is set to repeat 3 columns with the minimum width of `90px` and maximum width of `1fr`.
