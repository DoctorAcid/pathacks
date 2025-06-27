"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Wrapper from "@/layout/Wrapper";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="w-full">
        <main className="w-full flex flex-col items-center">
          <section className="relative w-full flex flex-col items-center">
            <div className="absolute bottom-0 w-full h-[1080px]">
              <Image
                fill
                objectFit="cover"
                objectPosition="bottom"
                alt="hero-bg"
                src="/assets/images/bgs/hero/bg-hero.jpg"
                quality={100}
              />
            </div>
            <div className="z-10 w-full p-16 flex flex-col gap-4">
              <h1>{t("home-hero-title")}</h1>
              <p>{t("home-hero-description")}</p>
              <PrimaryButton text={t("button-join")} className="border-[1px]" />
            </div>
            <div className="w-full flex px-16 justify-center">
              <Image
                width={1440}
                height={873}
                alt="hero-image"
                src="/assets/images/banners/hero/laptop.png"
                quality={100}
                className="z-10"
              />
            </div>
          </section>
          <section className="relative w-full flex flex-col items-center">
            <div className="w-full flex flex-col gap-4 p-16">
              <h3>{t("home-intro-title")}</h3>
              <p>{t("home-intro-description")}</p>
            </div>
          </section>
        </main>
      </div>
    </Wrapper>
  );
}
