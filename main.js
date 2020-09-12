let colors =["yellow","red","green","blue","lime","orange"]
let hexCode=["0","1","2","3","4","5","6","A","B","C","D","E","F"]




const button =document.getElementById("success");
button.addEventListener("click",function(){
    const num =rand(0,colors.length-1);
   
    document.body.style.backgroundColor=colors[num];
    document.getElementById("colorCode").innerText=colors[num];
    
})

let hexCodeValue="#"
const random =document.getElementById("random");
random.addEventListener("click",function(){
    for (let i = 0; i < 6; i++) {
        let num = rand(0,hexCode.length-1);
        hexCodeValue=hexCodeValue+hexCode[num]
        
    }
    document.body.style.backgroundColor=hexCodeValue;
    document.getElementById("colorCode").innerText=hexCodeValue;
    hexCodeValue="#";
    
})



function rand(min, max) {
    
        let randomNum = Math.random() * (max - min) + min;  
         return Math.round(randomNum);

}
