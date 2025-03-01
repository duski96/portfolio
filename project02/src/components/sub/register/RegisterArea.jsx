import './RegisterArea.css';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { debounce } from 'lodash';

const initRegister={
    regId:'',
    regPw:'',
    regPwChk:'',
    regNickname:'',
    regEmail:'',
    regCar:''
}

const RegisterArea=()=>{
    // 회원가입 폼 상태
    const [inputRegister, setInputRegister]=useState(initRegister);
    
    // 입력값의 중복 여부 확인용 상태
    const [exist, setExist]=useState({
        existId:false,
        existNickname:false,
        existEmail:false
    });

    // 폼 입력 시 지나치게 많은 api 호출을 방지(debounce)
    const debounceInputRegister=useCallback(debounce((input)=>{
        // 회원가입 api 호출
        axios.post('/api/auth/register', null, {params:{'registerValue':input}})
        .then((res)=>{
            setExist({
                ...exist, 
                existId:res.data.existId, 
                existNickname:res.data.existNickname, 
                existEmail:res.data.existEmail
            });
        }).catch();
    }, 300),[]); // 함수 재생성 방지(useCallback)

    const onChangeInput=(e)=>{
        // debounce 함수 호출 시 최신 상태가 정확히 반영이 되지 않아 newInputRegister 생성
        const newInputRegister={
            ...inputRegister,
            [e.target.name]:e.target.value
        }
        setInputRegister(newInputRegister);
        debounceInputRegister(newInputRegister);
    }

    const nav=useNavigate();
    const onClickRegister=()=>{
        nav('/login', {replace:true});
    }

    const onClickInit=()=>{
        setInputRegister(initRegister);
    }

    return (
        <section className="RegisterArea">
            <div className="inner_1000">
                <div className='register_box'>
                    <h2 className="fs_lg mb_sm">회원 가입</h2>
                    <p className='fs_md mb_lg welcome'>
                        &quot;미니와 함께하는 즐거운 여정에 오신 걸 환영합니다! <br />
                        지금 바로 가입하고 미니 오너들과 특별한 순간을 나눠보세요!&quot;
                    </p>
                    <div className='box_inner NotoSansKR'>
                        <h3 className='fs_md mb_md'>로그인 정보</h3>
                        <ul className='login_input mb_lg'>
                            <li>
                                <label htmlFor="user_id">아이디</label>
                                :
                                <input id="user_id" name="regId" type="text" placeholder="사용할 ID를 입력하세요." required value={inputRegister.userId} onChange={onChangeInput} />
                                <p className={`dup fs_xsm ${exist.existId}`}>중복된 아이디입니다.</p>
                            </li>
                            <li>
                                <label htmlFor="user_pw">패스워드</label>
                                :
                                <input id="user_pw" name="regPw" type="password" placeholder="사용할 PW를 입력하세요." required value={inputRegister.userPw} onChange={onChangeInput} />
                            </li>
                            <li>
                                <label htmlFor="pw_chk">PW 확인</label>
                                :
                                <input id="pw_chk" name="regPwChk" type="password" placeholder="PW를 다시 입력하세요." required value={inputRegister.userPwChk} onChange={onChangeInput} />
                            </li>
                        </ul>
                        <h3 className='fs_md mb_md'>사용자 정보</h3>
                        <ul className='login_input mb_xlg'>
                            <li>
                                <label htmlFor="user_nickname">닉네임</label>
                                :
                                <input id="user_nickname" name="regNickname" type="text" placeholder="사용할 닉네임을 입력하세요." required value={inputRegister.userNickname} onChange={onChangeInput} />
                                <p className={`dup fs_xsm ${exist.existNickname}`}>중복된 닉네임입니다.</p>
                            </li>
                            <li>
                                <label htmlFor="user_email">이메일</label>
                                :
                                <input id="user_email" name="regEmail" type="email" placeholder="example@naver.com" required value={inputRegister.userEmail} onChange={onChangeInput} />
                                <p className={`dup fs_xsm ${exist.existEmail}`}>중복된 이메일입니다.</p>
                            </li>
                            <li>
                                <label htmlFor="user_car">차량정보</label>
                                :
                                <select id="user_car" name="regCar" onChange={onChangeInput}>
                                    <option>소유 차량 선택</option>
                                    <option value="미니3도어">미니3도어</option>
                                    <option value="미니5도어">미니5도어</option>
                                    <option value="컨버터블">컨버터블</option>
                                    <option value="클럽맨">클럽맨</option>
                                    <option value="컨트리맨">컨트리맨</option>
                                    <option value="미니쿠페">미니쿠페</option>
                                    <option value="페이스맨">페이스맨</option>
                                    <option value="로드스터">로드스터</option>
                                    <option value="기타">기타</option>
                                </select>
                            </li>
                        </ul>
                        <div className='button_area'>
                            <button type="button" onClick={onClickInit}>초기화</button>
                            <button type="button" className='register' onClick={onClickRegister}>가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterArea;