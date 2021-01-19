import { IUserToken } from "../types/user";
import { axiosInstance } from "../../utils/axiosInstance";

const AUTH_ROTUE = "api/v1/auth/token/";

export async function getAuth(
  email: string,
  password: string
): Promise<IUserToken> {
  const { data } = await axiosInstance().post(AUTH_ROTUE, {
    email,
    password,
  });

  return data;
}
