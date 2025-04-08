import { useNavigate, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/home.png';
import undoIcon from '../../assets/undo.png';
import SearchFunc from '../SearchFunc';

const FuncArea=()=>{
    // 검색 목록을 클릭했을 때 받아온 state
    const state=useLocation().state;

    // 버튼 동작 경로 설정
    const nav=useNavigate();
    const onClickHome=()=>{
        nav('/');
    }
    const onClickUndo=()=>{
        if(state){
            nav(-1);
        }
        else{
            // 홈 화면을 거치지 않고 접속했을 경우 뒤로가기 버튼 클릭 시 홈으로
            nav('/');
        }
    }

    const time=new Date().getHours();
    const isNight=time<6 || time>=18;

    return (
        <section className={`FuncArea isNight_${isNight}`}>
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