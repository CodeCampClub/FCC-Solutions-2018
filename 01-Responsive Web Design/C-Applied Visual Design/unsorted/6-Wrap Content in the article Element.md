# Applied Accessibility: Wrap Content in the article Element

article is another one of the new HTML5 elements that adds semantic meaning to your markup. Article is a sectioning element, and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts, or news articles.

Determining whether content can stand alone is usually a judgement call, but there are a couple simple tests you can use. Ask yourself if you removed all surrounding context, would that content still make sense? Similarly for text, would the content hold up if it were in an RSS feed?

Remember that folks using assistive technologies rely on organized, semantically meaningful markup to better understand your work.

## Note about section and div

The section element is also new with HTML5, and has a slightly different semantic meaning than article. An article is for standalone content, and a section is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the article, then each chapter is a section. When there's no relationship between groups of content, then use a div.


    <div> - groups content
    <section> - groups related content
    <article> - groups independent, self-contained content

## Task: 

Camper Cat used article tags to wrap the posts on his blog page, but he forgot to use them around the top one. Change the div tag to use an article tag instead.

## Tests: 

* Your code should have three article tags.
* Your code should not have any div tags.