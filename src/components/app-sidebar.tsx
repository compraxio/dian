'use client';

import { Prisma } from '../../generated/prisma/client';
import Link from 'next/link';
import { requireAuth } from '@/lib/auth';
import { usePathname, useRouter } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaHandsHoldingChild } from 'react-icons/fa6';
import { MdAssignment, MdAdd, MdSettings, MdLogout } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { TbFileDescriptionFilled } from 'react-icons/tb';
import { FaFolder } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';

import { useEffect, useState } from 'react';
import { sileo } from 'sileo';
import { Logouth } from '@/app/actions/auth/logount';

const navItems = [
  {
    title: 'Inicio',
    href: '/dashboard',
    icon: IoHome,
  },
  {
    title: 'Borradores',
    href: '#',
    icon: TbFileDescriptionFilled,
  },
  {
    title: 'Mis Archivos',
    href: '#',
    icon: FaFolder,
  },
  {
    title: 'Formularios',
    href: '/dashboard/formularios',
    icon: MdAssignment,
  },
];

type usuario = Prisma.usuarioGetPayload<object>;

export function AppSidebar() {
  const pathname = usePathname();
  const isDashboardFormRoute = pathname.startsWith('/dashboard/formularios/formulario500');
  const [usuario, setUsuario] = useState<usuario>();
  const router = useRouter();
  useEffect(() => {
    async function obtenerUsuario() {
      const usuario = await requireAuth();

      setUsuario(usuario);
    }
    obtenerUsuario();
  }, []);

  return (
    <>
      {!isDashboardFormRoute && (
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                <FaHandsHoldingChild size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">Simulador DIAN</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="px-2 mb-1">Navegación</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link href={item.href} className="flex items-center gap-3">
                            <item.icon size={25} />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarSeparator />

          <SidebarFooter>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-2 px-2">
                  <Avatar className="size-9">
                    {usuario?.avatar ? (
                      <AvatarImage src={usuario?.avatar} alt={usuario?.nombre_usuario} />
                    ) : (
                      <FaRegUser size={25} />
                    )}
                    {usuario?.avatar && <AvatarFallback>JD</AvatarFallback>}
                  </Avatar>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-semibold">{usuario?.nombre_usuario}</span>
                    <span className="text-xs text-muted-foreground">{usuario?.rol}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/configuraciones"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MdSettings size={18} />
                    <span>Configuración</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={(event) => {
                    event.preventDefault();
                    sileo.promise(
                      async () => {
                        await Logouth();
                        router.replace('/')
                        return { ok: true, message: 'Sesión cerrada correctamente' };
                      },
                      {
                        loading: { title: 'Cerrando sesión' },
                        success: (res: { ok: boolean; message: string }) => {
                          return {
                            title: res.message,
                            description: (
                              <div className="flex flex-col items-center justify-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {`Adiós ${usuario?.nombre_usuario ?? 'usuario'}, te esperamos de regreso`}
                                </span>
                              </div>
                            ),
                          };
                        },
                        error: (err: unknown) => {
                          const message =
                            err instanceof Error ? err.message : 'Ocurrió un error inesperado';
                          return {
                            title: 'Error al cerrar sesión',
                            description: message,
                          };
                        },
                      },
                    );
                  }}
                  className="text-destructive focus:text-destructive cursor-pointer"
                >
                  <MdLogout size={18} />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="p-4 mt-auto">
              <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-sm">
                <MdAdd size={25} />
                <span>Nuevo Trámite</span>
              </button>
            </div>
          </SidebarFooter>
        </Sidebar>
      )}
    </>
  );
}
