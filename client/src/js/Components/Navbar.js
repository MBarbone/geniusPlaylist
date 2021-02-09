import React, { useState, useEffect } from "react";
import queryString from "query-string";

const Navbar = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) return;

    fetch("https://api.spotify.com/v1/me/", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((data) => setData(data), console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return <div>test</div>;
};

export default Navbar;
