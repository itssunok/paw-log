import React from 'react';

interface CareTaskButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const CareTaskButton: React.FC<CareTaskButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="care-task-button">
            {label}
        </button>
    );
};

export default CareTaskButton;
