import React, { useEffect, useState } from "react";
import { deleteNote, retrieveNote } from "../Api/api";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { formatDateTime } from "../Utils/utils";
import { FaPen, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const ViewNotes = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({});
  const fetchNote = async (id) => {
    try {
      const data = await retrieveNote(id);
      setNote(data);
    } catch (error) {
      console.log(error);
      toast('Some error occured while fetching Notes')
    }
  };

  useEffect(() => {
    fetchNote(id);
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteNote(id);
      toast("Note Deleted Successfully");
      navigate('/');
    } catch (error) {
        console.log(error)
        toast('Failed to delete')
    }
  };

  return (
    <div className="text-slate-200 p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-300">
          {formatDateTime(note.created_at)}
        </p>
        <div className="flex gap-2">
          <NavLink
            exact
            to={`/notes/${note.id}/edit`}
            className="bg-gray-700 hover:bg-gray-600 rounded-full font-bold p-3"
            title="edit"
          >
            <FaPen />
          </NavLink>
          <button
            className="bg-gray-700 hover:bg-gray-600 rounded-full font-bold p-3"
            title="delete"
            onClick={handleDelete}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-2xl font-semibold">{note.title}</p>
      </div>
      <p className="text-lg text-justify mt-1 whitespace-pre-line">{note.content}</p>
    </div>
  );
};

export default ViewNotes;
