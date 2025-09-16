export interface IUser {
    id: string;
    name: string;
    address: string;
}

const usersData: IUser[] = [
    {
        id: "001",
        name: "John",
        address: "Munich, Germany",
    },
    {
        id: "002",
        name: "Alex",
        address: "Karlsruhe, Germany",
    },
];

export const getUserApi = new Promise<IUser[]>((resolve) =>
    setTimeout(() => {
        resolve(usersData);
    }, 4000)
);

export default getUserApi;
