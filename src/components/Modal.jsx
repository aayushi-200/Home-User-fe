/* eslint-disable react/prop-types */

import { useState } from "react";

const Modal = ({ isOpen, onClose, users, onSave }) => {
  const [selectedUsers, setSelectedUsers] = useState(users);

  const handleCheckboxChange = (index) => {
    const updatedUsers = [...selectedUsers];
    updatedUsers[index].checked = !updatedUsers[index].checked;

    // Ensure at least one checkbox remains checked
    if (updatedUsers.filter((user) => user.checked).length > 0) {
      setSelectedUsers(updatedUsers);
    }
  };

  const handleSave = () => {
    onSave(selectedUsers);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-800 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-96">
        <h2 className="text-lg font-semibold">
          Modify Users for: 89701 E Pine Street
        </h2>
        <div className="mt-4 space-y-2">
          {selectedUsers.map((user, index) => (
            <div key={user.name}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={user.checked}
                  onChange={() => handleCheckboxChange(index)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className={user.checked ? "font-semibold" : ""}>
                  {user.name}
                </span>
              </label>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={handleSave}
            disabled={selectedUsers.filter((user) => user.checked).length === 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
