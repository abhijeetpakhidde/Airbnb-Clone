import React from "react";
import "./ListingCard.css";
import { FaStar, FaHeart } from "react-icons/fa";

function ListingCard({ listing }) {
  return (
    <div className="listing-card">
      <div className="card-image-container">
        <img
          src={listing.image}
          alt={listing.location}
          className="card-image"
          loading="lazy"
        />
        <div className="heart-icon">
          <FaHeart stroke="white" strokeWidth="20px" fill="rgba(0,0,0,0.5)" />
        </div>
      </div>

      <div className="card-info">
        <div className="card-row-1">
          <span className="card-location">{listing.title}</span>
          <div className="card-rating">
            <FaStar size={12} />
            <span>{listing.rating}</span>
          </div>
        </div>

        <div className="card-secondary-text">{listing.distance}</div>
        <div className="card-price">
          <strong>{listing.price}</strong> night
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
