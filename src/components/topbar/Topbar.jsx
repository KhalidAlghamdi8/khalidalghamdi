import './topbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from "@material-ui/icons/GitHub";
import {Button} from "@material-ui/core";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="src/components/topbar/Topbar#intro" className="logo">
                        Khalid
                    </a>

                    <div className='itemContainer'>
                        <Button href="https://www.linkedin.com/in/khalidalghamdi08/"><LinkedInIcon/> </Button>
                        <Button href="https://github.com/KhalidAlghamdi8"><GitHubIcon/> </Button>
                        <Button href="mailto:khalid.alghamdi1055@gmail.com"><EmailIcon/> </Button>
                    </div>
                </div>
                <div className="right">
                    <div className="drop" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}