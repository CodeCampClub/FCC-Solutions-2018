
class StatefulComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Free Code Camp!'
		}
	}
  render() {
    return (
	    <div>
	    	<h1>{this.state.name}</h1>
	    </div>
    );
  }
};