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
        // 전송할 데이터가 쿼리스트링이 아니기 때문에 두 번째 인자에 null값을 주지 않음
        axios.post('/api/auth/login', {'userId':inputId, 'userPw':inputPw})
        .then(()=>{
            // 로그인 성공 시 권한 api를 거쳐 로그인 유저 상태를 업데이트함
            axios.get('/api/auth/verify',{withCredentials:true}).then((res)=>{
                setLoginUserInfo({
                    userId:res.data.userId,
                    nickname:res.data.nickname,
                    email:res.data.email,
                    car:res.data.car,
                    isLogin:true
                })
                nav('/', {replace:true});
            }).catch();
        }).catch((res)=>{
            // 로그인 실패 시 fail 값에 따라 알림창 출력
            switch(res.response.data.message){
                case 'wrongId' : alert('아이디를 확인하세요!'); break;
                case 'wrongPw' : alert('패스워드를 확인하세요!'); break;
                default : break;
            }
        });
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