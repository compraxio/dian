import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const session = req.cookies.get('session_id');

  if (!session) {
    return NextResponse.redirect(new URL('/auth/inicio_de_sesion?error=no_autorizado', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/dashboard'],
};
