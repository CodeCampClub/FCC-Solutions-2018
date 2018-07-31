# CSS Grid: Add Columns with grid-template-columns

Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the `grid-template-columns` property on a grid container as demonstrated below:

```
    .container {
    display: grid;
    grid-template-columns: 50px 50px;
    }
```

This will give your grid two columns that are 50px wide each.

The number of parameters given to the `grid-template-columns` property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.


Give the grid container three columns that are `100px` wide each.

### Tests

`container` class should have a `grid-template-columns property` with three units of `100px`.