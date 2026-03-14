import { requireGuest } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasActiveSession = await requireGuest();
  
  if (hasActiveSession) {
    redirect('/dashboard');
  }
  
  return children;
}
