interface ShareModalProps {
    isOpen: boolean;
    message: string;
    location: string;
    onCopy: () => void;
    onCancel: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({
    isOpen,
    message,
    location,
    onCopy,
    onCancel,
}) => {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="modal-content bg-white p-5 rounded-md">
                <p className="font-bold text-xl pb-2">{message}</p>
                <p className="text-sm text-gray-500 pb-4">Copy the link below and share it with your friends!</p>
                <input type="text" value={location} readOnly className="w-full bg-gray-100 rounded-md px-4 py-2" />
                <div className="flex items-center justify-center p-2 gap-2 font-semibold">
                    <button onClick={onCopy} className="py-2 px-4 bg-slate-500 text-white rounded-full">Copy Link</button>
                    <button onClick={onCancel} className="py-2 px-4 bg-black text-white rounded-full">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;