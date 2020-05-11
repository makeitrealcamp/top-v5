# Forms

1. ¿Cuál de las siguientes opciones es la forma correcta de crear un formulario?

  1.1.
```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input type="number" onChange={changeAge} value={this.state.age} />
      </form>
    );
  }
}
```

  1.1.
```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input type="number" onChange={this.changeAge.bind(this)} value={this.props.age} />
      </form>
    );
  }
}
```

  1.1. (correcta)
```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input type="number" onChange={this.changeAge.bind(this)} value={this.state.age} />
      </form>
    );
  }
}
```

  1.1.
```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input type="number" onchange={this.changeAge.bind(this)} value={this.state.age} />
      </form>
    );
  }
}
```
