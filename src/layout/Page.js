import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

export default function PostView() {
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
    const { slug } = useParams();
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        created_at: "",
        updated_at: ""
    })

    useEffect(() => {
      fetch(`${backendUrl}/page/${slug}/`)
        .then(res => res.json())
        .then((result) => {
          setPost(result);
        })
    }, [slug])

    return (
        <React.Fragment>
            <Post post={post} />
            <hr />
        </React.Fragment>
    )
}
