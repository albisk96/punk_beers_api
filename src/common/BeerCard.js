import React from 'react';

const BeerCard = ({ beer }) => {
  const { id, name, image_url, description, abv, first_brewed, tagline } = beer;
  return (
    <div className="p-10" key={id}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="object-contain h-48 w-full"
          src={image_url}
          alt={name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="overflow-y-auto h-36">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="tag">{abv}%</span>
          <span className="tag">{first_brewed}</span>
          <span className="tag">#{tagline}</span>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
