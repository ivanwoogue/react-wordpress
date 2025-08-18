import { AUTH_ROUTE, BASE_URL } from "../constants";
import { SESSION_KEY_TOKEN } from "../../constants";

type LoginResponse = {
  data: {
    jwt: string;
  };
  success: boolean;
};

export async function useLogin(login: string, password: string) {
  const params = new URLSearchParams({
    rest_route: AUTH_ROUTE,
    login: login,
    password: password,
  });
  const response = await fetch(`${BASE_URL}?${params}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  })
    .then<LoginResponse>((res) => {
      return res.json() as Promise<LoginResponse>;
    })
    .catch((err) => {
      console.error("Login error:", err);
      return {
        data: { jwt: "" },
        success: false,
      } as LoginResponse;
    });

  if (response.success) {
    sessionStorage.setItem(SESSION_KEY_TOKEN, response.data.jwt);
  }

  return response;
}
