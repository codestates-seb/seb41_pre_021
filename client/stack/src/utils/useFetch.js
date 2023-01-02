import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://hyeon-dong.site';
export const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setIsPending(true);
    axios
      .get(BASE_URL + path)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
      })
      .catch((err) => console.error(err));
  }, [path]);
  return [data, isPending];
};
