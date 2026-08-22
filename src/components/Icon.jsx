import {
  Activity,
  Award,
  Beaker,
  BriefcaseBusiness,
  Cpu,
  Database,
  FileCheck2,
  GitCompare,
  GraduationCap,
  Layers,
  ScrollText,
  Scale,
  Settings,
  ShieldCheck,
  ClipboardList,
  Target,
  Trophy,
  Users,
  Workflow,
} from 'lucide-react'

// Maps the string icon names used in data/site.js to lucide components.
const ICONS = {
  Activity,
  Award,
  Beaker,
  BriefcaseBusiness,
  Cpu,
  Database,
  FileCheck2,
  GitCompare,
  GraduationCap,
  Layers,
  ScrollText,
  Scale,
  Settings,
  ShieldCheck,
  ClipboardList,
  Target,
  Trophy,
  Users,
  Workflow,
}

export function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = ICONS[name] || Activity
  return <Cmp className={className} />
}

export default Icon
