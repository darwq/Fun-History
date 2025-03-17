let title = document.querySelector(".full-title");
let texts = ["INVATA ISTORIA EFICIENT!","PREGATESTE-TE PENTRU BAC!","OBTINE DOAR NOTE DE 10!",];
let index = 0;
let pause = 1;
let brake = 10;
let iterr = Math.floor(Math.random() * texts.length);;
let timeout = 100;

setInterval(() => {
    if (brake > 0){
        brake--;
        return;
    }
    title.classList.remove("stop");
    if (pause == 0){
        title.textContent = title.textContent.slice(0,-1);
        if(title.textContent.length == 0){
            pause = 1;
            index = 0;
            brake = 20;
            title.classList.add("stop");
            
            if(iterr < texts.length-1){
                iterr+=1;
            }
            else{
                iterr = 0;
            }
        }
        return;
    }

    title.textContent = title.textContent + texts[iterr][index];
    index++;
    if (index == texts[iterr].length){
        pause = 0;
        brake = 20;
        title.classList.add("stop");
    }
},timeout)