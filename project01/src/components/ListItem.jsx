import './ListItem.css';
import Button from './Button';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const ListItem=({id, title, content, date, time, idx, isDone})=>{

    const {onDelete, onUpdate}=useContext(TodoDispatchContext);

    const onDeleteClick=()=>{
       const confirmDone=confirm(`선택하신 '${title}' 작업을 삭제할까요? 복구는 불가능해요.`);
        
       if(confirmDone)
        onDelete(id);
    }

    const onUpdateClick=()=>{
        const confirmDone=confirm(`선택하신 '${title}' 작업을 완료처리할까요?`);

        if(confirmDone){
            onUpdate(id);
        }
    }

    return (
        <>
            <li className={`ListItem isDone_${isDone}`}>
                <div className='title_area'>
                    <div className='list_num'>#{idx+1}</div>
                    <div className='list_title'>{title}</div>
                    <div className='list_deadline'>{date} <br className='mbr' />{time} 까지</div>
                    <div className='list_button'>
                        <Button text={isDone ? '완료' : '대기'} onClick={onUpdateClick} />
                        <Button type={'NEGATIVE'} text={'삭제'} onClick={onDeleteClick} />
                    </div>
                </div>
                <div className='content_area'>
                    <div className='list_content'>{content.split(' ').join('')==='' ? '세부사항이 없습니다.' : content}</div>
                </div>
            </li>
        </>
    );
}

export default memo(ListItem);