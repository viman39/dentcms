import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <div className="header">
                <button>LOGO</button>
                <div>
                    <button>Programeaza-te</button>
                    <button>Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
