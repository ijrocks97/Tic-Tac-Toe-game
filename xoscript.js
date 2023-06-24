let gamebtn=document.querySelectorAll(".button-box");
let popup=document.querySelector(".popup");
let newgamebtn=document.getElementById("new-game");
let restartbtn=document.getElementById("restart");
let displaymsg=document.getElementById("msg");
let startbtn=document.getElementById("start-btn");

let winptrn=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
];

const disablebuttons=() =>
{
    gamebtn.forEach((element) => (element.disabled));
    popup.classList.remove("hide");
        
}
const winfunction =(letter) =>
{
    disablebuttons();
    displaymsg.innerText= letter + " WON THE GAME";
    
}

const drawfunction = ()=>
{
    disablebuttons();
    displaymsg.innerText= "Match Draw";
}

const enablebtns= () =>{
    gamebtn.forEach((element) => {
        element.innerText="";
        element.disabled=false;
    });

    popup.classList.add("hide");
};


newgamebtn.addEventListener('click', () =>
{
    count=0;
    enablebtns();
});
restartbtn.addEventListener('click', () =>{
    count=0;
    enablebtns();
});

const wincheck=() =>{
    for(let i of winptrn)
    {
        let [ele1 , ele2 , ele3]= 
        [gamebtn[i[0]].innerText , 
        gamebtn[i[1]].innerText, 
        gamebtn[i[2]].innerText];

        if(ele1!="" && ele2!="" && ele3!="")
        {
            if(ele1==ele2 && ele2==ele3)
            {
                winfunction(ele1);
            }
        }
    }
};

let xchance=true;
let count=0;
gamebtn.forEach(element => {
    element.addEventListener("click",() =>
    {
        if(xchance)
        {
            xchance=false;
            element.innerText="X";
            element.style.color="#ff0844";
            element.disabled=true;
        }
        else
        {
            xchance=true;
            element.innerText="O";
            element.style.color="#ffb199";
            element.disabled=true;
        }
        count+=1;
        if(count === 9)
        {
            drawfunction();
        }

        wincheck();
    })
    
});

window.onload=enablebtns();
