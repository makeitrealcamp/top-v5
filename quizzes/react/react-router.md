# React Router

1. ¿Cuál es la forma correcta de navegar por nuestra aplicación usando React Router?

  1.1. <Link to="/">Home</Link> (correcta)
  1.1. <Anchor to="/">Home</Anchor>
  1.1. <a to="/">Home</a>
  1.1. <GoTo to="/">Home</GoTo>

1. ¿Cuál es el componente de React Router que nos permite definir que componente se renderiza en una ruta especifica?

  1.1. <BrowserRouter />
  1.1. <Link />
  1.1. <Route /> (correcta)
  1.1. <Router />

1. ¿Qué componente se renderiza si navegamos a http://localhost:3000/something?

Las rutas son las siguientes:

```javascript
function App () {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="*" component={Home} />
    <Router>
  );
}
```

 1.1. About
 1.1. Home (correcta)
 1.1. Portfolio
 1.1. Todos los anteriores.
 1.1. Ninguno de los anteriores

