import React, { useEffect, useState } from "react";
import { busca } from "../api/api";
import "../assets/css/post.css";
import { useParams, useHistory } from "react-router-dom";

const Post = () => {
  let history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      history.push("/404");
    });
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao_texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
