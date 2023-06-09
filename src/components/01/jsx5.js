import React from "react";

const Jsx5 = () => {
  const names = ["Ali", "Ayşe", "Veli", "Fatma"];
  const cities = ["İstanbul", "İzmir", "London", "Paris"];
  return (
    <div>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <select>
        {cities.map((city, i) => (
          <option value="" key={i}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
