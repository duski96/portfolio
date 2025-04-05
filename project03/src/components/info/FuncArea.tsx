import { useNavigate } from 'react-router-dom';
import homeIcon from '../../assets/home.png';
import undoIcon from '../../assets/undo.png';
import SearchFunc from '../SearchFunc';

const FuncArea=()=>{
    const nav=useNavigate();
    const onClickHome=()=>{
        nav('/');
    }
    const onClickUndo=()=>{
        nav(-1);
    }

    return (
        <section className='FuncArea'>
            <div className='inner_1000'>
                <div className='func_wrap'>
                    <div className='button_wrap'>
                        <button onClick={onClickHome}><img src={homeIcon} alt="홈 아이콘" /></button>
                        <button onClick={onClickUndo}><img src={undoIcon} alt="뒤로가기 아이콘" /></button>
                    </div>
                    <div className='search_wrap'>
                        <SearchFunc />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FuncArea;