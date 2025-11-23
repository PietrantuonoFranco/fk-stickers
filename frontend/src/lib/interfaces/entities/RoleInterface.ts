import User from './UserInterface';

export default interface Role {
    id: number;
    name: string;
    users?: User[];
}