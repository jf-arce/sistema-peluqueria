"use client";
import { COLORS } from '@/constants/colors';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'quick-ui-components';

export const AboutSection = () => {
  return (
    <section className="flex gap-10">
    <div className="flex flex-col flex-1 justify-center">
      <h1 className="text-4xl font-bold mt-10">Sobre nosotros</h1>
      <p className="text-lg mt-4">
        En BarberLP, no solo cortamos pelo, creamos estilo. Nuestro equipo de barberos expertos está dedicado a ofrecerte la mejor experiencia de corte y cuidado personal. Con años de experiencia y una pasión por la estética, estamos aquí para ayudarte a lucir y sentirte increíble.
      </p>
      <div className="flex mt-10">
        <Button 
          asChild
          radius="sm"
          colorBg={COLORS.primary}
          colorText="black"
          pulse={false}
          size="md"
        >
          <Link href="/">
            Conoce más
          </Link>
        </Button>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <Image 
        src="/images/about-main.webp"
        alt="Barber"
        width={800}
        height={512}
        className="object-cover w-full h-96 mt-10 rounded-xs"  
      />
    </div>
  </section>
  )
}
