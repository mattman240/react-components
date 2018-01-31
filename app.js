//
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.grocerys = ['test','test1','test2']
    this.state = {
      hover: false
    }
  }

  onHoverGrocery() {
  this.setState({
    hover: !this.state.hover
  });
}

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseOver={this.onHoverGrocery.bind(this)}>{this.props.grocery}</li>
    )
  }
}
// ['Cool','Grocery','List', 'Bro']
const GroceryList = (props) => (
  <ul>
    {['Cool','Grocery','List', 'Bro'].map(grocery =>
      <GroceryListItem grocery={grocery}/>
    )}
  </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById('app'))
