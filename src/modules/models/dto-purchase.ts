export interface PurchaseDTO {
    id?: string;
    student_id: string;
    course_id: number[];
    purchase_method: string;
    purchase_price: number;
} 