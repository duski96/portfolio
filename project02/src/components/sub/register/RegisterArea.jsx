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

const initExist={
    existId:false,
    existNickname:false,
    existEmail:false
}

const RegisterArea=()=>{
    // 회원가입 폼 상태
    const [inputRegister, setInputRegister]=useState(initRegister);
    
    // 입력값의 중복 여부 확인용 상태
    const [exist, setExist]=useState(initExist);

    // 폼 입력 시 지나치게 많은 api 호출을 방지(debounce)
    const debounceInputRegister=useCallback(debounce((input)=>{
        // 회원가입 api 호출
        axios.post('/api/auth/register', {'registerValue':input})
        .then((res)=>{
            setExist({
                existId:res.data.existId,
                existNickname:res.data.existNickname,
                existEmail:res.data.existEmail
            });
        }).catch();
    }, 300),[]); // 함수 재생성 방지(useCallback)

    // 비밀번호 일치 여부 체크
    const [pwChk, setPwChk]=useState(false);

    const onChangeInput=(e)=>{
        // debounce 함수 호출 시 최신 상태가 정확히 반영이 되지 않아 newInputRegister 생성 후 상태 업데이트
        const newInputRegister={
            ...inputRegister,
            [e.target.name]:e.target.value
        }
        setInputRegister(newInputRegister);
        debounceInputRegister(newInputRegister);

        // PW 값이 입력되면 중복 체크
        if(newInputRegister.regPw){
            newInputRegister.regPw===newInputRegister.regPwChk ? setPwChk(true) : setPwChk(false);
        }
    }

    const nav=useNavigate();

    const onClickRegister=()=>{
        // 입력한 정보 중 중복 항목이 있으면 즉시 종료
        if(Object.values(exist).includes(true)){
            alert('중복된 항목을 확인하세요.');
            return;
        }
        
        // 비어있는 입력 항목이 있으면 즉시 종료
        if(Object.values(inputRegister).includes('')){
            alert('입력되지 않은 항목을 확인하세요.');
            return;
        }

        // 비밀번호 체크가 되지 않았을 경우 즉시 종료
        if(inputRegister.regPw!==inputRegister.regPwChk){
            alert('패스워드를 체크하세요.');
            return;
        }

        axios.post('/api/auth/register_submit', {'registerSubmit':inputRegister})
        .then(()=>{
            nav('/login', {replace:true});
            alert('회원가입이 완료되었습니다. 로그인이 필요합니다.');
        }).catch(()=>{
            nav('/login', {replace:true});
            alert('오류가 발생했습니다.');
        });
    }

    //초기화 버튼 클릭 시 입력값, 중복여부, 패스워드 일치 여부 모두 초기화
    const onClickInit=()=>{
        setInputRegister(initRegister);
        setExist(initExist);
        setPwChk(false);
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
                                <input id="user_id" name="regId" type="text" placeholder="사용할 ID를 입력하세요." required value={inputRegister.regId} onChange={onChangeInput} />
                                <p className={`message fs_xsm ${exist.existId}`}>중복된 아이디입니다.</p>
                            </li>
                            <li>
                                <label htmlFor="user_pw">패스워드</label>
                                :
                                <input id="user_pw" name="regPw" type="password" placeholder="사용할 PW를 입력하세요." required value={inputRegister.regPw} onChange={onChangeInput} />
                            </li>
                            <li>
                                <label htmlFor="pw_chk">PW 확인</label>
                                :
                                <input id="pw_chk" name="regPwChk" type="password" placeholder="동일한 PW를 입력하세요." required value={inputRegister.regPwChk} onChange={onChangeInput} />
                                <p className={`message pw_chk ${pwChk ? 'true' : 'false'} fs_xsm`}>확인되었습니다.</p>
                            </li>
                        </ul>
                        <h3 className='fs_md mb_md'>사용자 정보</h3>
                        <ul className='login_input mb_xlg'>
                            <li>
                                <label htmlFor="user_nickname">닉네임</label>
                                :
                                <input id="user_nickname" name="regNickname" type="text" placeholder="사용할 닉네임을 입력하세요." required value={inputRegister.regNickname} onChange={onChangeInput} />
                                <p className={`message fs_xsm ${exist.existNickname}`}>중복된 닉네임입니다.</p>
                            </li>
                            <li>
                                <label htmlFor="user_email">이메일</label>
                                :
                                <input id="user_email" name="regEmail" type="email" placeholder="example@naver.com" required value={inputRegister.regEmail} onChange={onChangeInput} />
                                <p className={`message fs_xsm ${exist.existEmail}`}>중복된 이메일입니다.</p>
                            </li>
                            <li>
                                <label htmlFor="user_car">차량정보</label>
                                :
                                <select id="user_car" name="regCar" onChange={onChangeInput}>
                                    <option value="">차량을 선택하세요.</option>
                                    <option value="미니3도어">미니3도어</option>
                                    <option value="미니5도어">미니5도어</option>
                                    <option value="컨버터블">컨버터블</option>
                                    <option value="클럽맨">클럽맨</option>
                                    <option value="컨트리맨">컨트리맨</option>
                                    <option value="미니쿠페">미니쿠페</option>
                                    <option value="페이스맨">페이스맨</option>
                                    <option value="로드스터">로드스터</option>
                                    <option value="기타">기타</option>
                                    <option value="소유차량 없음">소유차량 없음</option>
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