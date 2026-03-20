import { postRequest } from "./api";

export async function registerUser(formData) {
  const response = await postRequest("/auth/register", formData);

  if (response.success) {
    localStorage.setItem("gig_user", JSON.stringify(response.user));
    return response.user;
  }

  throw new Error(response.message || "Registration failed");
}