class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemCount: 0
		};
		this.addItem = this.addItem.bind(this);
	}
	addItem() {
		this.setState({
			itemCount: this.state.itemCount + 1
		});
	}
	render() {
  	return (
	    <div>
        <button onClick = {this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
	    </div>
    );
  }
};