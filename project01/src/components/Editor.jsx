import './Editor.css';
import Button from './Button';
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';


const Editor=()=>{
    const {onCreate}=useContext(TodoDispatchContext);

    const [inputs, setInputs]=useState({
        title:'',
        content:'',
        date:'',
        time:''
    });

    const {title, content, date, time}=inputs;

    const onChange=(e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        });
    }

    const onCancel=()=>{
        setInputs({
            title:'',
            content:'',
            date:'',
            time:''
        });
    }

    const titleRef=useRef();

    const onSubmit=()=>{
        if(inputs.title===''){
            titleRef.current.focus();
            return;
        }
        onCreate(inputs);
        onCancel();
    }

    return (
        <section className='mb_xlg'>
            <div className='inner_1280'>
                <div className='Editor'>
                    <form>
                        <input type="text" name="title" value={title} onChange={onChange} placeholder="작업" className='mb_xsm' ref={titleRef} />
                        <textarea name="content" value={content} onChange={onChange} placeholder="세부 내용" className='mb_sm' />
                        <p className='mb_xsm'>* 마감 일자를 정해주세요.</p>
                        <div className='flex j-sb'>
                            <div className='deadline'>
                                <input type="date" name="date" value={date} onChange={onChange} className='input input_short' />
                                <input type="time" name="time" value={time} onChange={onChange} className='input input_short' />
                            </div>
                            <div className='button_area'>
                                <Button type={'NEGATIVE'} text={'취소'} onClick={onCancel} />
                                <Button type={'POSITIVE'} text={'작성'} onClick={onSubmit} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Editor;