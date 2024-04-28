import React from "react";

const AddTask = () => {
  return (
    <form className="flex flex-col justify-between items-center gap-x-3 w-full">
      <input
        type="text"
        placeholder="Add Task Here"
        minLength={3}
        maxLength={54}
        required
        name="add_task"
        className="w-full px-2 py-1 border-gray-100 rounded-md"
      />
      <button className="py-1 px-2 bg-teal-600 text-white rounded-md mt-4  w-full">
        Save
      </button>
    </form>
  );
};

export default AddTask;
