import Image from "next/image"
import { cn, price_formatter } from "@/lib/utils"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: any
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function ProductCard({
  product,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ProductCardProps) {

  const handleRightClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={product.imgUrl.length > 0 ? product.imgUrl : "/images/250x330.png"}
          alt={product.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
          onContextMenu={handleRightClick}
        />
      </div>
      <div className="space-y-1 px-3">
        <div className="flex flex-row justify-between ">
          <p className="text-md">{product.name}</p>
          <p className="text-md text-muted-foreground">{price_formatter('USD', product.price)}</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="text-xs text-muted-foreground">{product.description}</p>
        </div>



      </div>
    </div>
  )
}