import {useState} from 'react';
import {TodoType} from './Type/dataType';
import {useMyList,useTaskDispatch} from './ContextProvider';



const TodoList:React.FC =()=>{

    const lists = useMyList();
   
return (
        <ul>
            {lists.map((list)=>{
             return <List key ={list.id} list={list} />
            })}
        </ul>
    )
};
export default TodoList;



const List:React.FC<{list:TodoType}> =(props)=>{
const [edit, setEdit] = useState(false);
const {dispatch} = useTaskDispatch();

const deleteHandler =(id:number)=>{
dispatch({
    type:"delete",
    payload:id
})
}

const editHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
    
dispatch({
    type:"edit",
    payload:{
        ...props.list,
        text:event.target.value
    }
})
}


let content;

if(edit){
content = (<>
<input type="text" defaultValue={props.list.text} onChange ={editHandler}/>
<button onClick ={()=>setEdit(false)}>Save</button>
</>
)
}else{
    content = (<>
    <span>{props.list.text}</span>
    <button onClick ={()=>setEdit(true)}>Edit</button>
    </>)
}
    return(
        <div>
            {content}
            <button onClick ={()=>deleteHandler(props.list.id)}>Delete</button>
        </div>
    )
}


