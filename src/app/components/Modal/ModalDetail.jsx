import './ModalDetail.css';

export const ModalDetail = ({ date, field, time, price, detailModalIsOpen, closeModal, detailModalRef, crossCloseRef }) => {
  
  return (
    <div className={`modal-container ${detailModalIsOpen && 'open'}`} onClick={closeModal}>
      <div className="modal-content" ref={detailModalRef}>
        <div className="modal-header">
          <h2>Detalles de horario</h2>
          <div className="cross-close" onClick={closeModal} ref={crossCloseRef}>
            x
          </div>
        </div>
        <div className='modal-body'>
          <div className='extra-detail'>
            <span>{date}</span>
            <span>{field}</span>
            <span>{time.start} a {time.end} hs</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};