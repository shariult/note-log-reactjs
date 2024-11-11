import { useState, useCallback } from "react";

function useHTTP() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_API_URL;

  const sendRequest = useCallback(async function (reqConfig, resHandler) {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${baseUrl}${reqConfig.url}`, {
        method: reqConfig.method || "GET",
        headers: reqConfig.headers || { "Content-Type": "application/json" },
        body: JSON.stringify(reqConfig.body) || null,
        Authorization:
          token && token.length > 0 ? "Bearer " + token : undefined,
      });

      if (!res.ok) {
        throw new Error("Error in Response!");
      }

      const data = await res.json();

      resHandler(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHTTP;
