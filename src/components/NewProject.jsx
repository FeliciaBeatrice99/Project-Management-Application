import Input from "./Input";
import { useState, useImperativeHandle, useRef, forwardRef } from "react";

const NewProject = forwardRef(function NewProject({ handleButton, handleSave }, ref) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const [value1, setValue1] = useState({}); 

  function handleInputChange(key, value) {
    setValue1((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => handleButton(false)}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={()=>handleSave(value1)}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          label="Title"
          onChange={() => handleInputChange("title", title.current.value)}
          ref={title}
        />
        <Input
          label="Description"
          textarea
          onChange={() => handleInputChange("description", description.current.value)}
          ref={description}
        />
        <Input
          label="Due Date"
          type="date"
          onChange={() => handleInputChange("date", date.current.value)}
          ref={date}
        />
      </div>
    </div>
  );
});

export default NewProject;
