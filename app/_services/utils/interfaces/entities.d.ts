
interface ApiRes {
    data: {
        user: IUser,
        token: string,
    }
}

interface IUser {
    _id: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password?: string;
}

interface IBucket {
    _id: string;
    title: string;
    message_ids: string[];
    creator: IUser;
}

export type { ApiRes, IUser, IBucket };
