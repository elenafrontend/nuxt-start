export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('log', () => console.log('Hello from plugin'))
}