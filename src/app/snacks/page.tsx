"use client"

import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Sidebar } from "@/components/sidebar"
import { top_snacks, snacks_all_category } from "@/lib/data"
import { useEffect, useState } from "react"
import { ProductDisplay } from "@/components/snacks/product-display"

export const metadata: Metadata = {
    title: "吃吃派对",
    description: "",
}

export default function SnacksPage() {
    const [activeMenu, setActiveMenu] = useState("mostpopularproducts");
    let filteredProducts = [...top_snacks, ...snacks_all_category].filter(product => product.id == activeMenu)
    useEffect(() => {
        console.log(activeMenu)
        console.log(filteredProducts)
    }, [activeMenu, filteredProducts])
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row h-12 bg-background font-home justify-between ">
                    <div className="flex flex-row justify-between">
                        <div className="p-3">吃吃派对</div>
                        <Separator orientation="vertical" />
                        <div className="p-3">
                            零食
                        </div>
                    </div>
                    <div className="p-3">
                        button to go back
                    </div>

                </div>

                <div className="flex flex-row bg-background border-t h-full ">
                    <Sidebar category={snacks_all_category} activeMenu={activeMenu} setActiveMenu={setActiveMenu} className="hidden sm:block sm:w-20vw h-full" />
                    <div className="flex flex-col sm:w-80vw sm:border-l h-full min-h-screen">
                        <div className="h-full px-4 py-6 lg:px-8">
                            {filteredProducts.length > 0 && <ProductDisplay products={filteredProducts[0]} />}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}