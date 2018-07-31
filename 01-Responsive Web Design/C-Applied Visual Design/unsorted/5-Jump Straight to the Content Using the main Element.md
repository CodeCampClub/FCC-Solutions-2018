# Applied Accessibility: Jump Straight to the Content Using the main Element

HTML5 introduced a number of new elements that give developers more options while also incorporating accessibility features. These tags include main, header, footer, nav, article, and section, among others.

By default, a browser renders these elements similarly to the humble div. However, using them where appropriate gives additional meaning in your markup. The tag name alone can indicate the type of information it contains, which adds semantic meaning to that content. Assistive technologies can access this information to provide better page summary or navigation options to their users.

The main element is used to wrap (you guessed it) the main content, and there should be only one per page. It's meant to surround the information that's related to the central topic of your page. It's not meant to include items that repeat across pages, like navigation links or banners.

The main tag also has an embedded landmark feature that assistive technology can use to quickly navigate to the main content. If you've ever seen a "Jump to Main Content" link at the top of a page, using a main tag automatically gives assistive devices that functionality.

## Task:

Camper Cat has some big ideas for his ninja weapons page. Help him set up his markup by adding opening and closing main tags between the header and footer (covered in other challenges). Keep the main tags empty for now.

## Tests:

* Your code should have one main tag.
* The main tags should be between the closing header tag and the opening footer tag.
