import React, { Component } from 'react'
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ProductCard } from './product-card'

interface ProductDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    products: any
}

export function ProductDisplay({ products }: ProductDisplayProps) {
    const topFourProducts = products["items"].sort((a: { ranking: number }, b: { ranking: number }) => a.ranking - b.ranking).slice(0, 4);
    return (
        <div
            className="border-none p-0 outline-none"
        >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        人气产品
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        购买最多
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {!!topFourProducts && topFourProducts.map((product: any) => (
                            <ProductCard
                                key={product.id}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                                product={product} />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            {(products["id"] !== "mostpopularproducts" && products["id"] !== "mostdiscountproducts") &&
                <>
                    <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            系列所有
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            所有其他产品
                        </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                        <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                                {!!products && !!products["items"] && [...products["items"]].map((product: any) => (
                                    <ProductCard
                                        key={product.id}
                                        className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={330}
                                        product={product} />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </>}
        </div>
    )
}
