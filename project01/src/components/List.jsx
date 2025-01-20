import './List.css';
import { useState, useContext } from 'react';
import ListItem from './ListItem';
import { TodoStateContext, TodoDispatchContext } from '../App';

const List=()=>{
    const todos=useContext(TodoStateContext);
    const {onOrder}=useContext(TodoDispatchContext);

    const [search, setSearch]=useState('');

    const onChange=(e)=>{
        setSearch(e.target.value);
    }

    const getSearchedData=()=>{
        if(search==='')
            return todos;

        return todos.filter((item)=>item.title.toLowerCase().includes(search) || item.content.toLowerCase().includes(search));
    }

    const searchedData=getSearchedData();

    const onOrderClick=(e)=>{
        onOrder(e);
    }

    return (
        <section>
            <div className='inner_1280'>
                <div className='List'>
                    <div className='func_area flex j-sb mb_lg'>
                        <input type='text' name="search" value={search} placeholder="검색어를 입력하세요." className='search' onChange={onChange} />
                        <ul className='order'>
                            <li onClick={onOrderClick} className='active'>작성순</li>
                            <li onClick={onOrderClick}>마감 임박순</li>
                        </ul>
                    </div>
                    <ul>
                        {searchedData.map((item, idx)=>{return <ListItem {...item} key={item.id} idx={idx} />})}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default List;