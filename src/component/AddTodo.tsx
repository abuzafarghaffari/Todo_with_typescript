import { useContext,useRef } from "react";
import {useTaskDispatch} from './ContextProvider';

let ID=2;

const AddTodo:React.FC =()=>{
const InputRef = useRef<HTMLInputElement>(null);
const {dispatch} = useTaskDispatch();

const submithandler =(event:React.FormEvent)=>{
event.preventDefault();
//console.log("dis");
dispatch({
    type:"add",
       payload:{
        id:ID++,
        text:InputRef.current!.value
    }
})
};

return (
    <form onSubmit ={submithandler}>
        <input type="text" ref ={InputRef}/>
        <button type="submit">Add</button>
    </form>
)

}

export default AddTodo;