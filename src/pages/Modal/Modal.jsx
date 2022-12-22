import './Modal.scss';
import cross from '../../components/icon/cross.svg';
import {useState} from "react";

export const Modal = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className="App">
            <button
                onClick={() => setOpen(true)}
                className="open-modal-btn"
            >
                ✨ Открыть окно
            </button>
            <div className={`overlay animated${open ? 'show' : ''}`} onClick={() => setOpen(false)}>
                <div onClick={(e) => e.stopPropagation()} className="modal">
                    <img onClick={() => setOpen(false)} src={cross} alt=""/>
                    <p>
                        Accusamus ad alias aperiam beatae dicta ea, nisi officia quia quis
                        ut! Illum iste necessitatibus odit perspiciatis quia voluptatibus.
                        Beatae ducimus nisi officia omnis provident. Consequuntur explicabo
                        odio voluptatibus.A consequuntur distinctio earum eum harum hic libero
                        maxime nesciunt quam sunt! Ab, asperiores atque autem doloremque expedita id ipsum magnam
                        neque nisi officia pariatur porro praesentium recusandae repellat reprehenderit soluta ullam
                        velit voluptatum! Aut facilis fugit molestias, necessitatibus perspiciatis ratione voluptatem!
                        Vel?
                    </p>
                </div>
            </div>
        </div>
    )
}
