import { useState, useCallback } from "react";

import { ApiResponse } from "./use-fetch.types";

export const useFetch = (url: string, token?: string): ApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(false);

  const fetchGet = useCallback(async () => {
    setError(false);
    try {
      const fetchedData = await fetch(url, {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const json = await fetchedData.json();
      setData(json);
    } catch {
      setError(true);
    }
  }, [url, token]);

  return {
    data,
    error,
    fire: fetchGet,
  };
};
