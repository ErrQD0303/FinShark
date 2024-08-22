import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.log(error.response);
    var err = error.response;
    if (err?.status === 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err?.status === 404) {
      toast.warning("System down");
    } else if (Array.isArray(err?.data.errors)) {
      err?.data.errors.forEach((val: any) => toast.warning(val.description));
    } else if (typeof err?.data.errors === "object") {
      Object.keys(err?.data.errors).forEach((e: any) => {
        toast.warning(err?.data.errors[e][0]);
      });
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err) {
      toast.warning(err?.data);
    }
  }
};
