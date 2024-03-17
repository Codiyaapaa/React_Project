import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/codiyaapaa")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
        <p>User Name : Codiyaapaa</p>
      GitHub Followers: {data.followers}
    </div>
  );
}

export default GitHub;
