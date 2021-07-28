import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from '../comments/CommentsList';

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = <CommentsList comments={loadedComments}/>
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0) ){
    comments = <p className = 'centered'>No Existen Comentatios Aun!!!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>Comentarios de Usuarios</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Añadir Comentario
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
