var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.unshift("My Way - by Frank Sinatra on the album Greatest Hits");
songs.push("New York, New York - by Frank Sinatra on the album Greatest Hits");

// Students must find and replace the > character in each item with a - character.
for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace('>','-');
  songs[i] = songs[i].replace(/\*/g,'');
  songs[i] = songs[i].replace(/@/g,'');
  songs[i] = songs[i].replace(/\(/g,'');
  songs[i] = songs[i].replace(/!/g,'');
  songs[i] =
  document.getElementById("songList").innerHTML += "<li>" + songs[i]; + "</li>"
}

