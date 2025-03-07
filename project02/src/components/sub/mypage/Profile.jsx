import './Profile.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import profileImg from '../../../assets/sub/profile_default.jpg';

const Profile=({loginUserInfo, setLoginUserInfo})=>{
    // 로그인한 유저의 정보
    const {userId, nickname, email, car}=loginUserInfo;

    // 업데이트할 정보의 state
    const [updateProfile, setUpdateProfile]=useState({
        userId:userId,
        newPw:'',
        newPwChk:'',
        newCar:car
    });

    // PW 체크용 state
    const [pwChk, setPwChk]=useState(false);

    // 업데이트 상태 반영
    const onChangeProfile=(e)=>{
        const newUpdate={
            ...updateProfile,
            [e.target.name]:e.target.value
        }
        setUpdateProfile(newUpdate);

        // PW 확인
        if(newUpdate.newPw){
            newUpdate.newPw===newUpdate.newPwChk ? setPwChk(true) : setPwChk(false);
        }
    }


    const onClickUpdate=(e)=>{
        // submit 기능 막기
        e.preventDefault();

        // 패스워드 확인이 되지 않았을 경우 즉시 종료
        if(updateProfile.newPw && !pwChk){
            alert('패스워드를 확인하세요.')
            return;
        }
        
        // 업데이트한 정보를 profile_update api로 전달
        axios.post('/api/user/profile_update', {'updateSubmit':updateProfile})
        .then(()=>{
            alert('프로필이 업데이트되었습니다.');
        }).catch(()=>{
            alert('오류가 발생했습니다.');
        });

        setLoginUserInfo({
            ...loginUserInfo,
            car:updateProfile.newCar,
        });

        // 저장 버튼 클릭 후 입력값 초기화
        setUpdateProfile({
            ...updateProfile,
            newPw:'',
            newPwChk:''
        });

        // PW 체크 여부 초기화
        setPwChk(false);
    }

    const nav=useNavigate();

    return (
        <section className='Profile'>
            <div className='inner_1000 NotoSansKR'>
                <h4 className='fs_lg mb_sm'><b>회원정보</b></h4>
                <p className='fs_sm mb_lg'>회원 정보를 확인하고 일부 정보를 수정할 수 있습니다.</p>
                <form className='info_wrap'>
                    <div className='profile_img'>
                        <img src={profileImg} alt="기본 프로필 이미지" />
                    </div>
                    <ul className='info_txt fs_sm mb_lg'>
                        <li>
                            <span>아이디 :</span> {userId}
                        </li>
                        <li>
                            <span>PW 수정 :</span> <input type="password" name="newPw" value={updateProfile.newPw} onChange={onChangeProfile} />
                        </li>
                        <li>
                            <span>PW 확인 :</span> <input type="password" name="newPwChk" value={updateProfile.newPwChk} onChange={onChangeProfile} />
                            <p className={`fs_xsm pw_chk ${pwChk}`}>확인되었습니다.</p>
                        </li>
                        <li>
                            <span>닉네임 :</span> {nickname}
                        </li>
                        <li>
                            <span>이메일 :</span> {email}
                        </li>
                        <li>
                            <span>소유 차종 : </span>
                            <select className='fs_sm NotoSansKR' name="newCar" value={updateProfile.newCar} onChange={onChangeProfile}>
                                <option value="3도어">3도어</option>
                                <option value="5도어">5도어</option>
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
                        <button type="button" onClick={()=>{nav(-1)}}>뒤로가기</button>
                        <button type="submit" className='save' onClick={onClickUpdate}>저장</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Profile;