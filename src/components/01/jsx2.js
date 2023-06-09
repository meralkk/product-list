import React from "react";

const Jsx2 = () => {
    //burada javascriptteki gibi yazılabiliyor
  const user = {
    name: "Ali",
    email: "ali@gmail.com",
    occupation: "Developer",
  };

  return (
    <div>

      {/* aşağıda süslü parantez kullanmak demek ben burada javascript ifadesi kullanacağım demek oluyor@ */}

      <div>Name: {user.name} </div>
      <div>Email: {user.email} </div>
      <div>Occupation: {user.occupation} </div>
    </div>
  );
};

export default Jsx2;
