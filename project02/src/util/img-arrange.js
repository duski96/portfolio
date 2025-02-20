/*
container의 높이가 정확히 지정되면 내부 요소들의 사이즈가 비율에 맞춰 정렬되는 CSS flex의 특성을 활용함
*/

export function imgArrange(){
    let containers=document.querySelectorAll('.img_arrange');
    
    for(const item of containers){
        func(item);
    }
}

function func(container){
    let containerWidth=container.clientWidth;
    let images=container.children;
    let shortest=Infinity;

    // 이미지 요소들이 렌더링된 이후에 실행
    setTimeout(()=>{
        /* 가장 높이가 낮은 이미지에 나머지 이미지들 높이를 맞춤 */
        for(const item of images){
            if(shortest > item.clientHeight)
                shortest=item.clientHeight;
        }

        container.style.height=`${shortest}px`;

        /* 
        여백을 포함해 컨테이너 밖으로 튀어나간 이미지들의 전체 너비를 컨테이너 길이에 맞게 줄임.
        줄어든 비율만큼 컨테이너의 높이도 줄임.
        */
        let left=images[0].getBoundingClientRect().left;
        let right=images[images.length-1].getBoundingClientRect().right;
        let reduceRatio=containerWidth/(right-left);

        container.style.height=`${shortest*reduceRatio}px`;
    }, '100');
}