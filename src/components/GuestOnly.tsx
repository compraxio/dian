import { requireGuest } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface GuestOnlyProps {
  children: ReactNode;
}

export default async function GuestOnly({ children }: GuestOnlyProps) {
  const hasActiveSession = await requireGuest();
  
  if (hasActiveSession) {
    redirect('/dashboard');
  }
  
  return <>{children}</>;
}
