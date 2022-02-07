import { useAuthContext } from '../../contexts/AuthContext';
import "./menu.scss"

export default function Menu( {menuOpen, setMenuOpen}) {
    const { signout } = useAuthContext();
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="https://github.com/BiggRonn/wuwwug" target="_blank">Github/About</a>
                </li>
                <li onClick={()=>{setMenuOpen(false); signout()}}>
                    <a href="">Log Out</a>
                </li>
            </ul>
            
        </div>
    )
}
