import { useState, useRef, useReducer, useCallback, createContext, useMemo, useEffect } from "react"
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

// const mockData=[
//   {id:0, title:'할일 1', content:'뒹굴뒹굴', date:'2025-01-01', time:'10:05', isDone:false},
//   {id:1, title:'할일 2', content:'탱자탱자', date:'2025-01-05', time:'15:55', isDone:false},
//   {id:2, title:'할일 3', content:'닐리리야', date:'2025-01-02', time:'12:00', isDone:false}
// ]

const reducer=(state, action)=>{
  let nextState;

  switch(action.type){
    case 'INIT' : return action.data;
    case 'CREATE' : {
      nextState=[...state, action.data]
      break;
    };
    case 'ORDER' : {
      let orderList=document.querySelectorAll('ul.order > li');
    
      for(const i of orderList){
        i.classList.remove('active');
      }

      if(action.data.target.innerText==='작성순'){
        action.data.target.classList.add('active');
        nextState=[...state].sort((a,b)=>a.id - b.id);
      }
      else if(action.data.target.innerText==='마감 임박순'){
        action.data.target.classList.add('active');
        nextState=[...state].sort((a,b)=>a.date===b.date ? new Date(a.time)-new Date(b.time) : new Date(a.date)-new Date(b.date));
      }
      break;
    }
    case 'UPDATE' : {
      nextState=state.map((item)=>item.id===action.data ? {...item, isDone:!item.isDone} : item);
      break;
    }
    case 'DELETE' : {
      nextState=state.filter((item)=>item.id!==action.data);
      break;
    }
    default : return state;
  }

  localStorage.setItem('todoList', JSON.stringify(nextState));
  return nextState;
}

export const TodoStateContext=createContext();
export const TodoDispatchContext=createContext();

function App() {
  const [todos, dispatch]=useReducer(reducer, []);
  const idRef=useRef(0);

  useEffect(()=>{
    const storedData=localStorage.getItem('todoList');
    if(!storedData)
      return;

    const parsedData=JSON.parse(storedData);

    let maxId=0;

    if(!Array.isArray(parsedData))
      return;
    
    for(const item of parsedData){
      Number(item.id)>maxId ? maxId=Number(item.id) : maxId;
    }
    idRef.current=maxId+1;

    dispatch({
      type:'INIT',
      data:parsedData
    });
  }, []);

  const onCreate=useCallback(({title, content, date, time})=>{
    dispatch({
      type:'CREATE',
      data: {
        id:idRef.current++,
        title:title,
        content:content,
        date:date,
        time:time,
        isDone:false
      }
    });
  }, []);

  const onOrder=useCallback((e)=>{
    dispatch({
      type:'ORDER',
      data:e
    });
  }, []);

  const onUpdate=useCallback((targetId)=>{
    dispatch({
      type:'UPDATE',
      data:targetId
    });
  }, []);

  const onDelete=useCallback((targetId)=>{
    dispatch({
      type:'DELETE',
      data:targetId
    });
  }, []);

  const memoizedDispatch=useMemo(()=>{
    return {onCreate, onOrder, onUpdate, onDelete};
  }, []);

  return (
    <>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      
    </>
  )
}

export default App
