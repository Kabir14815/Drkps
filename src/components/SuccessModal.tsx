import { FC, useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import './SuccessModal.css'

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const SuccessModal: FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = "Success!",
  message = "Your message has been sent successfully."
}) => {
  // Clear scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-scaleIn" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-body">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={64} className="success-icon" />
          </div>
          <h2 className="modal-title">{title}</h2>
          <p className="modal-message">{message}</p>
          <button className="btn btn-primary modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
