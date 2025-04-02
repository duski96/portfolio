import { useEffect, useState } from "react";
import './Func.css';
import searchIcon from '../../assets/search_icon.png';
import cancelIcon from '../../assets/cancel_icon.png';
import beachInfo from '../../assets/beachInfo.json';

import List from './List';

export type BeachInfoType={
  id: number;
  beachName: string;
  nx: number;
  ny: number;
  longitude: number;
  latitude: number;
}

const Func=()=>{
    // 검색 및 리스트 출력 기능을 하는 영역
    const funcBox=document.querySelector('.Func .box') as Element;

    // 검색창 입력 상태 관리
    const [inputSearch, setInputSearch]=useState("");
    
    const onChangeInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputSearch(e.target.value);    
    }

    // 검색 버튼 동작
    const onClickButton=()=>{
        if(!inputSearch.split(' ').join('')){
            funcBox.classList.remove('active');
            alert('검색어는 최소 한 글자 이상 포함되어야 합니다.');
            return;
        }

        const newFilteredList=beachInfo.filter(item=>item.beachName.replace(' ','').includes(inputSearch));
        setFilteredList(newFilteredList);

        // 검색 결과가 없으면 검색창 초기화
        if(!newFilteredList.length){
            funcBox.classList.remove('active');
            alert('검색 결과가 없습니다.');
            return;
        }
        
        // 클릭 시 Func 영역의 box 영역 overflow 추가
        funcBox.classList.add('add_overflow_hidden');
        setTimeout(()=>{
            // funcBox에 overflow:hidden 속성이 유지되면 position:sticky 작동 불가
            funcBox.classList.remove('add_overflow_hidden');
        }, 500)
        // 클릭 시 Func 영역의 box 높이 변경 클래스 추가
        funcBox.classList.add('active');
    }
    
    // input 창에서 엔터 키 입력 시 검색 버튼 누른것과 동일
    const onKeyDownEnter=(e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            onClickButton();
        }
        else{
            return;
        }
    }

    // 검색창 내 취소 버튼
    const onClickCancel=()=>{
        setInputSearch("");
        setFilteredList([]);
        funcBox.classList.remove('active');
    }

    // 검색 목록이 길 경우 검색창을 최상단에 고정
    // 추후 효율적인 방법으로 개선 필요
    window.addEventListener('scroll', ()=>{
        const searchBar=document.querySelector('.Func .search_bar') as Element;
        const sbPos=searchBar.getBoundingClientRect().top;

        if(sbPos<=0){
            searchBar.classList.add('remove_border_radius');
        }
        else{
            searchBar.classList.remove('remove_border_radius');
        }
    });

    // 검색 후 출력되는 해수욕장 목록 상태 관리
    const [filteredList, setFilteredList]=useState<BeachInfoType[]>([]);

    // 해수욕장 검색 목록(filteredList)이 바뀔 때 마다 높이 변경
    useEffect(()=>{
        // 리스트 높이 구함
        const list=document.querySelector('.Func .beach_list');
        const newHeight=list?.clientHeight || 0;

        // css 변수 지정. 검색창 높이 + 리스트 높이
        document.documentElement.style.setProperty('--auto-height', `${50 + newHeight}px`);
    }, [filteredList]);

    return (
        <section className='Func'>
            <div className='inner_1000'>
                <div className='box'>
                    <div className='search_bar'>
                        <input value={inputSearch} onChange={onChangeInput} onKeyDown={onKeyDownEnter} placeholder='해수욕장 이름을 입력하세요.' />
                        <div className='button_area'>
                            <button onClick={onClickButton} className='search'><img src={searchIcon} alt="검색 아이콘" /></button>
                            <button onClick={onClickCancel} className='cancel'><img src={cancelIcon} alt="취소 아이콘" /></button>
                        </div>
                    </div>
                    {/* <ul className='beach_list'>
                        {filteredList.map((item)=><li key={item.id}>{item.beachName}</li>)}
                    </ul> */}
                    <List filteredList={filteredList} />
                </div>
            </div>
        </section>
    );
}

export default Func;