import "./App.css";
import { useRoute } from "./routes/Routes";
function App() {
  const myRouteObject = useRoute();
  return <div className="App">{myRouteObject}</div>;
}

export default App;
