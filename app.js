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
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li
        style={style}
        onClick={this.onClick.bind(this)}
        // onDoubleClick={this.onClick.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

var List = (props) => (
  <div>
  <h2>Items to Get</h2>
  <ul>
    {props.items.map((item, i) =>
      <ShoppingListItem key={i} item={item} />
    )}
  </ul>
  </div>
);

ReactDOM.render(<List items={['Kale', 'Cucumber', 'Onions']} />, document.getElementById('app'));