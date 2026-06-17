export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface CoursesResult {
  courses: Course[];
  error: string | null;
}
