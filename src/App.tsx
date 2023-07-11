import Home from "./pages/Home";
import { SelectLineProvider } from "./context/SelectedLineProvider";

function App() {
  return (
    <SelectLineProvider>
      <Home />
    </SelectLineProvider>
  );
}

export default App;
