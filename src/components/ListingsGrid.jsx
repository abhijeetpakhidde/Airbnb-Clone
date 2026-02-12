import React from "react";
import "./ListingsGrid.css";
import ListingCard from "./ListingCard";
import { listings } from "./mockdata";

function ListingsGrid() {
  return (
    <div className="listings-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
      {listings.map((listing) => (
        <ListingCard key={listing.id + 100} listing={listing} />
      ))}
      {listings.map((listing) => (
        <ListingCard key={listing.id + 200} listing={listing} />
      ))}
    </div>
  );
}

export default ListingsGrid;
