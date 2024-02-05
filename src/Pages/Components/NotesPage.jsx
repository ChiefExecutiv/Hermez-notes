import File from "./File";
import NewFile from "./CreateFile";
import NavBar from "./NavBar";
import './NotesPage.css';
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NotesPage({MyFiles, getValue, inputValue, createNewFile,   newValue, setnewValue, getnewValue}) {

    const [selectedFile, setselectedFile] = useState(null);

    const selectFile = (index) => {
        setselectedFile(index === selectFile? null : index)
        console.log("Selected File: ",selectedFile)
    }

    const deleteFile = (index) => {
        //alert("File deletion");
        console.log("Deleting file at index:", index)
        MyFiles.splice(index, 1)
    }
    

    const AllFiles = MyFiles.map((file, index) => (
        <File file_name={file}
        key={index} 
        index={index}
        newValue={newValue}
        setnewValue={setnewValue}
        getnewValue={getnewValue}
        deleteFile={() => deleteFile(index)}
       selectFile={() => selectFile(index)}  // Ensure it's passed correctly
        //selectFile={selectFile}
        />
    ))

    return (
        <div className="Notes_Page">
            <header className="Header">
                <NavBar PageName="Notes" PageLink={<Link to='/todo' className="Nav_Link">Tasks</Link>}/>
                {/*<Link to='/todo'>To do</Link>*/}
            </header>

            {AllFiles}
            <NewFile getValue={getValue} inputValue={inputValue} createNewFile={createNewFile}/>
        </div>
    )
}