import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import { useState, useRef } from "react";

function App() {
  const [newData, setNewData] = useState([]); 
  const newRef = useRef();


  const [component, setComponent] = useState(<NoProject handlesideBarButton={handlesideBarButton} />);
  function handleButton() {
    setComponent(<NoProject handlesideBarButton={handlesideBarButton} />)
  }
  function handlesideBarButton() {
    setComponent(<NewProject ref={newRef} handleButton={handleButton} handleSaveField={handleSaveField}  />)
  }

  function handleSaveField(newValue) {
    setNewData((prevData) => [...prevData, newValue]);
    setComponent(<NoProject handlesideBarButton={handlesideBarButton} />);

  }
  
  function deleteValue(obj) {
    const arrValue = newData.findIndex(data=>data.title === obj.title)
    const dulplicate = [...newData];
    dulplicate.splice(arrValue, 1)
    setNewData(dulplicate);
    setComponent(<NoProject handlesideBarButton={handlesideBarButton} />)
  }
  function project(value){
    setComponent(<Project data={value} deleteValue={deleteValue}/>)
  }
  console.log(newData);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handlesideBarButton={handlesideBarButton} newValues={newData} project={project}/>
      {component}
    </main>
  );
}

export default App;
