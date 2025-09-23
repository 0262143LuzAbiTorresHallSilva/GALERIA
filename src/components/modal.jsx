export default function Modal({ modal, setModal, children}) {
    if (modal) {
        return (
            <div className='modal-overlay' onClick={() => setModal(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className = "modal-close " onClick = {() => setModal(false)}>
                        x
                    </button>
                    {children}
                </div>
            </div>
        )
    }
}