// const monH1= document.querySelector('h1');
// monH1.addEventListener('mouseclick', ()=>{
// monH1.style.backgroundColor='yellow';
// });
// monH1.addEventListener('mouseout', ()=>{
// monH1.style.backgroundColor='';
// });


function giveColourdBackground(){

const monH1 = document.querySelector('h1');
let isClicked = false
monH1.addEventListener('click' ,  ()=>{
    if (!isClicked==false){
        this.style.background='yellow';
        isClicked = true;
    } else {(isClicked==true) 
        this.style.background = '';
        isClicked = false; 
    }
    
});
}
giveColourdBackground();

function showHideParagraph(){   // on declare la function 
    const linkToclick = document.querySelector('.see-more');    // on declare la variable avec le query selecteur de css 
    let isDisplay=false;   // on declare une variable 
            linkToclick.addEventListener('click', (event)=>{   // declaré addeventlistnner ( la function qu'on veut faire )
            event.preventDefault();
            if (!isDisplay){// declare if 
                document.querySelector('.show-hide-para').style.display='block';
                isDisplay=true;
            }else{// declare else 
                document.querySelector('.show-hide-para').style.display='none';
                isDisplay=false;
            }
        
    })
}
showHideParagraph();


// function showHideParagraph2(){
//     let isDisplay2 = false
//     const linkToclick2 = document.querySelector('.see-more2');
//     linkToclick2.addEventListener('click', function(event){
//         event.preventDefault;
//         if(isDisplay2== false){
//             document.querySelector('.show-hide-para2').
//             classList.add('open');
//             isDisplay2 = true
//         }else {
//             document.querySelector('.show-hide-para2').
//             classList.remove('open');
//             isDisplay2 = false;
//         }
//     })
// }
// showHideParagraph2();

// c'est la meme chose de ca =>


function showHideParagraph2(){
    let isDisplay2 = false
    const linkToclick2 = document.querySelector('.see-more2');
    linkToclick2.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('.show-hide-para2').
            classList.toggle('open');
            });
};
showHideParagraph2();
