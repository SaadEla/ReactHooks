import React, { useState, useEffect} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
/*UseState return 2 values, 
the first one retourne la valeur du state
the second one retourne une fonction pour modifier ce state
 */
  const [songs, setSongs] = useState([
    { title: 'Way way way', id: 1 },
    { title: 'Tcha reye7', id: 2 },
    { title: 'Chira li nebghiha', id: 3 }
  ]);
  //console.log(songs);
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  /*the callback function in the parameter se declenche a chaque fois
  que le component render ou r*/
  //Mzyana bach tkhedemha m3a chi api call
  /*Le second parametre pour limiter le useEffect
  Ya3ni at goliha bghitek t intereagi liya ghi m3a had state "données" */
  const songadded = null;
  useEffect(() => {
    return (
        console.log("Song Hook", songs)
    )
  }, [songs])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      < NewSongForm addSong={addSong}/>
      {songadded}
    </div>
  );
}

export default SongList;