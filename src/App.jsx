import Sidebar from "./components/Sidebar";
import MainDisplay from "./components/MainDisplay";
import Project from "./components/Project";
import NoProject from "./components/NoProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <Project />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  }
  return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar  onStartAddProject={handleStartAddProject}/>
        {content}
      </main>
  );
}

export default App;
