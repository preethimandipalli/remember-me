
 var arrOfImagePaths = [
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/bhutan.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/book.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/bottle.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/cat.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/elephant.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/fan.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/fish.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/flower.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/leaopard.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/pen.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/mushroom.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/mushroom-2.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/gun.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/burger.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/dog.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/cherry.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/underwater.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/underwater-1.jpg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/tree.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/tree-2.jpeg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/space.jpg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/space-1.jpg",
    "/Users/vinodkumarreddy/Desktop/remember-me/assets/blackpanther.jpeg"

];

var arr = new Array;
var images=[];
var extraImages=[];
function getRandomImages(){
    
    while(arr.length < 15){
        var r = Math.floor(Math.random() * arrOfImagePaths.length) + 1;
        if(arr.indexOf(r) === -1){
            arr.push(r);
        }

    }
    for(var i=0;i<arr.length;i++){
        images.push(arrOfImagePaths[arr[i]-1]);
    }

    return [arr,images];
}







/*function AddExraImages(){
    var temp= [];
    console.log(arr.length);
    for(var i=0;i<arr.length;i++){
        temp.push(arr[i]);
    }
    while(temp.length<16){
        var r=Math.floor(Math.random()*arrOfImagePaths.length)+1;
        if (temp.indexOf(r)===-1){
            temp.push(r);
        }
   }
   for(var i=0;i<temp.length;i++){
      console.log(temp[i]);
      extraImages.push(arrOfImagePaths[temp[i]-1]);
}
    return extraImages;
}*/
/*
function redirectpage(){

    window.location="file:///Users/vinodkumarreddy/Desktop/remember-me/screen2.html";
}
var sec=10;
function Timer(){
    sec-=1;
    document.getElementById("counter").innerHTML= sec;
}
setInterval(Timer,1000);

/*setTimeout('redirectpage()',10*1000);

function goBack() {
    window.history.back();
  }*/