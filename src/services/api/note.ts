import { INote } from "../types/note";
import { axiosInstance } from "../../utils/axiosInstance";

// Route to Create and Read notes
const CR_NOTE = "api/v1/notes";

export async function addNote(title: string, content: string): Promise<INote> {
  const { data } = await axiosInstance.post(CR_NOTE, {
    title,
    content,
  });

  return data;
}

export async function retrieveNotes(): Promise<INote[]> {
  const { data } = await axiosInstance.get(CR_NOTE);

  return data;
}

export async function removeNote(id: string): Promise<{}> {
  const { data } = await axiosInstance.delete(`api/v1/notes/${id}`);

  return data;
}
