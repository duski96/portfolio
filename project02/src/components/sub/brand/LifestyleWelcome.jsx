import { useContext } from 'react';
import { LoginUserInfoContext } from '../../../App';
import profileImg from '../../../assets/sub/profile_default.jpg';

const LifestyleWelcome=()=>{
    const {loginUserInfo}=useContext(LoginUserInfoContext);

    return(
        <div className='welcome mb_lg'>
            <div className='profile_img'>
                <img src={profileImg} alt="프로필 이미지" />
            </div>
            <p>
                <b>{loginUserInfo.nickname ? loginUserInfo.nickname : '익명의 방문자'}</b>님, 환영합니다! <br />
                미니와 함께하는 특별한 순간을 즐겨보세요! 🚗✨
            </p>
        </div>
    );
}

export default LifestyleWelcome;