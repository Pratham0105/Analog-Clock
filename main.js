const hour=document.getElementById('hr');
const minute=document.getElementById('min');
const secound=document.getElementById('sec');

setInterval(()=>
{
    let date=new Date();
    hr=date.getHours()*30;
    min=date.getMinutes()*6;
    sec=date.getSeconds()*6;

    hour.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
    minute.style.transform=`rotateZ(${(min)}deg)`;
    secound.style.transform=`rotateZ(${(sec)}deg)`;
})