let shap=document.querySelector(".shap")

let out=document.querySelector(".out")

let allCorner=document.querySelector(".all-corners")

let top_right=document.querySelector(".top-right")

let Bottom_rghit=document.querySelector(".Bottom-rghit")

let Bottom_left=document.querySelector(".Bottom-left")

let top_left=document.querySelector(".top_left")



// ********************************
function allCornerRedius(){
    shap.style.borderRadius =allCorner.value + '%';
    out.innerHTML =`border-radius: ${allCorner.value}% ${allCorner.value}% ${allCorner.value}% ${allCorner.value}%`
}

function toprightborder(){
    shap.style.borderTopRightRadius =top_right.value + '%';
    out.innerHTML =`border-radius: ${top_right.value}% ${allCorner.value}% ${allCorner.value}% ${allCorner.value}%`
}

function Bottomrghitborder(){
    shap.style.borderBottomRightRadius =Bottom_right.value + '%';
    out.innerHTML =`border-radius: ${allCorner.value}% ${Bottom_right.value}% ${allCorner.value}% ${allCorner.value}%`
}

function Bottomleftborder(){
    shap.style.borderBottomLeftRadius =Bottom_left.value + '%';
    out.innerHTML =`border-radius: ${allCorner.value}% ${allCorner.value}% ${Bottom_left.value}% ${allCorner.value}%`
}

function topleftborder(){
    shap.style.borderTopLeftRadius =top_left.value + '%';
    out.innerHTML =`border-radius: ${allCorner.value}% ${allCorner.value}% ${allCorner.value}% ${top_left.value}%`
}