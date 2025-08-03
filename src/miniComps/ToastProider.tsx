import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
export default ToastProvider;
