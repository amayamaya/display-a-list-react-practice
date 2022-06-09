import React from 'react';

export default function ArtistItem({ artist, genre, favorite, album }) {
  return (
    <div className="singers">
      <p>{artist}</p>
      <p>{genre}</p>
      <p>{favorite}</p>
    </div>
  );
}

//when mapping in item map through albums.title list is the same
