import { useState, useEffect } from 'react';

const useFetch = (apiMethod, key, restParam) => {
  const [fetchData, setFetchData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiMethod(restParam)
      .then((res) => {
        const { data } = res;
        setFetchData(data[key]);
      })
      .catch((err) => alert(`Something goes wrong ${err.stack}`))
      .finally(() => setLoading(false));
  }, [apiMethod, key, restParam]);
  return [
    fetchData,
    isLoading,
  ];
};

export default useFetch;
