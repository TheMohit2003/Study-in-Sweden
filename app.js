let words =["swedish","open","fair","green","equal","queer","smart","chill"];
let a=0;
let b=0;

function changeWord(){
    
    document.getElementById("add").innerHTML=words[a];
    a++;
    if(a==8){ 
        a=0;
    }
}


setInterval(() => {
    changeWord(),changeTitle()
}, 1500);
