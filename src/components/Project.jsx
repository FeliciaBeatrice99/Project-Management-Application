import Input from "./Input";
import { useRef } from "react";

export default function Project({data, deleteValue}) {
    const task = useRef();
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{data.title}</h1>
<button className="text-stone-600 hover:text-stone-950" onClick={()=>deleteValue(data)}>Delete</button>

                </div>
                <p className="mb-4 text-stone-400">{data.description}</p>
<p className="text-stone-600 whitespace-pre-wrap">{data.date}</p>
            </header>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <Input label="Task" ref={task}/>
        </div>
    )
}