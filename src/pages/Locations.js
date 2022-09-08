import React, { useEffect, useState } from "react";
import LocationsList from "./LocationsList";

const Locations = () => {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((r) => r.json())
      .then((data) => setAllLocations(data));
  }, []);

  // console.log(allPlayers);

  function deleteLocations(id) {
    fetch(`http://127.0.0.1:9292/locations/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = allLocations.filter((player) => player.id !== id);
        setAllPlayers(goThru);
      });
  }

  return (
    <>
      <LocationsList totalPlayers={allLocations} deleteLocations={deleteLocations} />
    </>
  );
};

export default Locations;