import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CommentFormInputs } from "../StockComment";

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required").min(5),
  content: Yup.string().required("Content is required").min(5),
});

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });

  /* const onSubmit = async (e: CommentFormInputs) => {
    handleComment(e);
    setError("title", {
      type: "manual",
      message: "Just test",
    });
  }; */

  return (
    <form className="ml-4 mt-4" onSubmit={handleSubmit(handleComment)}>
      <input
        type="text"
        id="title"
        className="focus:ring-primary-600 focus:border-primary-600 mb-3 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Title"
        {...register("title")}
      />
      {errors.title && (
        <p className="text-red-600">
          {errors.title.message![0].toUpperCase() +
            errors.title.message!.slice(1)}
        </p>
      )}
      <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
          required
          {...register("content")}
        ></textarea>
      </div>
      {errors.content && (
        <p className="text-red-600">
          {errors.content.message![0].toUpperCase() +
            errors.content.message!.slice(1)}
        </p>
      )}
      <button
        type="submit"
        className="focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg bg-lightGreen px-4 py-2.5 text-center text-xs font-medium text-white focus:ring-4"
      >
        Post comment
      </button>
    </form>
  );
};

export default StockCommentForm;
