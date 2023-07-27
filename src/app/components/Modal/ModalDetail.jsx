import './ModalDetail.css';
import './ModalLogin.css';

export const ModalDetail = ({ date, field, time, price, detailModalIsOpen, closeModal, detailModalRef, crossCloseRef }) => {
  
  return (
    <div className= { `modal-container ${detailModalIsOpen && 'open'}` } onClick={ closeModal }>
        <div className="modal-content" ref= { detailModalRef }>
            <h2>Detalles de horario</h2>
            <div className='extra-detail'>
                <span>{date}</span>
                <span>{field}</span>
                <span>{time.start} a {time.end} hs</span>
                <span>${price}</span>
            </div>
            <div className="cross-close" onClick={closeModal} ref={crossCloseRef}>
                x
            </div>
        </div>
    </div>
  )
}