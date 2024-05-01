import Cookies from "js-cookie";

const URL = "http://localhost:8080/api/auth";

interface registerUserProps {
  username: string;
  email: string;
  password: string;
}

export async function registerUser({
  username,
  email,
  password,
}: registerUserProps) {
  const res = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: username, email, password }),
  });

  if (!res.ok) {
    throw new Error("Failed to register user");
  }

  const data = await res.json();

  Cookies.set("token", data.token);

  return data;
}

interface loginUserProps {
  email: string;
  password: string;
}

export async function loginUser({ email, password }: loginUserProps) {
  const res = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Failed to register user");
  }

  const data = await res.json();

  Cookies.set("token", data.token);

  return data;
}
