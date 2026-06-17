create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.courses enable row level security;

drop policy if exists "Allow public read access to courses" on public.courses;

create policy "Allow public read access to courses"
on public.courses
for select
to anon
using (true);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'BrainCircuit'),
  ('Motion Systems with Framer', 64, 'Rocket'),
  ('Supabase Data Workflows', 48, 'Database'),
  ('Interface Architecture', 86, 'Code2');
