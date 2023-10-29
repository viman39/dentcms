import { mockUser } from '../../__mocks__/userMock';
import { useAuthContext } from '../../context/UserContext';
import { Button } from '../common/Button/Button';

const Header: React.FC = () => {
    const { user, loginUser, logoutUser } = useAuthContext();

    return (
        <header className="app-header">
            {!user && <Button onClick={() => loginUser(mockUser)}>Login</Button>}
            {user && <Button onClick={() => logoutUser()}>Logout</Button>}
        </header>
    );
};

export default Header;
