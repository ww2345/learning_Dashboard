import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Course, CoursesResult } from "@/types/course";

export async function getCourses(): Promise<CoursesResult> {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("courses")
      .select("id,title,progress,icon_name,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);

      return {
        courses: [],
        error: "Could not load courses from Supabase.",
      };
    }

    return {
      courses: (data ?? []) as Course[],
      error: null,
    };
  } catch (error) {
    console.error(error);

    return {
      courses: [],
      error: "Supabase is not configured yet.",
    };
  }
}
