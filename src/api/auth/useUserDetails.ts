import { SESSION_KEY_TOKEN } from "../../constants";
import { BASE_URL, VALIDATE_ROUTE } from "../constants";

export type UserData = {
  ID: string;
  user_login: string;
  user_email: string;
  user_registered: string;
};

 type UserResponse = {
  data: {
    user: UserData;
  };
  success: boolean;
};

export async function useUserDetails() {
  const token = sessionStorage.getItem(SESSION_KEY_TOKEN);
  if (!token) {
    return null;
  }

  const params = new URLSearchParams({
    rest_route: VALIDATE_ROUTE,
  });
  const response = await fetch(`${BASE_URL}?${params}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data: UserResponse) => {
      return {
        ...data.data.user,
      };
    })
    .catch((err) => {
      console.error("Error fetching user details:", err);
      return null;
    });

  return response as UserData;
}
