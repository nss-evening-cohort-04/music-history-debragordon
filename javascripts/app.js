//handles the DOM

var $homeLink = $("#go-home");
var $addLink = $("#add-music");
var $listLink = $("#show-list");
var $addButton = $("#add-my-music");
var $artistName = $("#artist-name");
var $songName = $("#song-name");
var $albumName = $("#album-name");
var $homeDiv = $("#home-view");
var $addDiv = $("#add-music-view");
var $listDiv = $("#list-music-view");
var $songList = $("#song-list");
var $addDiv = $("#add-music-view");
var newSong;

//Nav Click Events
$homeLink.click(()=> {
  $addDiv.addClass("hidden");
  $homeDiv.removeClass("hidden");
  $listDiv.addClass("hidden");
});

$addLink.click(function () {
  $addDiv.removeClass("hidden");
  $homeDiv.addClass("hidden");
  $listDiv.addClass("hidden");
});

$listLink.click(function () {
  $addDiv.addClass("hidden");
  $homeDiv.addClass("hidden");
  $listDiv.removeClass("hidden");
  newSongWriter();
});

//Various Click Events
$addButton.click(()=> {
  if ($artistName !== "" && $albumName !== "" && $songName !== "") {
    newSong();
  } else {
    alert("please enter all the necessary info");
  }
});

function newSong() {
  $songName = $songName.val();
  $artistName = $artistName.val();
  $albumName = $albumName.val();
  newSong = `${$songName} by ${$artistName} on the album ${$albumName}`;
  songs.push(newSong);
  $addDiv.addClass("hidden");
  $homeDiv.addClass("hidden");
  $listDiv.removeClass("hidden");
  newSongWriter();
};

function newSongWriter() {
  //add three statements to clear the values of the inputs fields after they have been declared/used in the newSong function


  console.log($songList);
  for (var i = 0; i < songs.length; i++) {
  console.log("songs", songs);
    $songList.append(`<li>${songs[i]}</li>`);
  }

}
