
import React, { useState } from "react";
import axios from 'axios';



import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Label } from "@mui/icons-material";
import UploadButton from "../../components/ReuseableComponent/uploadButton";
// import { Typography } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// const { Title } = Typography;

// const { Option } = Select;

const BlogPostForm = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [img, setImage] = React.useState('https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png');
  const [body, setBody] = React.useState("");
  const [publish, setPublish] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [successStatus, setSuccessStatus] = React.useState();
  const [errorStatus, setErrorStatus] = React.useState();

  // const [form] = Form.useForm();


//   editor
const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };

  const handleImageUpload = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({ data: { link: reader.result } });
      };
      reader.onerror = error => reject(error);
    });
  };

//   end of editor

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  // const handleImageChange = (info) => {
  //   if (info.file.status === "done") {
  //     setImage(info.file.response);
  //     message.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === "error") {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  const sendToServer = async (value) => {
    await setPublish(value)
    axios.post('http://localhost:4000/api/blog', {
    title,
    author,
    category,
    body,
    img,
    publish

  })
    .then((res) => {
      console.log(res);
      setSuccessStatus(true)
      setTimeout(() => {
        setSuccessStatus(false)
      }, 3000);
    })
    .catch((error) => {
      console.error(error);
      setErrorStatus(true)
      setTimeout(() => {
        setErrorStatus(false)
      }, 3000);
    });
  }

  const handleSubmit = async (value) => {
    // e.preventDefault();
    console.log("this is our code");
    await setPublish(value)

    // Add code here to send the form data to the server for saving
    await sendToServer(value)

    // await form.resetFields();
  
  };

  const handleSaveAsDraft = async () => {
    // e.preventDefault();
    console.log("this is your code");
    await setPublish(false)

    // Add code here to send the form data to the server for saving
    await sendToServer(false)

    // await form.resetFields();

  };

  const success = "Congratulations! Post has been successfully added and is now live. Thank you for sharing your thoughts with us!"
  const error = "Error adding blogpost. Please check your inputs and try again later."

//   const handleUpdate = async (id) => {
//     const response = await fetch(`http://localhost:4000/api/blog/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title,
//         category,
//         author,
//         publish,
//       }),
//     });

//     if (response.ok) {
//       console.log('Blog post updated successfully!');
//     } else {
//       console.error('Failed to update blog post');
//     }
//   };

const handleUpdate = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:4000/api/blog/${id}`, 
        {
            title,
            author,
            category,
            body,
            img,
            publish
        
          }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
        {/* {successStatus && <Alert
      message="Hurray"
      description={success}
      type="success"
      showIcon
    />}
    {errorStatus && <Alert
      message="Awww"
      description={error}
      type="error"
      showIcon
    />} */}
    {/* <Form onFinish={handleSubmit(true)} size="large"> */}
    {/* <Title level={1}>Create Post</Title>
        <div className="row">
            <div className="col-8">
            <Title level={5}>Title</Title>
      <Form.Item>
        <Input value={title} onChange={handleTitleChange} />
      </Form.Item>
      <Title level={5}>Author</Title>
      <Form.Item >
        <Input value={author} onChange={handleAuthorChange} />
      </Form.Item>
      <Title level={5}>Category</Title>
      <Form.Item>
        <Select value={category} onChange={handleCategoryChange}>
          <Option value="technology">Technology</Option>
          <Option value="business">Business</Option>
          <Option value="lifestyle">Lifestyle</Option>
        </Select>
      </Form.Item>
            </div>
            <div className="col-4">
            <Title level={5}>Featured Image</Title>
            <Form.Item>
                <UploadButton/>
        
      </Form.Item>
            </div>
        </div>
        
        <Title level={5}>Content</Title>
      <Form.Item className="border h-75">
        <ReactQuill value={body} onChange={handleBodyChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Publish
        </Button>
        <span className="mx-2"></span>
        <Button onClick={() => handleSubmit(false)}>
          Save as draft
        </Button>
      </Form.Item> */}
      
    {/* </Form> */}
    </div>
  );
};

export default BlogPostForm;