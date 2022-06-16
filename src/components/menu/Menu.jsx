
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="src/components/menu/Menu#intro" data-text="Home">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="src/components/menu/Menu#CV" data-text="Experience">Experience</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="src/components/menu/Menu#projects" data-text="Projects">Projects</a>
        </li>
        {/*<li onClick={()=>setMenuOpen(false)}><a href="src/components/menu/Menu#contact" data-text="Contact">Contact</a></li>*/}
      </ul>
    </div>

  );
}