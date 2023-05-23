import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import LoadingCard from "./LoadingCard";
//createPost-2
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "./redux/feature/postSlice";
import { useEffect } from "react";
const CreatePost = ({ history }) => {
  const [values, setValues] = useState({ title: "", body: "" });
const dispatch = useDispatch();
const {post, loading} = useSelector((state) => ({ ...state.app}))
  const [showPost, setShowPost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //createPost-2
    dispatch(createPost({values}));
    setValues({ title: "", body: "" });
    setShowPost(true);
  };
useEffect(() => {
  setShowPost();
},[])
  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper">
            <Card type="inner" title={post[0].id}>
              <p>User Id: {post[0].id}</p>
              <span>{post[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Create Post</h1>
          <Input
            placeholder="Enter Id"
            type="text"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.id}
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <Input.TextArea
            placeholder="Enter Body"
            type="body"
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            value={values.body}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
            <Button onClick={() => history.push("/")}>Go Back</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </>
  );
};

export default CreatePost;