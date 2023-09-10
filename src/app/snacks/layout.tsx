"use client"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "吃吃派对 | 零食",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function SnacksLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="flex flex-col w-min-screen h-min-screen relative mx-0">
        <section>
          {children}
        </section>
      </div>
    </>
  )
}