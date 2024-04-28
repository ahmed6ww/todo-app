import React from "react";
import { Todo } from "../../types";
import { CiSquareCheck } from "react-icons/ci";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import ToolTip from "./Tooltip";
import { DialogDemo } from "./ui/Modal";

const Task = ({ task }: { task: Todo }) => {
  return (
    <tr className="flex justify-between items-center border-b border-gray-300 py-2 px-2">
      <td>{task.content}</td>
      <td className="flex gap-x-2">
        <ToolTip tool_tip_conent="Mark as completed">
          <CiSquareCheck
            size={28}
            className={`${
              task.is_completed ? "text-green-500" : "text-gray-300"
            }`}
          />
        </ToolTip>
       
          <DialogDemo title="Edit Task" editing={true}>
 <ToolTip tool_tip_conent="Edit task">
            <FiEdit size={24} className="text-blue-500" />
             </ToolTip>
          </DialogDemo>
       
        <ToolTip tool_tip_conent="Delete task">
          <FiTrash2 size={24} className="text-red-600" />
        </ToolTip>
      </td>
    </tr>
  );
};

export default Task;
