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

  function handleSaveProject(projectData) {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId
    }
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects,newProject],
      };
    });
  }
  
  function handleCancel() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  console.log(projectsState)
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <Project onAdd={handleSaveProject} onCancel={handleCancel}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  }
  return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar  onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
        {content}
      </main>
  );
}

export default App;
