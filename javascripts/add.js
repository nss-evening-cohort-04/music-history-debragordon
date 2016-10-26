// //creates the song list

// var $addDiv = $("#add-music-view");
// var $addButton = $("#add-my-music");
// var $artistName = $("#artist-name");
// var $songName = $("#song-name");
// var $albumName = $("#album-name");
// var newSong;
// var $songList = $("#song-list");

// function newSong() {
//   $songName = $songName.val();
//   $artistName = $artistName.val();
//   $albumName = $albumName.val();
//   newSong = `${$songName} by ${$artistName} on the album ${$albumName}`;
//   songs.push(newSong);
//   $addDiv.addClass("hidden");
//   $homeDiv.addClass("hidden");
//   $listDiv.removeClass("hidden");
//   newSongWriter();
// };

// function newSongWriter() {
//   console.log("songs", songs);
//   console.log($songList);
//   for (var i = 0; i < songs.length; i++) {
//     $("#song-list").append(`<li>$(songs[i])</li>`);
//   }

// }