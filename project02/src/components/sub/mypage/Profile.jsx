import './Profile.css';

const Profile=({paramsName})=>{
    return (
        <section className='Profile'>
            <div className='inner_1280'>
                {paramsName}의 프로필 페이지 입니다.
            </div>
        </section>
    );
}

export default Profile;