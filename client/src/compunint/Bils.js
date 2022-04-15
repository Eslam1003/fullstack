import axios from 'axios';

import React, { useEffect, useState } from 'react';

function Bils() {
  const [data, setData] = useState({});

  let url = window.location.href.slice(21);
  useEffect(() => {
    axios.get(url, { name: 'eslam' }).then((res) => setData(res.data));
  }, [data]);

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.cost}</h1>
    </div>
  );
}

export default Bils;
