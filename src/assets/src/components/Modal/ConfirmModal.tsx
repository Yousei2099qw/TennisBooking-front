type ConfirmModalProps = {
  show: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal(props: ConfirmModalProps) {

  const { show, title, message, confirmText, cancelText, onConfirm, onCancel } = props;

  if (!show) return null;

  return (
    <>
      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">{title}</h5>
              <button className="btn-close" onClick={onCancel} />
            </div>

            <div className="modal-body">
              <p>{message}</p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onCancel}>
                {cancelText}
              </button>
              <button className="btn btn-primary" onClick={onConfirm}>
                {confirmText}
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
``