import React, { useEffect, useState } from "react";

//navigate to home page or redirect to login

import { useNavigate } from "react-router-dom";

import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
///styles
import classes from "./Home.module.css";

//MUI trash can
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { auth } from "./../firebase/firebaseConfig";

const Home = ({ isAuth }) => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  //firebase collection
  const postsCollectionRef = collection(db, "blogs");
  //navigate

  const getBlogs = async () => {
    const data = await getDocs(postsCollectionRef);
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(blogs);
  };

  useEffect(() => {
    getBlogs();
  }, [blogs]);

  //delete Blog

  const deleteBlog = async (id) => {
    const blogDoc = doc(db, "blogs", id);
    await deleteDoc(blogDoc);
  };

  return (
    <div>
      {blogs &&
        blogs.map((blog) => {
          const { id, title, content, author } = blog;
          const { name } = author;
          return (
            <div className={classes.blog} key={id}>
              <h3 className={classes.title}> {title}</h3>
              <p>{content}</p>
              <p>
                created by <span className={classes.author}>{name}</span>
              </p>
              {isAuth && blog.author.id === auth.currentUser.uid && (
                <button
                  onClick={() => deleteBlog(id)}
                  className={classes.deleteBtn}
                >
                  delete blog
                  <DeleteForeverIcon
                    sx={{
                      transform: "translateX(5px) translateY(5px) ",
                    }}
                  />
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Home;
