import { useEffect } from "react";

const ScrollIcon=()=>{
    // 낮, 밤에 따라 css를 다르게 적용
    const time=new Date().getHours();
    const isNight=time<6 || time>=18;

    useEffect(()=>{
        const title=document.querySelector('.CurrentWeather h2') as Element;
        const icon=document.querySelector('.ScrollIcon') as Element;
        
        const observer=new IntersectionObserver((eintries)=>{
            eintries.forEach((item)=>{
                if(item.isIntersecting){
                    icon.classList.remove('hidden');
                }
                else{
                    icon.classList.add('hidden');
                }
            });
        });

        observer.observe(title);
    }, []);
    
    return (
        <div className={`ScrollIcon isNight_${isNight}`}>
            <p className='fs_sm txt'><b>Scroll</b></p>
            <p className="fs_sm arrow"><b>↓</b></p>
        </div>
    );
}

export default ScrollIcon;