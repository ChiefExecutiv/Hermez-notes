import { Editor } from "novel";
import './NewEditor.css'
import { Link } from "react-router-dom";
export default function NewEditor ({file_Key}) {

    return (           
            <div className="Editor">
                <Link to='/'>Back</Link>
                <Editor  
                defaultValue="" 
                className="Novel" 
                storageKey={file_Key} 
                />
            </div>   
    )
}
