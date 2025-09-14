import { JSX, use, Suspense } from 'react';
import getUserApi, { IUser } from './userData';

const UsersList = (): JSX.Element => {
    const users = use<IUser[]>(getUserApi);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div className='card' key={user.id}>
                        <div className='card-title'>{user.name}</div>
                        <div>{user.address}</div>
                    </div>
                );
            })}
        </div>
    );
}

const UsersContainer = (): JSX.Element => {
    return (
        <>
            <h2 className="subtitle">Users List</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UsersList/>
            </Suspense>
        </>
    )
}

export default UsersContainer;
