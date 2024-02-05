import './NavBar.css';

export default function NavBar({PageName, PageLink}) {
    return (
        <div className="NavBar_parent">
            <div className="NavBar_label_section">
                <label className='NavBar_nameLabel'>HERMES<span>/</span></label>
                <label>{PageName}</label>
                {PageLink}
            </div>

            <div className="NavBar_navs">
                
                <button className='NavBar_modeBtn'>Mode</button>
            </div>
        </div>
    )
}