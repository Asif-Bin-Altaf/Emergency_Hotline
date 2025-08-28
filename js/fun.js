const history=[];

document.getElementById('btn1').addEventListener('click',function(){
    const send_what=document.getElementById('what1').innerText;
    const send_how=document.getElementById('how1').innerText;
    const object_1={
        what: send_what,
        how: send_how
    }
    history.pushState(object_1);
    console.log(object_1);
})