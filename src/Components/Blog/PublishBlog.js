import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../utils/Hooks/useAuth';
import './Blog.css';
const PublishBlog = () => {
  const [editorText, setEditorText] = useState('Start a blog');
  const { user } = useAuth();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.body = editorText;
    data.author = user?.displayName;
    data.email = user?.email;
    data.status = 'approved';

    data.publishDate = new Date().toLocaleDateString();
    console.log(data);
    swal({
      title: ' Do you want to submit the blog?',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        swal('The blog is Submitted ', {
          icon: 'success',
        });
        fetch('https://guarded-scrubland-87252.herokuapp.com/addBlog', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
      }
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <div className="text-center w-50 mt-5">
        <h3>Write a blog</h3>
        <p>
          Share your tour experience with us. Our goal is to represent beautiful
          places of bangladesh tothe world.Let's work together
        </p>
      </div>
      <div className="form w-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('image')}
            placeholder="Add Image Link"
            className="p-2 m-2 w-100"
          />
          <br />
          <input
            {...register('title', { required: true })}
            placeholder="Enter a suitable title for your blog"
            className="p-2 m-2 w-100"
          />

          {errors.title?.type === 'required' && 'Title name is required'}
          <br />

          <Editor
            textareaName="Body"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={(newText) => setEditorText(newText)}
          />

          <input className="btn my-2" type="submit" value="Publish blog" />
        </form>
      </div>
    </div>
  );
};

export default PublishBlog;
