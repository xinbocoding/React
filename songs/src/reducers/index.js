import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
      {title: 'No scrubs', duration: '5:00'},
      {title: 'All stars', duration: '3:20'},
      {title: 'shooting star', duration: '5:10'},
      {title: 'Hello, dear', duration: '3:38'}
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
};

export default combineReducers ({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});