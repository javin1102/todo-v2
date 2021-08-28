import { messageAction } from "../redux/message-slice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useCallback } from "react";

export const usePostTodo = () => {
  const { todoList, googleId, theme } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendRequest = useCallback(async () => {
    try {
      dispatch(messageAction.setLoading({ isLoading: true }));
      const data = JSON.stringify({ todoList, googleId, theme });
      await axios.post("http://localhost:3000/api/todo", data, {
        headers: {
          "Content-Type": "application/json",
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
