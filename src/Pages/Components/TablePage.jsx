import { Link } from "react-router-dom";
import MyTable from "./Table";
import NavBar from "./NavBar";
import './TablePage.css';

export default function TablePage() {
    return (
        <div className="TablePage">
            <header>
                {/*<nav className="NavBar">
                    <Link to='/'>Back</Link>
                </nav>*/}
                <NavBar PageName="Tasks" PageLink={<Link to='/' className="Nav_Link">Notes</Link>} />
            </header>
            <h1 style={{fontSize: '2rem', fontWeight: '500'}}>
                Your Tasks 
            </h1>
            <MyTable />
        </div>
    )
}