import { messageAction } from "../redux/message-slice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useCallback } from "react";
import { getURL } from "next/dist/shared/lib/utils";

export const usePostTodo = () => {
  const { todoList, googleId, theme } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const url =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_PROD}/api/todo`
      : "http://localhost:3000/api/todo";
  const sendRequest = useCallback(async () => {
    try {
      dispatch(messageAction.setLoading({ isLoading: true }));
      const data = JSON.stringify({ todoList, googleId, theme });
      await axios.post(`${url}`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers":
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      });
    } catch (err) {
      console.error(err);
    }

    dispatch(messageAction.setLoading({ isLoading: false }));
  }, [todoList, theme]);
  return {
    sendRequest,
  };
};
