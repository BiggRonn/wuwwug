import { useAuthContext } from '../../contexts/AuthContext';
import "./menu.scss"

export default function Menu( {menuOpen, setMenuOpen}) {
    const { signout } = useAuthContext();
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">afsd</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Github/About</a>
                </li>
                <li onClick={()=>{setMenuOpen(false); signout()}}>
                    <a href="">Log Out</a>
                </li>
            </ul>
            
        </div>
    )
}
