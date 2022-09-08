import React, { useEffect, useState } from "react";
import LocationsList from "./LocationsList";

const Locations = () => {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/locations")
      .then((r) => r.json())
      .then((data) => setAllLocations(data));
  }, []);

  

  function deleteLocations(id) {
    fetch(`http://127.0.0.1:9292/locations/${id}`, {
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