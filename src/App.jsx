import Sidebar from "./components/Sidebar";
import MainDisplay from "./components/MainDisplay";
import Project from "./components/Project";

function App() {
  return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <Project />
      </main>
  );
}

export default App;
