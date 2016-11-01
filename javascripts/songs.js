  "use strict";

var SongMaker = ((songGetter)=>{

  songGetter.songRequest = () => {
   return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'GET',
      url: 'data/songs.json'
    }).then( (response) => {
      console.log('songs response: ',response);
       resolve(response);
    }, (errorResponse) => {
      reject(errorResponse);
      });
    });
  };

  songGetter.moreSongsRequest = () => {
   return new Promise((resolve, reject)=>{
    $.ajax({
      method: 'GET',
      url: 'data/songs2.json'
    }).then( (response) => {
      console.log('moreSongs response: ',response);
       resolve(response);
    }, (errorResponse) => {
      reject(errorResponse);
      });
    });
  };

  return songGetter;
})(SongMaker || {});