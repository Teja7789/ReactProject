import React, { useState , useEffect } from "react";//post edit export
import LoadingCard from "./LoadingCard";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Input, Space } from "antd";
import { getPost ,deletePost, setEdit, updatePost} from "./redux/feature/postSlice";//post edit export
const UserPost = ({ history }) => {
  const [id, setId] = useState();
  const [bodyText, setBodyText] = useState("");

  const { loading,post,edit,body} = useSelector((state) =>({ ...state.app}));
const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setId(e.target.value);
  };


  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please enter id");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };
  //post edit export
useEffect(()=>{
  setBodyText(body);
},[body]);
//post edit export
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
      <Input
        placeholder="Enter User Id"
        type="number"
        onChange={onChangeInput}
        value={id}
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <Space size="middle" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" onClick={() => history.push("/create")}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
        {/* post.length - alldeletePost this condition is useful */}
          {post.length > 0 && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post[0].id}>
                <p>User Id: {post[0].id}</p>
                {edit ? (
                  <>
                    <Input.TextArea
                      rows={4}
                      value={bodyText}
                      onChange={(e) => setBodyText(e.target.value)}
                    />
                    <Space
                      size="middle"
                      style={{
                        marginTop: 5,
                        marginLeft: 5,
                      }}
                    >
                      {/* putmethod updatePost */}
                      <Button type="primary" 
                      onClick={()=> {dispatch(updatePost({id: post[0].id,body: bodyText}));
                      dispatch(setEdit({edit: false,body: post[0].body}));
                      }
                    } 
                      >Save</Button>
                      {/* putmethod updatePost */}
                      {/* //post edit export */}
                      <Button
                        onClick={ () => dispatch(setEdit({edit: false,body: post[0].body}))}
                      >Cancel</Button>
                      {/* //post edit export */}
                    </Space>
                  </>
                ) : (
                  <span>{post[0].body}</span>
                )}
              </Card>
              <Space
                size="middle"
                style={{
                  marginTop: 35,
                  marginLeft: 5,
                  float: "right",
                }}
              >
                {/* //deletePost-2 */}
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  disabled={edit}
                  danger
                  onClick={()=> dispatch(deletePost({id: post[0].id}))}
                >
                  Delete
                </Button>
                {/* //post edit export */}
                <Button type="primary" 
                onClick={ () => dispatch(setEdit({edit: true,body: post[0].body}))}
                >Edit </Button>
                {/* //post edit export */}
              </Space>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserPost;