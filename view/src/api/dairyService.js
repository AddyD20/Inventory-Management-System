// src/api/dairyService.js

export async function submitDairyProduct(table, formData) {
  const data = {
    table,
    ...formData,
  };
  const endpoint = "http://127.0.0.1:3000/submit/";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to submit entry");
  }
  return response.json();
}
