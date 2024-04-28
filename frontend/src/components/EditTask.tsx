import React from "react";

const EditTask = () => {
  return (
    <form className="flex flex-col justify-between items-center gap-x-3 w-full">
      <input
        type="text"
        placeholder="Edit Task"
        minLength={3}
        maxLength={54}
        required
        name="edit_task"
        className="w-full px-2 py-1 border-gray-100 rounded-md"
      />
      <button className="py-1 px-2 bg-teal-600 text-white rounded-md mt-4  w-full">
        Save
      </button>
    </form>
  );
};

export default EditTask;
