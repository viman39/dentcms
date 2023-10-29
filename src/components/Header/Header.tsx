import { mockUser } from '../../__mocks__/userMock';
import { useAuthContext } from '../../context/UserContext';
import { Button } from '../common/Button/Button';

const Header: React.FC = () => {
    const { user, setUser } = useAuthContext();

    return (
        <header className="app-header">
            {!user && <Button onClick={() => setUser(mockUser)}>Login</Button>}
            {user && <Button onClick={() => setUser(null)}>Logout</Button>}
        </header>
    );
};

export default Header;
