
var SoundCloudAPI={};

SoundCloudAPI.init=function(){
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
}
// find all sounds of buskers licensed under 'creative commons share alike'
SoundCloudAPI.getTrack=function(inputValue){
SC.get('/tracks', {
  q: inputValue
}).then(function(tracks) {
  console.log(tracks);
});
}

SoundCloudAPI.init();
SoundCloudAPI.getTrack("Rayle");

SoundCloudAPI.renderTracks= function(){
  var new_div=document.createElement('div');
  new_div.classList.add("card");
  document.querySelector(".js-search-results").appendChild(new_div);
}

SoundCloudAPI.renderTracks();