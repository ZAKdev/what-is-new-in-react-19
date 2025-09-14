import { JSX, useEffect, useState } from 'react';
import getUserApi, { IUser } from './userData';

const UsersList = (): JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        const users = await getUserApi;
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <h2 className="subtitle">Users List</h2>
            {users.map((user) => {
                return (
                    <div className='card' key={user.id}>
                        <div className='card-title'>{user.name}</div>
                        <div>{user.address}</div>
                    </div>
                );
            })}
        </div>
    )
};

export default UsersList;
