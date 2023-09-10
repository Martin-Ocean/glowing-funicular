import React, { Component } from 'react'
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ProductCard } from './product-card'

interface ProductDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    products: any
}

export function ProductDisplay({ products }: ProductDisplayProps) {
    // console.log(products);
    return (
        <div
            className="border-none p-0 outline-none"
        >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Popular Items
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Top picks for you.
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {!!products && products.map((product: any) => (
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
            <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Made for You
                </h2>
                <p className="text-sm text-muted-foreground">
                    Your personal playlists. Updated daily.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                {/* <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {madeForYouAlbums.map((album: { name: any }) => (
                            <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                            />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea> */}
            </div>
        </div>
    )
}
