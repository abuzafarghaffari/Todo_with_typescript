import React ,{ ReactNode, createContext, useReducer, useContext } from "react";
import {ActionType, TodoType,} from './Type/dataType';

type dispatchContxType ={
    dispatch: React.Dispatch<any>
}
  
const initialState:TodoType[] = [
    {
        id: 1,
        text:"javascript"
    }
]


export const listContext = createContext<TodoType[]>(initialState);

export const dispatchContext = createContext<{dispatch: React.Dispatch<ActionType>}>({dispatch: () => null});


const ContextProvider:React.FC<{children:ReactNode}> =(props)=>{
const [lists, dispatch] = useReducer(reducer,initialState);

 //console.log("context",lists);
return (
<listContext.Provider value={lists}>
<dispatchContext.Provider value ={{dispatch}}>
{props.children}
</dispatchContext.Provider>
</listContext.Provider>
)
}

export const useTaskDispatch =() =>{
    const context = useContext(dispatchContext);
    return context;
}

export const useMyList =()=>{
    return useContext(listContext);
    
}


const reducer =(state:TodoType[],action:ActionType)=>{
switch(action.type){
    case "add":{
        return [...state,action.payload]
    }

    case "delete":{
         return state.filter((list)=> list.id !== action.payload)
    }
    case "edit" :{
        return state.map((list)=>{
            if(list.id === action.payload.id){
return action.payload
            } else {
                return list
            }
        })
    }
    default:{
        return state
    }
}

}
export default ContextProvider;

