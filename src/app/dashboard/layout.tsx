import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Header } from '@/components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <Header lugar="dashboard" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
