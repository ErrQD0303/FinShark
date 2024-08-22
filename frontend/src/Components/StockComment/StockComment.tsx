import React, { useCallback, useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import { toast } from "react-toastify";
import { CommentGet } from "../../Models/Comment";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "../StockCommentList/StockCommentList";

type Props = {
  stockSymbol: string;
};

export type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = async (e: CommentFormInputs) => {
    try {
      const res = await commentPostAPI(e.title, e.content, stockSymbol);
      if (res) {
        toast.success("Comment created successfully!");
        getComments();
      }
    } catch (e: any) {
      toast.warning(e);
    }
  };

  const getComments = async () => {
    setLoading(true);
    const res = await commentGetAPI(stockSymbol);
    setLoading(false);
    setComments(res?.data!);
  };

  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments} />}
      <StockCommentForm
        symbol={stockSymbol}
        handleComment={handleComment}
      ></StockCommentForm>
    </div>
  );
};

export default StockComment;
