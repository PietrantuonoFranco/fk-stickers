import PurchaseDetail from './PurchaseDetailInterface';
import User from './UserInterface';

export default interface Purchase {
    id: number;
    total: number;
    timestamp: string | Date;
    userId?: number;
    user?: User;
    details?: PurchaseDetail[];
}