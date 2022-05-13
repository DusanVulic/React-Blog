import React, { useState } from "react";
//MUI components
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const createBlogHandler = (e) => {
    e.preventDefault();
    setTitleError(false);
    setContentError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (content === "") {
      setContentError(true);
    }

    console.log(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <h3>Create NEW blog </h3>
      <Container
        sx={{
          marginTop: "100px",
          width: "80%",
        }}
      >
        <form noValidate autoComplete="off" onSubmit={createBlogHandler}>
          <TextField
            label="title"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
            sx={{ marginBottom: "25px" }}
          />
          <TextField
            label="blog content"
            fullWidth
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            error={contentError}
            multiline
            rows={8}
            sx={{ marginBottom: "25px" }}
          />
          <Button
            variant="contained"
            type="submit"
            //endIcon={<ArrowForwardIosRoundedIcon />}
          >
            create blog
          </Button>
        </form>
      </Container>
    </>
  );
};

export default CreatePost;
