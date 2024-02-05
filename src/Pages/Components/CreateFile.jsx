import { useState } from "react";
import './CreateFile.css';


const OpenMenu = ({closeMenu, getValue, inputValue, createNewFile}) => {

    return (
        <div className="Menu">
            <input type="text" placeholder="enter file name.."
             onChange={getValue} value={inputValue}
             className="fileInput"
             />
            <section className="btn_section">
                <button onClick={createNewFile} className="btn">Create</button>
                <button onClick={closeMenu} className="btn">Cancel</button>
            </section>

        </div>
    )
}

export default function NewFile({getValue, inputValue, createNewFile}) {

    const [isSelected, setisSelected] = useState(false);

    const openInput = () => {setisSelected(!isSelected)};

    return (
        <div>
            {
                isSelected?
                <OpenMenu 
                closeMenu={openInput} 
                getValue={getValue} 
                inputValue={inputValue}
                createNewFile={createNewFile}
                />
                :
                <button onClick={openInput} className="toggle">New File</button>
            }
        </div>
    )
}