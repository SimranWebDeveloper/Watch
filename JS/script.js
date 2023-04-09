//  header

const btn=document.querySelector('#btn');
const logcreate=document.querySelector('#login')

let viewlogin=()=>{
    if (logcreate.style.display=='block') {
        logcreate.style.display='none' ;
    }
     else{
        logcreate.style.display='block';
     }
    
}




btn.onclick=viewlogin;


                    //   quartz

// yazilacaq yer
const watch1=document.querySelector('.quartz-watch1');
const watch2=document.querySelector('.quartz-watch2');
const watch3=document.querySelector('.quartz-watch3');


// sekil
const image1=document.querySelector('#img-box1');
const image2=document.querySelector('#img-box2');
const image3=document.querySelector('#img-box3');




const write_watch_name=(images)=>{

    console.log(images);
    if (images=='quartz-watch1') {

        watch1.innerHTML='Chronograph Watch';
    }
    else if(images=='quartz-watch2'){
        watch2.innerHTML='Best Quartz Dial Watch';
    }
    else if(images=='quartz-watch3'){
        watch3.innerHTML='Swiss Analog Watch';

    }
}



    //              CLASSIC

// icon
const icon=document.querySelectorAll('#icon');
// ad
const proper=document.querySelectorAll('#properties')


// console.log(proper);


const starblock=(star)=>{
    console.log(star);


        if (star=='star1') {
            proper[0].style.display='block';
            icon[0].style.display='block';
        }
        else  if (star=='star2') {
            proper[1].style.display='block';
            icon[1].style.display='block';
        }
        else  if (star=='star3') {
            proper[2].style.display='block';
            icon[2].style.display='block';
        }
        
    
 
}

