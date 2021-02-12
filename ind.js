var urlsToValidate=["","","","","","","","",""];
var actualImageUrls = (sessionStorage['originalImageUrls']).split(",");

function allowDrop(ev){
  ev.preventDefault();
}

function dragStart(ev){
    ev.dataTransfer.setData("text",ev.target.id);

}

function drop(ev,i){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("text");
    ev.target.append(document.getElementById(data));
    var imageElemenet = document.getElementById(data);
    console.log(imageElemenet.src);
    urlsToValidate[i-1]=imageElemenet.src;
    sessionStorage.setItem( 'imageUrls', urlsToValidate);

}
function navigate(){
    window.location="/Users/vinodkumarreddy/Desktop/remember-me/scoredisplay.html";

}

function calculateScore(){
    var s="file://";
    var totalScore=0;
    var imageUrl = (sessionStorage['imageUrls']).split(",");
    for(var i=0;i<imageUrl.length;i++){
        var actualimg=s.concat(actualImageUrls[i]);
        var compareimg=imageUrl[i];
        console.log(actualimg);
        console.log(compareimg);
        if(actualimg.localeCompare(compareimg)==0){
            console.log("true");
            totalScore+=1;
        }

    }
    return totalScore;

}

/*
function calculateScore(){

    sessionStorage.setItem('imagepostions',ar);
    var actualindexs=sessionStorage['indexofimages'];
    var x= (sessionStorage['imagepostions']).split(",");
    var y=actualindexs.split(",");
    for(var i=0;i<ar.length;i++){
            console.log(ar[i]);
            console.log(y[i]);
      

        }
}*/





