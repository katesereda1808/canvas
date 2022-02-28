const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
const pi=Math.PI;
ctx.strokeStyle="black";
ctx.fillStyle="white";

const draw=(x1,y1,x2,y2)=>{
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x1,y1, 5, 0, pi*2, false);
    ctx.stroke();
    ctx.fill();
}
const drawGraphic=(arr)=>{
    for (let i=0; i<arr.length; i++){
        draw(arr[i].x1,arr[i].y1,arr[i].x2,arr[i].y2)
    }
}

let arr1=[
    {x1:82,y1:266,x2:122,y2:236},
    {x1:122,y1:236,x2:162,y2:266},
    {x1:162,y1:266,x2:202,y2:296},
    {x1:202,y1:296,x2:242,y2:267},
    {x1:242,y1:267,x2:282,y2:257},
    {x1:282,y1:257,x2:322,y2:291},
    {x1:322,y1:291,x2:362,y2:188},
    {x1:362,y1:188,x2:402,y2:236},
    {x1:402,y1:236,x2:442,y2:206},
    {x1:442,y1:206,x2:482,y2:306},
    {x1:482,y1:306,x2:522,y2:226},
    {x1:522,y1:226,x2:562,y2:196},
    {x1:562,y1:196,x2:602,y2:276},
    {x1:602,y1:276,x2:642,y2:246},
    {x1:642,y1:246,x2:682,y2:266},
    {x1:682,y1:266},
]
let arr2=[
    {x1:82,y1:266,x2:157,y2:216},
    {x1:157,y1:216,x2:232,y2:236},
    {x1:232,y1:236,x2:307,y2:227},
    {x1:307,y1:227,x2:382,y2:268},
    {x1:382,y1:268,x2:457,y2:246},
    {x1:457,y1:246,x2:532,y2:266},
    {x1:532,y1:266,x2:607,y2:209},
    {x1:607,y1:209,x2:682,y2:237},
    {x1:682,y1:237,x2:682,y2:235},
]
let flag=false;
const showGraphic=()=>{
    if(flag==false){
        ctx.clearRect(0,0, canvas.clientWidth, canvas.height)
        flag=true;
        drawGraphic(arr1)
    }else{
        ctx.clearRect(0,0, canvas.clientWidth, canvas.height)
        flag=false;
        drawGraphic(arr2)
    }
}
canvas.addEventListener('click', showGraphic);
window.addEventListener('load', showGraphic);