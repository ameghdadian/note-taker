import { IUser } from "../types/user";
import { axiosInstance } from "../../utils/axiosInstance";

// Route to Create and Read notes
const AUTHROTUE = "api/v1/auth/token/";

export async function getAuth(email: string, password: string): Promise<IUser> {
  const { data } = await axiosInstance.post(AUTHROTUE, {
    email,
    password,
  });

  return data;
}
