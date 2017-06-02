class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onClick() {
    if (this.state.done) {
      this.setState({
        done: false
      });
    } else {
      this.setState({
        done: true
      });
    }
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'bold'
    };
    return (
      <li
        style={style}
        onClick={this.onClick.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

var List = (props) => (
  <ul>
    {props.items.map(item =>
      <ShoppingListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<List items={['Kale', 'Cucumber', 'Onions']} />, document.getElementById('app'));