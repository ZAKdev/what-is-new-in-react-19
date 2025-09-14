import { JSX, use, createContext } from 'react';
interface User {
    name: string;
    address: string;
}

const UserContext = createContext<User>({ name: '', address: '' });

const UserProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const userData: User = {
        name: "John",
        address: "Munich, Germany"
    };

    return (
        <UserContext value={userData}>
            {children}
        </UserContext>
    );
};

const UseContext = (): JSX.Element => {
    const user = use(UserContext);

    return (
        <div className="section">
            <div className="text">
                <strong>Name:</strong> {user.name}
            </div>
            <div className="text">
                <strong>Address:</strong> {user.address}
            </div>
        </div>
    );
};

export default (): JSX.Element => <UserProvider><UseContext/></UserProvider>;
