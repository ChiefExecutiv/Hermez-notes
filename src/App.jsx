import NewEditor from "./Pages/Components/NewEditor";
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import NotesPage from "./Pages/Components/NotesPage";
import TablePage from "./Pages/Components/TablePage";
import { useEffect, useState } from "react";
export default function App() {

    //const [MyFiles, setMyFiles] = useState([]);

    const [MyFiles, setMyFiles] = useState(() => {
        const storedValues = localStorage.getItem("My_Files")
        if(storedValues === null) return []
        return JSON.parse(storedValues)
    })

    const [inputValue, setinputValue] = useState('');

    //new Code(Renaming) and deleting
    const [newValue, set_newValue] = useState('');
    const [selectedFile, setselectedFile] = useState(null);

    //Local storage
    useEffect(() => {
        localStorage.setItem("My_Files", JSON.stringify(MyFiles),
        [MyFiles])
    });

    const getValue = (e)=> {setinputValue(e.target.value)};

    //new Code(Getting new value)
    const setnewValue = (e) => {set_newValue(e.target.value)};

    function getnewValue() {
       // alert(`new file name ${newValue}`)
       const newFileName = newValue;
       setinputValue(newFileName);
        set_newValue('')
    }


    //Creating new Files from users input
    function createNewFile() {
        let new_file_name = inputValue;

        const newFileArray = [...MyFiles, new_file_name];
        setMyFiles(newFileArray);
        setinputValue('');
    }
//File selection
    const selectFile = (index) => {
        setselectedFile(index === selectFile? null : index)
        console.log("Selected File",selectedFile)
    }

    //delete file
    const deleteFile = (index) => {
        //alert("File deletion");
        console.log("Deleting file at index:", index)
        const newFiles = MyFiles.filter((_, i) => i !== index)
        setMyFiles(newFiles);
        setselectedFile(null)
    }
    

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {MyFiles.map((file) => (
                        <Route key={file} path={`/${file}`} element={<NewEditor file_Key={file} />} />
                    ))}
                    <Route path="/" 
                        element={
                        <NotesPage MyFiles={MyFiles} 
                        getValue={getValue}
                        inputValue={inputValue}
                        createNewFile={createNewFile}

                        newValue={newValue}
                        setnewValue={setnewValue}
                        getnewValue={getnewValue}
                        />
                        } 
                    />
                    <Route path="/todo"
                    element={
                        <TablePage />
                    }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
