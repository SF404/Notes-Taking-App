import React, { useEffect, useState } from "react";
import { retrieveNote, updateNote } from "../Api/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateNote(id, formData);
      console.log(data);
      toast('Note Updated Successfully')
      navigate(`/notes/${id}`)
    } catch (error) {
        console.log(error);
        toast(error.message)
    }
  };

  const fetchNote = async (id) => {
    try {
      const data = await retrieveNote(id);
      setFormData({
        title: data.title,
        content: data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNote(id);
  }, [id]);


  return (
    <div className="text-slate-300 p-8 pt-0">
      <p className="mb-8 underline">Edit Note</p>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-transparent outline-none size-10 w-full border-b border-gray-700 text-3xl"
          id="title"
          name="title"
          placeholder="Enter Title..."
          value={formData.title}
          onChange={handleChange}
          maxLength={250}
        />
        <p className="text-xs text-end">{formData.title.length}/250</p>
        <br /> <br /> <br />
        <textarea
          className="bg-transparent outline-none size-10 w-full border-b py-2 border-gray-700 text-xl h-96"
          id="content"
          name="content"
          placeholder="Enter Content..."
          value={formData.content}
          onChange={handleChange}
          maxLength={2000}
        />
        <p className="text-xs text-end">{formData.content.length}/2000</p>
        <br />
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
