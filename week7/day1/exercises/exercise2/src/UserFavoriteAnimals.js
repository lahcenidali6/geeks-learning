import React from 'react';

function UserFavoriteAnimals(props) {
  return (
    <ul>
      {props.favAnimals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  );
}

export default UserFavoriteAnimals;
