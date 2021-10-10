import { messageAction } from "../redux/message-slice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useCallback } from "react";
import { userAction } from "../redux/user-slice";
export const useGetTodo = () => {
  const dispatch = useDispatch();
  const { googleId } = useSelector((state) => state.user);
  const url =
    process.env.NODE_ENV === "production"
      ? `https://todo-v2-phi.vercel.app/api/todo/${googleId}`
      : `http://localhost:3000/api/todo/${googleId}`;
  const sendRequest = useCallback(async () => {
    try {
      dispatch(messageAction.setLoading({ isLoading: true }));

      const response = await axios.get(`${url}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      dispatch(userAction.setTodoList({ todoList: response.data.todoList }));
      dispatch(userAction.setThemeType({ theme: response.data.theme }));
    } catch (err) {
      console.error(err);
    }
    dispatch(messageAction.setLoading({ isLoading: false }));
  }, []);
  return {
    sendRequest,
  };
};
