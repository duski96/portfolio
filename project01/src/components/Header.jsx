import './Header.css';
import { memo } from 'react';

const Header=()=>{
    return (
        <header className='mb_xlg'>
            <div className='inner_1280'>
                <h1 className='Header title fs_xlg'>Todo List 🧾</h1>
                <p className='fs_lg'>또렷한 기억보다 희미한 연필자국이 낫다.</p>
            </div>
        </header>
    );
}

export default memo(Header);