

interface ConfirmationModalProps {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    message,
    onConfirm,
    onCancel,
}) => {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="modal-content bg-white p-4 rounded-md">
                <p className="font-bold text-xl pb-2">{message}</p>
                <div className="flex items-center justify-center p-2 gap-2 font-semibold">
                    <button onClick={onConfirm} className="py-2 px-4 bg-rose-500 text-white rounded-full">Confirm</button>
                    <button onClick={onCancel} className="py-2 px-4 bg-black text-white rounded-full">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;