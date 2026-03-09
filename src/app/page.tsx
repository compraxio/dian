import { Avatares } from '@/components/Avatares';
import Link from 'next/link';
import {
  MdAccountTree,
  MdDevices,
  MdEditDocument,
  MdFolderShared,
  MdMenuBook,
  MdOutlineVerifiedUser,
} from 'react-icons/md';
import { HiViewGrid } from 'react-icons/hi';
import { HiRocketLaunch } from 'react-icons/hi2';

import { FaShieldAlt } from 'react-icons/fa';

import prisma from '../lib/prisma';
import { FaBoltLightning, FaHandsHoldingChild, FaLockOpen, FaShare } from 'react-icons/fa6';

export default async function Home() {
  const conteo_usuarios = await prisma.usuario.count();
  return (
    <>
      {/*Primera seccion */}
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-24 " id="inicio">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Simulador DIAN: Domina tus trámites
                <span className="text-primary"> sin riesgos</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                Practica el diligenciamiento de formularios tributarios en un entorno seguro y
                controlado. Diseñado para estudiantes y profesionales que buscan perfeccionar su
                técnica sin temor a sanciones.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/registro"
                className="flex min-w-40 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform"
              >
                Comenzar ahora
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <Avatares />
              <span>Más de {conteo_usuarios} usuarios ya están practicando</span>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>
            <div
              className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden aspect-4/3 flex items-center justify-center"
              data-alt="Interfaz digital de software tributario moderno"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjdtdx5aYJbF9oad2oyKU_wN_StuKDaigrAhVq3VGN3mkQ4lC5Jc2FgTDXUL-YkzDwytTmQL7Coc1WQSRBIwOrY9qttzpsJN61hZgH7Ck6B9thbZ94-zptEDepEDLpBIr9Vkv2hiR0rkSn2OWqvLk53aQB8_YtUgEZFeylL92J5sYaUYlibCtMRZYYqGqrHn_5lW5l_B1ZM1_2wxlPOj7-kmDZb4RK2gegGeQntep1YB7Uv195qNFEsQYxjIv4-JpBu_cOtEqbkIA')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* <!-- Decoracion --> */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <span className=" text-white">
                    <MdOutlineVerifiedUser size={25} />
                  </span>
                  <span className="text-white font-medium text-sm">
                    Entorno simulado de la DIAN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Segunda seccion */}
      <section
        className="px-6 md:px-20 lg:px-40 py-20 bg-slate-50 dark:bg-slate-900/50"
        id="que-es"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-black">
            ¿Qué es el simulador?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Es una herramienta pedagógica de vanguardia que replica con precisión la experiencia
            real de la plataforma Muisca de la DIAN. Nuestra misión es democratizar el conocimiento
            tributario, permitiendo que cualquier persona aprenda a navegar los sistemas oficiales
            sin el estrés de cometer errores legales o financieros reales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-left flex flex-col gap-4 ">
              <span className=" text-primary text-4xl">
                <FaShieldAlt />
              </span>
              <h3 className="font-bold text-xl">Práctica Segura</h3>
              <p className="text-slate-500 text-sm">
                Realiza pruebas ilimitadas con datos ficticios sin consecuencias legales.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-left flex flex-col gap-4">
              <span className=" text-primary text-4xl">
                <MdMenuBook />
              </span>
              <h3 className="font-bold text-xl">Aprendizaje Guiado</h3>
              <p className="text-slate-500 text-sm">
                Tutoriales integrados que explican cada casilla y concepto técnico.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-left flex flex-col gap-4">
              <span className=" text-primary text-4xl">
                <MdDevices />
              </span>
              <h3 className="font-bold text-xl">Entorno Real</h3>
              <p className="text-slate-500 text-sm">
                Interfaz diseñada para ser visualmente amigable con el usuario.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Tercera seccion */}
      <section className="px-6 md:px-20 lg:px-40 py-20" id="beneficios">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black">
              Beneficios de usar nuestra plataforma
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-3xl">
                  <FaLockOpen />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Practica sin riesgo</h3>
              <p className="text-slate-500 leading-relaxed">
                Experimenta con diferentes escenarios contables y tributarios con total tranquilidad
                mental.
              </p>
            </div>
            <div className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-3xl">
                  <MdEditDocument />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Aprender diligenciamiento</h3>
              <p className="text-slate-500 leading-relaxed">
                Domina el llenado de secciones técnicas complejas como patrimonio, rentas y
                deducciones.
              </p>
            </div>
            <div className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-3xl">
                  <MdAccountTree />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Entender estructura</h3>
              <p className="text-slate-500 leading-relaxed">
                Comprende la lógica sistémica detrás de los impuestos nacionales y su flujo de
                información.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Cuarta seccion */}
      <section
        className="px-6 md:px-20 lg:px-40 py-20 bg-dark text-white rounded-[2rem] mx-4 mb-20 overflow-hidden relative"
        id="caracteristicas"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-black">Características Principales</h2>
            <p className="text-slate-400 text-lg">
              Nuestra tecnología está diseñada para ofrecerte la experiencia más cercana a la
              realidad profesional.
            </p>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-primary rounded-lg text-white">
                  <HiViewGrid size={25} />
                </div>
                <div>
                  <h4 className="font-bold text-lg italic">Formularios organizados</h4>
                  <p className="text-slate-400">
                    Acceso rápido a formularios 500, 510 siempre actualizados.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-primary rounded-lg text-white">
                  <FaBoltLightning size={25} />
                </div>
                <div>
                  <h4 className="font-bold text-lg italic">Experiencia real</h4>
                  <p className="text-slate-400">
                    Validaciones en tiempo real que te alertan sobre errores matemáticos o de lógica
                    tributaria.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-primary rounded-lg text-white">
                  <MdFolderShared size={25} />
                </div>
                <div>
                  <h4 className="font-bold text-lg italic">Gestión de documentos</h4>
                  <p className="text-slate-400">
                    Guarda tus borradores, descarga PDFs de práctica y mantén un historial de tus
                    ejercicios.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 aspect-square flex flex-col justify-center items-center text-center gap-2">
                <span className="text-4xl font-black text-primary">2</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  Formularios
                </span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 aspect-square flex flex-col justify-center items-center text-center gap-2">
                <span className="text-4xl font-black text-primary">24/7</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Disponible</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 aspect-square flex flex-col justify-center items-center text-center gap-2">
                <span className="text-4xl font-black text-primary">100%</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Cloud</span>
              </div>
              <Link
                href="/auth/registro"
                className="bg-primary p-6 rounded-2xl shadow-xl shadow-primary/20 aspect-square flex flex-col justify-center items-center text-center gap-2"
              >
                <span className="material-symbols-outlined text-4xl">
                  <HiRocketLaunch size={45} />
                </span>
                <span className="text-xs uppercase tracking-widest text-white font-bold">
                  ¡Empieza ya!
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Footer */}
      <footer className="px-6 md:px-20 lg:px-40 py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="text-2xl font-bold">
              <FaHandsHoldingChild size={45} />
            </span>
            <span className="text-slate-900 dark:text-slate-100 font-extrabold">
              Simulador DIAN
            </span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a className="hover:text-primary transition-colors" href="#">
              Términos
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Privacidad
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contacto
            </a>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white cursor-pointer transition-all">
              <span className="text-sm">
                <FaShare />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
          © 2026 Simulador DIAN Educativo. Todos los derechos reservados. Esta es una plataforma
          educativa independiente.
        </div>
      </footer>
    </>
  );
}
