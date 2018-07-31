var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// View a more complex version of this project with custom toolbar here: https://codepen.io/no_stack_dub_sack/pen/JbPZvm?editors=0110

// coded by @no-stack-dub-sack (github) / @no_stack_sub_sack (codepen)

var projectName = "markdown-previewer";
localStorage.setItem('example_project', 'Markdown Previewer');

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return '<a target="_blank" href="' + href + '">' + text + '</a>';
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleEditorMaximize = _this.handleEditorMaximize.bind(_this);
    _this.handlePreviewMaximize = _this.handlePreviewMaximize.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        markdown: e.target.value
      });
    }
  }, {
    key: 'handleEditorMaximize',
    value: function handleEditorMaximize() {
      this.setState({
        editorMaximized: !this.state.editorMaximized
      });
    }
  }, {
    key: 'handlePreviewMaximize',
    value: function handlePreviewMaximize() {
      this.setState({
        previewMaximized: !this.state.previewMaximized
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.state.editorMaximized ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] : this.state.previewMaximized ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress'] : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: classes[0] },
          React.createElement(Toolbar, {
            icon: classes[2],
            onClick: this.handleEditorMaximize,
            text: 'Editor' }),
          React.createElement(Editor, { markdown: this.state.markdown,
            onChange: this.handleChange })
        ),
        React.createElement('div', { className: 'converter' }),
        React.createElement(
          'div',
          { className: classes[1] },
          React.createElement(Toolbar, {
            icon: classes[2],
            onClick: this.handlePreviewMaximize,
            text: 'Previewer' }),
          React.createElement(Preview, { markdown: this.state.markdown })
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

var Toolbar = function Toolbar(props) {
  return React.createElement(
    'div',
    { className: 'toolbar' },
    React.createElement('i', { title: 'no-stack-dub-sack', className: 'fa fa-free-code-camp' }),
    props.text,
    React.createElement('i', { onClick: props.onClick, className: props.icon })
  );
};

var Editor = function Editor(props) {
  return React.createElement('textarea', { id: 'editor',
    value: props.markdown,
    onChange: props.onChange,
    type: 'text' });
};

var Preview = function Preview(props) {
  return React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } });
};

var placeholder = '# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n';

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));