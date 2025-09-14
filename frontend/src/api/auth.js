// src/api/auth.js
const API_BASE = "https://first-node-app-repo.onrender.com";

console.log(API_BASE)


export const registerUser = async (formData) => {
  const res = await fetch(`${API_BASE}/api/auth/register`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  // ✅ Store userId in localStorage
  if (data.userId) {
    localStorage.setItem("userId", data.userId);
  }

  return data;
};

export const loginUser = async (formData) => {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  // ✅ Store userId in localStorage
  if (data.userId) {
    localStorage.setItem("userId", data.userId);
  }

  return data;
};
