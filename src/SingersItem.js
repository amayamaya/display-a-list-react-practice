import React from 'react';

export default function SingersItem({ singer, genre, favorite, album }) {
  return (
    <div className="singers">
      <p>{singer}</p>
      <p>{genre}</p>
      <p>{favorite}</p>
      <p>{album.title}</p>
      <p>{album.year}</p>
    </div>
  );
}

//when mapping in item map through albums.title list is the same
