async function sendRequest(reqConfig) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const res = await fetch(`${apiUrl}${reqConfig.url}`, {
    method: reqConfig.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(reqConfig.body),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Something went wrong!");
  }

  return res.json();
}

export default sendRequest;
