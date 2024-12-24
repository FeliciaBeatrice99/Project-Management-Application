import { forwardRef, useRef, useImperativeHandle } from "react";

const Modal= forwardRef(function Modal({info},ref) {
    const dialog = useRef()
    useImperativeHandle(ref, ()=>{
        return {
            open() {
                dialog.current.showModal()
        }
    }
    })
    
    return <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>
        <h2 className="text-xl font-bold text-stone-700 my-4">{info} is missing</h2>
        <p className="text-stone-600 mb-4">Kindly update to save your project</p>
        <form className="mt-4 text-right"  method="dialog">
            <button>close</button>
        </form>
    </dialog>
})


export default Modal;