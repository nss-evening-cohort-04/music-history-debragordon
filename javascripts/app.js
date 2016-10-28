"use strict";

$(document).ready(()=> {

  let songLister;
  let $listSongsLink = $("#list-music-link");
  let $addSongsLink = $("#add-music-link");
  let $sidebar = $("#sidebar");
  let $songListShow = $("#list-songs");
  let $songAdder = $("#song-adder");

//gets songs from .json
  songRequest().then((dataFromSongs)=>{
    console.log('dataFromSongs: ',dataFromSongs);
    songs = dataFromSongs;
    displayMusicList(songs);

    $('#show-more-songs').on("click", function() {
      moreSongsRequest().then((dataFromMoreSongs)=>{
        console.log('dataFromMoreSongs: ',dataFromMoreSongs);
        $songListShow.html("");
        songLister = "";
        dataFromMoreSongs.songArchive.forEach((song) =>{
         songs.songArchive.push(song);
        });
        displayMusicList(songs);
        }).catch((error) => {
          console.log(error);
        });
      });
    }).catch((error) => {
     console.log(error);
    });

//Shows the add music view
  let addMusic =() => {
    $songListShow.addClass("hidden");
    $songAdder.removeClass("hidden");
    $sidebar.addClass("hidden");
  };

//Shows the list music view
  let listMusic =() => {
    $songListShow.removeClass("hidden");
    $songAdder.addClass("hidden");
    $sidebar.removeClass("hidden");
  };

//writes .json content taken from the AJAX request to the dom
  function displayMusicList(songs){
    songLister = "<h3>Songs</h3><ul>";
    for (var i =0; i < songs.songArchive.length; i++){
      songLister += "<li id='song-"+i+"'>"+"<h6>TITLE: </h6>" + songs.songArchive[i].title + " <h6> ARTIST: </h6>" +
      songs.songArchive[i].artist + "<h6> ALBUM: </h6>" + songs.songArchive[i].album + " <button type='button' class='btn btn-default btn-xs' id='button-"+
      i + "'>DELETE</button></li></br></br>";
    }
    songLister += "</ul><br/><br/>";
    songLister += "<button type='button' id='show-more-songs' class='btn btn-default btn-xs'>More ></button><br/><br/>";
    $songListShow.html(songLister);
  };

//nav click events
  $listSongsLink.on('click', listMusic);
  $addSongsLink.on('click', addMusic);

//song adding functionality
  $songAdder.html(`<div id="addMusicForm" class="col-sm-12">
    <h3>Add Song</h3><br/>
      <div>
        <label class="lbl">Title:  <input type="text" id="songName"/></label><br/>
        <label class="lbl">Artist:  <input type="text" id="artistName"/></label><br/>
        <label class="lbl">Album:  <input type="text" id="albumName"/></label><br/><br/>
        <button type="button" id="addBtn" class='btn btn-default btn-xs'>Add</button><br/>
      </div>
    </div>`);
  $('#addsongs').css("display","none");

  $('#addBtn').on("click",function(){
    var title = $('#songName').val();
    var artist = $('#artistName').val();
    var album = $('#albumName').val();
    var newSongObject= {"artist":artist,"title":title,"album":album};
    songs.songArchive.push(newSongObject);
    // alert("YOUR SONG HAS BEEN ADDED");
    displayMusicList(songs);
    $('#songName').val("");
    $('#artistName').val("");
    $('#albumName').val("");
    listMusic();
  });

  $songListShow.on('click',function(e){
    var target = e.target;
    if(document.getElementById(target.id).innerText === "Delete"){
      target.parentNode.parentNode.removeChild(target.parentNode);
    }
  });
});