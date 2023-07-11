import Home from "./pages/Home";
import { SelectLineProvider } from "./context/selectedLineProvider";

function App() {
  return (
    <SelectLineProvider>
      <Home />
    </SelectLineProvider>
  );
}

export default App;
