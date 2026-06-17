import { connection } from "next/server";
import { getCourses } from "@/actions/courses";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default async function Home() {
  await connection();
  const { courses, error } = await getCourses();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050608] text-white">
      <Sidebar />
      <main className="relative mx-auto min-h-screen w-full max-w-7xl px-5 pb-28 pt-8 md:pl-32 md:pr-8 md:pt-10 lg:pl-76 lg:pr-10">
        <span className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(167,139,250,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="relative">
          <BentoGrid courses={courses} errorMessage={error} />
        </div>
      </main>
    </div>
  );
}
