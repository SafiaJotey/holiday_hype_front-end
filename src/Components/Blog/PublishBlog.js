import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const PublishBlog = () => {
  const [editorText, setEditorText] = useState('Start a blog');
  const { user } = useAuth();
  const {
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
    <div className="d-flex flex-column justify-content-center align-items-center  ">
      <div className="text-center w-50 mt-5 ">
        <h2 className="text-primary fw-bold">
          Write a <span className="text-secondary fw-bold">blog</span>
        </h2>
        <p className="fw-bold">
          Share your tour experience with us. Our goal is to represent beautiful
          places of bangladesh tothe world.Let's work together
        </p>
      </div>
      <div className="form w-50 bg-dark p-5 shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('image')}
            placeholder="Add Image Link"
            className="p-2 m-2 w-100 border border-1 border-line   rounded "
          />
          <br />
          <input
            {...register('title', { required: true })}
            placeholder="Enter a suitable title for your blog"
            className="p-2 m-2 w-100 border border-1 border-line rounded"
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

          <input
            className="mt-3 bg-primary  px-3 py-2 rounded border border-secondary border-start-3 text-white pe-auto"
            type="submit"
            value="Publish blog"
          />
        </form>
      </div>
    </div>
  );
};

export default PublishBlog;
