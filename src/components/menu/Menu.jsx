import "./menu.scss"

export default function Menu( {menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro"></a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Github/About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
