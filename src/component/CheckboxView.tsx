// CheckboxView.tsx
import React from 'react';

interface CheckboxViewProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxView: React.FC<CheckboxViewProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id="dontAskAgain"
        className="mr-2"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="dontAskAgain" className="text-gray-700">
        Dont ask again
      </label>
    </div>
  );
};

export default CheckboxView;
