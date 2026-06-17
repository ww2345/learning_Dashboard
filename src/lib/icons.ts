import {
  Activity,
  Bell,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Home,
  LineChart,
  Network,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Rocket,
  Settings,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const courseIcons: Record<string, LucideIcon> = {
  Activity,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  LineChart,
  Network,
  Palette,
  Rocket,
  Sparkles,
  Zap,
};

export const navigationIcons = {
  Activity,
  Bell,
  CalendarDays,
  Home,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
};

export function getCourseIcon(iconName: string): LucideIcon {
  return courseIcons[iconName] ?? BookOpen;
}
