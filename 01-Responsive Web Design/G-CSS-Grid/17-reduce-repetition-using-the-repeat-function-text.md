# CSS Grid: Reduce Repetition Using the repeat Function

When you used `grid-template-columns` and `grid-template-rows` to define the structure of a grid, you entered a value for each row or column you created.

Lets say you want a grid with 100 rows of the same height. It isn't very practical to insert 100 values individually. Fortunately, there's a better way - by using the `repeat` function to specify the number of times you want your column or row to be repeated, followed by a comma and the value you want to repeat.

Here's an example that would create the 100 row grid, each row at 50px tall.

``` grid-template-rows: repeat(100, 50px); ```

You can also repeat multiple values with the repeat function, and insert the function amongst other values when defining a grid structure. Here's what I mean:

``` grid-template-columns: repeat(2, 1fr 50px) 20px; ```

This translates to:

``` grid-template-columns: 1fr 50px 1fr 50px 20px; ```

### Note

``` 1fr 50px is repeated twice followed by 20px. ```

Use `repeat` to remove repetition from the `grid-template-columns` property.

### Tests

`container` class should have a `grid-template-columns` property that is set to repeat 3 columns with the width of `1fr`.