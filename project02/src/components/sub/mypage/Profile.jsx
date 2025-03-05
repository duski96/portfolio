import './Profile.css';

import profileImg from '../../../assets/sub/profile_default.jpg';

const Profile=({loginUserInfo})=>{
    const {userId, nickname, email, car}=loginUserInfo;

    const onClickUpdate=()=>{
        console.log('update');
    }

    return (
        <section className='Profile'>
            <div className='inner_1000 NotoSansKR'>
                <h4 className='fs_lg mb_sm'><b>회원정보</b></h4>
                <p className='fs_sm mb_lg'>회원 정보를 확인하고 패스워드를 수정할 수 있습니다.</p>
                <div className='info_wrap'>
                    <div className='profile_img'>
                        <img src={profileImg} alt="프로필 이미지" />
                    </div>
                    <ul className='info_txt fs_sm'>
                        <li>
                            <span>아이디 :</span> {userId}
                        </li>
                        <li>
                            <span>PW 수정 :</span> <input type="password" />
                        </li>
                        <li>
                            <span>PW 확인 :</span> <input type="password" />
                        </li>
                        <li>
                            <span>닉네임 :</span> {nickname}
                        </li>
                        <li>
                            <span>이메일 :</span> {email}
                        </li>
                        <li>
                            <span>소유 차종 : </span>
                            <select className='fs_sm NotoSansKR'>
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
                </div>
                <button type="button" className='fs_sm' onClick={onClickUpdate}>변경사항 저장</button>
            </div>
        </section>
    );
}

export default Profile;