import { INote } from "../types/note";
import { axiosInstance } from "../../utils/axiosInstance";

// Route to Create and Read notes
const CR_NOTE = "api/v1/notes";

export async function addNote(
  title: string,
  content: string,
  token: string
): Promise<INote | string> {
  const { data } = await axiosInstance().post(CR_NOTE, {
    title,
    content,
  });

  return data;
}

export async function retrieveNotes(
  token: string
): Promise<INote[] | void | string> {
  const { data } = await axiosInstance().get(CR_NOTE);

  return data;
}

export async function removeNote(id: string, token: string): Promise<{}> {
  const { data } = await axiosInstance().delete(`api/v1/notes/${id}`);

  return data;
}
