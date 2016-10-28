"use strict";

let songs, moreSongs;

let songRequest = () => {
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

let moreSongsRequest = () => {
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