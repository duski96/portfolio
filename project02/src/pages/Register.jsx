import Header from '../components/Header';
import RegisterArea from '../components/sub/register/RegisterArea';
import Footer from '../components/Footer';

const Register=()=>{
    return (
        <>
            <Header isActive={true} />
            <RegisterArea />
            <Footer noQuick={true} />
        </>
    );
}

export default Register;