// import { Button } from "./components/ui/button";
import { InputForm } from "./pages/InputForm";
import RandomWordForm from "./pages/RandomWordForm";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">GAME VERB</h1>

      <div>
        <RandomWordForm />
        <div className="border my-4"></div>
        <InputForm />
        <div className="border my-4"></div>
        <div className="border my-4"></div>
      </div>
    </div>
  );
}

export default App;
