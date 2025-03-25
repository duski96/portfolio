import Header from '../components/Header';
import LoginArea from '../components/sub/login/LoginArea';
import Footer from '../components/Footer';

const Login=()=>{
    return (
        <>
            <Header isActive={true} />
            <LoginArea />
            <Footer noQuick={true} />
        </>
    );
}

export default Login;