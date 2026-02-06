import React from 'react';
import PropTypes from 'prop-types';

const PetCard = ({ pet }) => {
    return (
        <div className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <p>Description: {pet.description}</p>
        </div>
    );
};

PetCard.propTypes = {
    pet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        breed: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default PetCard;