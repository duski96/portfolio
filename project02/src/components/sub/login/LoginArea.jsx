import './LoginArea.css';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { LoginUserInfoContext } from '../../../App';

import axios from 'axios';

const LoginArea=()=>{
    const nav=useNavigate();

    // 로그인 input 입력
    const [inputId, setInputId]=useState('');
    const [inputPw, setInputPw]=useState('');

    const onChangeId=(e)=>{setInputId(e.target.value)}
    const onChangePw=(e)=>{setInputPw(e.target.value)}

    // 로그인 상태 관리
    const {setLoginUserInfo}=useContext(LoginUserInfoContext);

    const onClickLogin=()=>{
        // login api 요청
        // axios는 post 요청 시 data를 쿼리로 반환하지 않기 때문에 두 번째 인자에 null값을 주고 세 번째 인자에 필요한 매개변수를 씀
        axios.post('/api/auth/login', null, {params:{'userId':inputId, 'userPw':inputPw}})
        .then(res=>{
            let fail=res.data.Fail; // server로부터 Fail 값을 받아와 저장
            if(fail){
                // 로그인 실패 시 fail 값에 따라 알림창 출력
                switch(fail){
                    case 'wrongId' : alert('아이디를 확인하세요!'); break;
                    case 'wrongPw' : alert('패스워드를 확인하세요!'); break;
                    default : break;
                }
            }
            else{
                // 로그인 성공 시 권한 api를 거쳐 로그인 유저 상태를 업데이트함
                axios.get('/api/auth/verify',{withCredentials:true}).then((res)=>{
                    setLoginUserInfo({
                        userId:res.data.userId,
                        nickName:res.data.nickname,
                        eMail:res.data.email,
                        car:res.data.car,
                        isLogin:true
                    })
                    nav('/', {replace:true});
                }).catch();
            }
        }).catch();
    }

    return (
        <section className="LoginArea NotoSansKR">
            <div className="inner_1280">
                <div className='login_box'>
                    <h2 className='fs_xlg mb_xlg'><b>Login</b></h2>
                    <input type="text" placeholder='ID' value={inputId} onChange={onChangeId}/>
                    <input type="password" placeholder='PW' value={inputPw} onChange={onChangePw}/>
                    <button type="button" className='fs_md mb_sm' onClick={onClickLogin}>로그인</button>
                    <ul className='service'>
                        <li><b><Link to='/register'>회원가입</Link></b></li>
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default LoginArea;