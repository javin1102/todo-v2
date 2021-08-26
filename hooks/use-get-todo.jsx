import { messageAction } from "../redux/message-slice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useCallback } from "react";
import { userAction } from "../redux/user-slice";
export const useGetTodo = () => {
  const dispatch = useDispatch();
  const { googleId } = useSelector((state) => state.user);
  const sendRequest = useCallback(async () => {
    try {
      dispatch(messageAction.setLoading({ isLoading: true }));

      const response = await axios.get(`/api/todo/${googleId}`);

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