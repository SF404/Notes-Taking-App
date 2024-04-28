import React, { useEffect, useState } from "react";
import Masonry from "react-layout-masonry";
import { getNotes } from "../Api/api";
import { formatDateTime } from "../Utils/utils";
import { NavLink } from "react-router-dom";

const ListNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const colors = [
    "bg-red-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-cyan-200",
    "bg-orange-200",
    "bg-amber-200",
    "bg-lime-200",
    "bg-emerald-200",
    "bg-violet-200",
    "bg-fuchsia-200",
    "bg-rose-200",
  ];

  return (
    <div className="w-full">
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={8}>
        {notes
          .sort((a, b) => b.id - a.id)
          .map((item, index) => (
            <NavLink
              to={`/notes/${item.id}`}
              key={item.id}
              className={"h-full"}
            >
              <div
                className={`p-4 h-full rounded-lg cursor-pointer ${
                  colors[index % colors.length]
                }`}
              >
                <p className="font-bold text-lg text-gray-800">{item.title}</p>
                <p className="mt-4 font-semibold text-xs text-gray-600">
                  {formatDateTime(item.created_at)}
                </p>
              </div>
            </NavLink>
          ))}
      </Masonry>
    </div>
  );
};

export default ListNotes;
