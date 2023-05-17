import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import abcimage from '@/public/abcimage.svg'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function IndexPage() {
  return (
    <section className="space-y-6 pt-10 md:pb-8 2xl:pt-16">
        <div className="flex max-w-[64rem] flex-col items-center px-12 md:container">
          <Image src={abcimage} alt="Ilustración sobre salud mental"
            className="xs:w-4/5"
            width={450}
            height={298}
            priority
            />
        </div>
        <div className="flex max-w-[64rem] flex-col items-center gap-4 px-4 text-center md:container sm:gap-5 2xl:gap-6">
          <h1 className="leading-11 flex flex-col text-4xl font-black tracking-tight sm:leading-[1.1em] lg:mt-1 lg:text-6xl lg:leading-[1.1em] 2xl:mt-4 2xl:text-7xl 2xl:leading-tight">
            <span>Cambiá tus pensamientos</span>
            <span>Cambiá tu vida</span>
          </h1>
          <p className="max-w-[620px] text-lg text-muted-foreground sm:text-xl lg:max-w-[800px] 2xl:max-w-[620px]">
            Mejorá tu bienestar emocional con <span className="font-semibold">SelfTalk</span>, una web app basada en el modelo ABC. <br className="hidden lg:inline 2xl:hidden"/>Descubre cómo cambiar tus pensamientos puede mejorar tu vida.
          </p>
        <div className="mt-2 flex gap-4">
          <Link
            href={'/'}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Saber más
          </Link>
          <Link
            href={'/signin'}
            className={buttonVariants({ size: "lg" })}
          >
            Empezar
          </Link>
        </div>
      </div>
    </section>
  )
}
