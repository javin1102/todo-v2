import { messageAction } from "../redux/message-slice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useCallback } from "react";

export const usePostTodo = () => {
  const { todoList, googleId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendRequest = useCallback(async () => {
    try {
      dispatch(messageAction.setLoading({ isLoading: true }));
      const data = JSON.stringify({ todoList, googleId });
      const response = await axios.post("/api/todo", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }

    dispatch(messageAction.setLoading({ isLoading: false }));
  }, [todoList]);
  return {
    sendRequest,
  };
};
