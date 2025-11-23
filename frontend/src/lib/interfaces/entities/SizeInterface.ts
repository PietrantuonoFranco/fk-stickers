import PurchaseDetail from './PurchaseDetailInterface';

export default interface Size {
    id: number;
    name: string;
    description: string;
    price: number;
    purchaseDetails?: PurchaseDetail[];
}