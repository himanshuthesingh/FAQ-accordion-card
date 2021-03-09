const key1 = document.querySelector(".ques1");
const key2 = document.querySelector(".ques2");
const key3 = document.querySelector(".ques3");
const key4 = document.querySelector(".ques4");
const key5 = document.querySelector(".ques5");
const ques1 = document.querySelector(".ques1>p");
const ques2 = document.querySelector(".ques2>p");
const ques3 = document.querySelector(".ques3>p");
const ques4 = document.querySelector(".ques4>p");
const ques5 = document.querySelector(".ques5>p");
const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");
const ans4 = document.querySelector(".ans4");
const ans5 = document.querySelector(".ans5");
const arrow1 = document.querySelector(".arrow1")
const arrow2 = document.querySelector(".arrow2")
const arrow3 = document.querySelector(".arrow3")
const arrow4 = document.querySelector(".arrow4")
const arrow5 = document.querySelector(".arrow5")
function rotArrow(arrow){
    arrow.style.transform = "rotateX(180deg)";
}
function rotArrowBack(arrow){
    arrow.style.transform = "rotateX(0deg)";
}
function close(){
    if(!ans1.hidden){
        rotArrowBack(arrow1);
        ques1.style.fontWeight = "normal";
        ans1.hidden = true
    }
    if(!ans2.hidden){
        rotArrowBack(arrow2);
        ques2.style.fontWeight = "normal";
        ans2.hidden = true
    }
    if(!ans3.hidden){
        rotArrowBack(arrow3);
        ques3.style.fontWeight = "normal";
        ans3.hidden = true
    }
    if(!ans4.hidden){
        rotArrowBack(arrow4);
        ques4.style.fontWeight = "normal";
        ans4.hidden = true
    }
    if(!ans5.hidden){
        rotArrowBack(arrow5);
        ques5.style.fontWeight = "normal";
        ans5.hidden = true
    }
}
function show(ans,ques,arrow){
    if(!ans.hidden){
        rotArrowBack(arrow);
        ques.style.fontWeight = "normal";
        ans.toggleAttribute("hidden")
    }
    else{
        rotArrow(arrow);
        close()
        ques.style.fontWeight = "bold";
        ans.toggleAttribute("hidden")
    }
}
key1.onclick = function() { show(ans1,ques1,arrow1); }
key2.onclick = function() { show(ans2,ques2,arrow2); }
key3.onclick = function() { show(ans3,ques3,arrow3); }
key4.onclick = function() { show(ans4,ques4,arrow4); }
key5.onclick = function() { show(ans5,ques5,arrow5); }