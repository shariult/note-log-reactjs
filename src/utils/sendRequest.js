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
    console.log("Something went wrong!");
    return;
  }

  return res.json();
}

export default sendRequest;