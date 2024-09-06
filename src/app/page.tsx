'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState, AppDispatch } from '../lib/store/store';
import { removeItems, setDontAskAgain } from '../lib/store/features/itemsSlice';

const Home = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const dontAskAgain = useSelector((state: RootState) => state.items.dontAskAgain);
  const dispatch: AppDispatch = useDispatch();

  const [editMode, setEditMode] = useState(false); // Toggle edit mode
  
  const [itemsToRemove, setItemsToRemove] = useState<number[]>([]); // Track items selected for removal
  const [showDialog, setShowDialog] = useState(false); // Toggle for confirmation dialog

  const handleEdit = () => {
    setEditMode(true); // Enter edit mode
  };

  const handleCancelEdit = () => {
    setEditMode(false); // Exit edit mode
    setItemsToRemove([]); // Clear selected items for removal
  };

  const toggleItemRemoval = (index: number) => {
    if (itemsToRemove.includes(index)) {
      setItemsToRemove(itemsToRemove.filter(i => i !== index)); // Unselect the item if already selected
    } else {
      setItemsToRemove([...itemsToRemove, index]); // Select item for removal
    }
  };

  const handleSaveChanges = () => {
    if (!dontAskAgain) {
      setShowDialog(true); // Show dialog the first time if "Don't ask again" isn't checked
    } else {
      saveChanges(); // Directly save if "Don't ask again" is checked
    }
  };

  const saveChanges = () => {
    // Dispatch the array of selected item indices for removal
    dispatch(removeItems(itemsToRemove)); // Dispatch the indices to be removed
    setEditMode(false); // Exit edit mode after saving
    setItemsToRemove([]); // Clear selected items
  };

  const handleDialogSave = () => {
    saveChanges();
    setShowDialog(false); // Close dialog after saving
  };

  const handleDialogCancel = () => {
    setShowDialog(false); // Close dialog without saving
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDontAskAgain(e.target.checked));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Item List</h1>

      {/* Items list */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => editMode && toggleItemRemoval(index)} // Allow selection for removal in edit mode
            className={`flex justify-between items-center bg-white shadow-md p-4 rounded-lg ${
              itemsToRemove.includes(index) ? 'bg-red-100' : ''
            }`} // Highlight selected items
          >
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>

      {/* Edit mode controls */}
      {!editMode && (
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}

      {editMode && (
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-4">Are you sure you want to remove these items?</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="dontAskAgain"
              className="mr-2"
              checked={dontAskAgain}
              onChange={handleCheckboxChange}
            />
             <label htmlFor="dontAskAgain" className="text-gray-700">
              Don&apos;t ask again
            </label>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleDialogSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={handleDialogCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
