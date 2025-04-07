import { useNavigate } from "react-router-dom";
import { BeachInfoType } from "./SearchFunc";

type Props={
    filteredList: BeachInfoType[];
    onClickCancel: ()=>void;
}

const List=({filteredList, onClickCancel}: Props)=>{
    const nav=useNavigate();

    // 검색 리스트 클릭
    const onClickList=(idNum: number)=>{
        nav(`/info/${idNum}`);
        onClickCancel();
    }

    return (
        <ul className='beach_list'>
            {filteredList.map((item)=>(
                <li key={item.id} onClick={()=>{onClickList(Number(item.id))}}>{item.beachName}</li>
            ))}
        </ul>
    );
}

export default List;