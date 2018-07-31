CSS Grid: Use grid-area Without Creating an Areas Template
The grid-area property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:

item1 { grid-area: 1/1/2/4; }
This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:

grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.


Using the grid-area property, place the element with item5 class between the third and fourth horizontal lines and between the first and fourth vertical lines.