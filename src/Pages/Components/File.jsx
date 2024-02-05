import { Link } from "react-router-dom";
import fileIcon from '../assets/fileIcon.png';
import { useState } from "react";
import './File.css';

function RenameMenu({ closeRename, newValue, setnewValue, getnewValue}) {
    return (
        <div>
            <input 
            type="text" 
            placeholder="new name..." 
            value={newValue}
            onChange={setnewValue}
            className="fileInput renameInput"
            />
            <div>
                <button onClick={getnewValue} className="options_btn">Ok</button>
                <button onClick={closeRename} className="options_btn del">cancel</button>
            </div>
        </div>
    )
}



function Xtra_Options({unshowMenu, newValue, setnewValue, getnewValue, deleteFile}) {
    const [renameIsOpen, setrenameIsOpen] = useState(false);

    const closeRename = () => {setrenameIsOpen(!renameIsOpen)};


    return (

        <div className="file_xtraoptions_Menu">
            <div>
                {
                    renameIsOpen?
                    <RenameMenu
                    newValue={newValue}
                    setnewValue={setnewValue}
                    getnewValue={getnewValue}
                    closeRename={closeRename} 
                    />
                    :
                    <div>
                        <div>
                            <button onClick={unshowMenu}>Close</button>
                        </div>
                        <button className="options_btn" onClick={closeRename}>Rename</button>
                        <button className="options_btn del" onClick={deleteFile}>Delete</button>
                    </div>
                }
            </div>
            {/* 
            <div>
                <button onClick={unshowMenu}>Close</button>
            </div>
            <button className="options_btn" onClick={closeRename}>Rename</button>
            <button className="options_btn del">Delete</button>  
            */}          
        </div>
        
    )
}



export default function File({ file_name, newValue, setnewValue, getnewValue , deleteFile, selectFile, index}) {
    const [isOpen, setIsOpen] = useState(true);

    const showMenu = () => {setIsOpen(!isOpen)};


    return (
        <div className="file" onClick={selectFile}>
            <div className="file_Icon">
                <img src={fileIcon} className="fileIcon_png"/>
            </div>
            <Link to={`/${file_name}`}>{file_name}</Link>
            <div>
                {
                    isOpen?
                    <button className="file_xtra_options" onClick={showMenu}>...</button>
                    :
                    <Xtra_Options
                    newValue={newValue}
                    setnewValue={setnewValue}
                    getnewValue={getnewValue}
                    unshowMenu={showMenu}
                    deleteFile={deleteFile}
                     />
                }
            </div>
        </div>
    )
}
