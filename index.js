var i=0;
while(i<document.querySelectorAll(".drum").length){
document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
i++;


}
function clicked (){
    var option=this.innerHTML;

    press(option);
   
}



document.addEventListener("keydown",k1);
function k1(e){
    press(e.key);
    }
   
    
function press(key){
        
    
        switch (key) {
            case "w":var tom1= new Audio("sounds/tom-1.mp3");
                     tom1.play();
                    break;
            case "a":var tom2= new Audio("sounds/tom-2.mp3");
                     tom2.play();
                    break;
            case "s":var tom3= new Audio("sounds/tom-3.mp3");
                     tom3.play();
                    break;
            case "d":var tom4= new Audio("sounds/tom-4.mp3");
                     tom4.play();
                    break;
            case "j":var snare= new Audio("sounds/snare.mp3");
                     snare.play();
                    break; 
            case "k":var crash= new Audio("sounds/crash.mp3");
                     crash.play();
                    break;  
            case "l":var bass= new Audio("sounds/kick-bass.mp3");
                     bass.play();
                    break;         
        
            default:
                break;
        }
       
 
    };
// for (var i = 0; i < document.querySelectorAll('.drum').length; i++){
//     document.querySelectorAll('.drum')[i].addEventListener("click", handleClick);
// }
 
// function handleClick(){
//     /*var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();*/
//     var buttonInnerHTML = this.innerHTML;
//     switchCheck(buttonInnerHTML);
// }
 
 
 
// document.addEventListener("keydown", keyPress);
 
// function keyPress(e){
//     switchCheck(e.key);
// }
 
 
// function switchCheck(comparison){
//     switch (comparison) {
//         case "w":
//             var tom1 = new Audio('sounds/tom-1.mp3');
//             tom1.play();
//         break;
        
//         case "a":
//             var tom2 = new Audio('sounds/tom-2.mp3');
//             tom2.play();
//         break;
 
//         case "s":
//             var tom3 = new Audio('sounds/tom-3.mp3');
//             tom3.play();
//         break;
 
//         case "d":
//             var tom4 = new Audio('sounds/tom-4.mp3');
//             tom4.play();
//         break;
 
//         case "j":
//             var snare = new Audio('sounds/snare.mp3');
//             snare.play();
//         break;
 
//         case "k":
//             var crash = new Audio('sounds/crash.mp3');
//             crash.play();
//         break;
 
//         case "l":
//             var kick = new Audio('sounds/kick-bass.mp3');
//             kick.play();
//         break;
 
                
//         default:
//             break;
//     }
// };

