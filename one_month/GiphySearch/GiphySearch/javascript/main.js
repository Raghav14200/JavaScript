//alert("hi world");
let input=document.querySelector(".js-userinput");
let button=document.querySelector(".js-go");

button.addEventListener("click",()=>{
   makerequest(input);
})


var obj;

// AJAX Request
function makerequest(input){
var GiphyAJAXCall = new XMLHttpRequest();
var url = "http://api.giphy.com/v1/gifs/search?q="+input.value+"&api_key=dc6zaTOxFJmzC";
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener("load",(e)=>{
   push_to_dom(e.target.response);
})
}

input.addEventListener("keyup",(e)=>{
   if(e.key=="Enter"){
      makerequest(input);
   }
})

function push_to_dom(data){
   var resp=JSON.parse(data);
      console.log(resp.data[0].images.fixed_height.url);
      document.querySelector(".js-container").innerHTML="";
      resp.data.forEach(element => {
         document.querySelector(".js-container").innerHTML+=`<img src="${element.images.fixed_height.url}" class="container-image"/>`;
      });
   
}
