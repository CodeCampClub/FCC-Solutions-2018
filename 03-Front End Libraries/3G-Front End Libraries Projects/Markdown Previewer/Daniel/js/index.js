let DisplayContainer = React.createClass({
  updateValue: function(modifiedValue) {
    this.setState({
      value: modifiedValue
    })
  },
  getInitialState: function() {
    return {
      value: 
      
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
    }
  },
  rawMarkup: function(value) {
    let rawMarkup = marked(value, {
      sanitize: true
    });
    return {
      __html: rawMarkup
    };
  },
  render: function() {
    return (
      <div className="row boxes">
        <div className="col-md-6 MarkdownInput box1">
          <RawInput value={ this.state.value } updateValue={ this.updateValue }/>
        </div>
        <div className="col-md-6 MarkdownOutput box2">
          <span id="preview" dangerouslySetInnerHTML={ this.rawMarkup(this.state.value) } />
        </div>
      </div>
    );
  }
});
var Editor = function Editor(props) {
  return React.createElement('textarea', { id: 'editor',
    value: props.markdown,
    onChange: props.onChange,
    type: 'text' });
};

let RawInput = React.createClass({
  update: function() {
    let modifiedValue = this.refs.inputValue.getDOMNode().value;
    this.props.updateValue(modifiedValue);
  },
  render: function() {
    return (<textarea id="editor" rows="75" type="text" ref="inputValue" value={ this.props.value } onChange={ this.update } name="code" className="form-control cm-s-icecoder code" />)
  }
});

React.render(<DisplayContainer />, document.getElementById("containerMarkdown"));

$(document).ready(function() {
  $('#summernote1').summernote();
  $('#summernote2').summernote();
});

let editor = CodeMirror.fromTextArea(document.getElementByClass("code"), {
  lineNumbers: true,
  lineWrapping: true,
  mode: "markdown"
});