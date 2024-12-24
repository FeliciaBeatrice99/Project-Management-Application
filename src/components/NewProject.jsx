import Input from "./Input";
import Modal from "./Modal";
import { useState, useImperativeHandle, useRef, forwardRef } from "react";

const NewProject = forwardRef(function NewProject({ handleButton, handleSaveField }, ref) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const [value1, setValue1] = useState({}); 
  const [missingData, setMissingData] = useState()
  function handleSave() {
    const missingFields = [];
  
    if (title.current.value === "") {
      missingFields.push("Title");
    }
    if (description.current.value === "") {
      missingFields.push("Description");
    }
    if (date.current.value === "") {
      missingFields.push("Date");
    }
    if (missingFields.length > 0) {
      setMissingData(missingFields);
      ref.current.open()
    } else {
      const data = {
        "title": title.current.value,
        "description": description.current.value,
        "date": date.current.value
      }
      handleSaveField(data)
    }
  }

  return (
    <div className="w-[35rem] mt-16">
      <Modal ref={ref} info={missingData} />
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
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          label="Title"
          ref={title}
        />
        <Input
          label="Description"
          textarea
          ref={description}
        />
        <Input
          label="Due Date"
          type="date"
          ref={date}
        />
      </div>
    </div>
  );
});

export default NewProject;