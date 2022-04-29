import React from 'react';
import { useHistory } from 'react-router-dom';

const CustomCard = ({ title, imageUrl }) => {
  const history = useHistory();
  return (
    <div className="card-zoom" onClick={() => history.push(`/${title}`)}>
      <div className="card-zoom-image">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={title}
        />
      </div>
      <p className="card-content uppercase">{title}</p>
    </div>
  );
};

export default CustomCard;
