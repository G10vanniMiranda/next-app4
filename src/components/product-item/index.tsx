'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ChevronsUpDown } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react"
import Image from "next/image"


type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Card className={cn("w-80 flex items-center justify-center", className)} {...props}>
            <CardContent className="">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-[350px] space-y-2"
                >
                    <div className="flex flex-col items-center justify-between space-x-4 px-4">
                        <div className="w-full h-44 relative">
                            <Image src="/clientes/modelo-1.jpg"
                                objectFit="contain"
                                fill alt="Modelo 1" />
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <h4 className="text-sm font-semibold">
                                Detalhes...
                            </h4>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-9 p-0">
                                    <ChevronsUpDown className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                    </div>
                    <CollapsibleContent className=" flex gap-2 items-center justify-center">
                        <div className="rounded-md border px-5 py-2">
                            Estado: Goiás
                        </div>
                        <div className="rounded-md border px-5 py-2">
                            Status: Ativo
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    )
}
