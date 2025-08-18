import { AUTH_CODE, BASE_URL, USERS_ROUTE } from "../constants";

type RegisterResponse = {
  success: boolean;
  message: string;
};

export async function useRegister(
  username: string,
  email: string,
  password: string
) {
  const params = new URLSearchParams({
    rest_route: USERS_ROUTE,
    user_login: username,
    email: email,
    password: password,
    AUTH_KEY: AUTH_CODE,
  });

  const response = await fetch(`${BASE_URL}?${params}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data: RegisterResponse) => {
      return data;
    })
    .catch((err) => {
      return {
        success: false,
        message: "Registration failed. Please try again.",
      } as RegisterResponse;
    });

  return response;
}
