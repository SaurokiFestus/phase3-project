import React, { useEffect, useState } from "react";
import LocationsList from "./LocationsList";

const Locations = () => {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetch("https://backenndd2.herokuapp.com/locations")
      .then((r) => r.json())
      .then((data) => setAllLocations(data));
  }, []);

  

  function deleteLocations(id) {
    fetch(`https://backenndd2.herokuapp.com/locations/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = allLocations.filter((location) => location.id !== id);
        setAllLocations(goThru);
      });
  }

  return (
    <>
      <LocationsList totalLocations={allLocations} deleteLocations={deleteLocations} />
    </>
  );
};

export default Locations;