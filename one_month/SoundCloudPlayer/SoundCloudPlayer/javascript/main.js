
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
  SoundCloudAPI.renderTrack(tracks);
});
}

SoundCloudAPI.init();
SoundCloudAPI.getTrack("Rayle");

SoundCloudAPI.renderTrack = function( tracks) {

      tracks.forEach(track=> {
        console.log(track);
        var card = document.createElement('div');
			card.classList.add('card');

			// image
			var imageDiv = document.createElement('div');
			imageDiv.classList.add('image');

			var image_img = document.createElement('img');
			image_img.classList.add('image_img');
			image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';

			imageDiv.appendChild( image_img );

			// content
			var content = document.createElement('div');
			content.classList.add('content');

			var header = document.createElement('div');
			header.classList.add('header');
			header.innerHTML = '<a href="'+track.permalink_url+'" target="_blank">'+track.title+'</a>';

			// button
			var button = document.createElement('div');
			button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

			var icon = document.createElement('i');
			icon.classList.add('add', 'icon');

			var buttonText = document.createElement('span');
			buttonText.innerHTML = 'Add to playlist';

      content.appendChild(header);
			button.appendChild( icon );
			button.appendChild( buttonText );

			button.addEventListener('click',()=>{
					SoundCloudAPI.embed(track.permalink_url);
			})
			// card
			card.appendChild( imageDiv );
			card.appendChild( content );
			card.appendChild( button );

      var searchResult=document.querySelector('.js-search-results');
			searchResult.appendChild( card );
      });
			
}

SoundCloudAPI.embed=function(trackurl){
	SC.oEmbed(trackurl, {
  auto_play: true
}).then(function(embed){
  console.log('oEmbed response: ', embed);

  var sidebar=document.querySelector('.js-playlist');

  var box=document.createElement('div');
  box.innerHTML=embed.html;

  sidebar.insertBefore(box,sidebar.firstChild);
});
}
