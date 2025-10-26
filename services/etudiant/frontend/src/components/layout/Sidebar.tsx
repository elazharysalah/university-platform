import { NavLink } from 'react-router-dom';
import {
  Home,
  UserX,
  FileCheck,
  FileText,
  GraduationCap,
  ClipboardList,
  Briefcase,
  Calendar,
  CreditCard,
  Mail,
  HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/dashboard', icon: Home },
  { name: 'Absences', href: '/absences', icon: UserX },
  { name: "Justificatifs d'absence", href: '/justificatifs', icon: FileCheck },
  { name: 'Documents signés', href: '/documents', icon: FileText },
  { name: 'Notes', href: '/notes', icon: GraduationCap },
  { name: 'Demandes', href: '/demandes', icon: ClipboardList },
  { name: 'PFE', href: '/pfe', icon: Briefcase },
  { name: 'Agenda', href: '/agenda', icon: Calendar },
  { name: 'Paiements', href: '/paiements', icon: CreditCard },
  { name: 'Messagerie', href: '/messagerie', icon: Mail },
  { name: 'Aide', href: '/aide', icon: HelpCircle },
];

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-sidebar">
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border px-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-sidebar-foreground" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-sidebar-foreground">ENSEM</span>
            <span className="text-xs text-sidebar-foreground/80">Espace Étudiant</span>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
