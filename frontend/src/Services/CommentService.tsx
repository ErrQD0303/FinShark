import axios from "axios";
import { StringLiteralLike } from "typescript";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = process.env.REACT_APP_BACK_END_API + "comment";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string,
) => {
  try {
    const data = await axios.post<CommentPost>(api + `/${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
