export interface CourseDTO {
  id?: number;
  course_name: string;
  course_price: number;
  course_description: string;
  course_offer: number;
  course_time?: number;
  teacher_id: string;
}