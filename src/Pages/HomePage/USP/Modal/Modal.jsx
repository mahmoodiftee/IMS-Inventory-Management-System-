import { Player } from "@lottiefiles/react-lottie-player";

const Modal = ({ title, des, json }) => {
    return (
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <Player loop src={json} className="h-[170px] w-[80%] m-auto"></Player>
          <h3 className="font-bold text-center text-lg">{title}</h3>
          <p className="py-4 text-center">{des}</p>
          <div className="modal-action">
            <form className="mx-auto" method="dialog">
              <button className="btn mx-auto" onClick={() => document.getElementById("my_modal_5").close()}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  };
  export default Modal;
  