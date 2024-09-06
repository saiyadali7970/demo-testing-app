// DialogView.tsx
import React from 'react';
import CheckboxView from './CheckboxView';

interface DialogViewProps {
  showDialog: boolean;
  dontAskAgain: boolean;
  onSave: () => void;
  onCancel: () => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DialogView: React.FC<DialogViewProps> = ({
  showDialog,
  dontAskAgain,
  onSave,
  onCancel,
  onCheckboxChange,
}) => {
  if (!showDialog) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">
        Are you sure you want to remove these items?
      </h2>
      <CheckboxView checked={dontAskAgain} onChange={onCheckboxChange} />
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onSave}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DialogView;
