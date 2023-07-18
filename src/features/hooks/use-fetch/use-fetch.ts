import { useState, useCallback } from "react";
import axios from "axios";

import { ApiResponse } from "./use-fetch.types";

export const useFetch = (url: string, token?: string): ApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(false);

  const fetch = useCallback(async () => {
    setError(false);
    try {
      const fetchedData = await axios.get(url, {
        headers: {
          accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      setData(fetchedData.data);
    } catch {
      setError(true);
    }
  }, [url, token]);

  return {
    data,
    error,
    fire: fetch,
  };
};
