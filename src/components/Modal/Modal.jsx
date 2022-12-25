import "./Modal.scss";
import cross from "../../Images/icon/cross.svg";

export const Modal = ({ open, setOpen, children }) => {
  return (
    <div
      className={open ? "modal active" : "modal"}
      onClick={() => setOpen(false)}
    >
      <div
        className={open ? "modal__content active" : "modal__content"}
        onClick={(event) => event.stopPropagation()}
      >
        <img onClick={() => setOpen(false)} src={cross} alt="" />
        <div>{children}</div>
      </div>
    </div>
  );
};