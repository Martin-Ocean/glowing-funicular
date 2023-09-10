"use client"

import { Dispatch } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"




interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    category: any[],
    activeMenu: any,
    setActiveMenu: any
}

export function Sidebar({ className, category, activeMenu, setActiveMenu }: SidebarProps) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4 font-sans">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Top 榜单
                    </h2>
                    <div className="space-y-1">
                        <Button variant={activeMenu == "mostpopularproducts" ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => setActiveMenu("mostpopularproducts")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >

                                <rect width="7" height="7" x="14" y="3" rx="1" />
                                <rect width="7" height="7" x="14" y="14" rx="1" />
                                <rect width="7" height="7" x="3" y="14" rx="1" />

                            </svg>
                            热销榜单
                        </Button>
                        <Button variant={activeMenu == "mostdiscountproducts" ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => setActiveMenu("mostdiscountproducts")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >
                                <rect width="7" height="7" x="3" y="3" rx="1" />
                                {/* <rect width="7" height="7" x="14" y="3" rx="1" /> */}
                                <rect width="7" height="7" x="14" y="14" rx="1" />
                                <rect width="7" height="7" x="3" y="14" rx="1" />
                            </svg>
                            限时折扣
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        所有产品
                    </h2>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1">
                            {category.map(category => {
                                return (
                                    <Button key={category.name} variant={activeMenu == category.id ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => setActiveMenu(category.id)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2 h-4 w-4"
                                        >

                                            <path d="M12 12H3" />
                                            <path d="M16 6H3" />
                                            <path d="M12 18H3" />
                                        </svg>
                                        {category.name}
                                    </Button>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}