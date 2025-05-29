'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Definindo o tipo do cliente
interface Cliente {
    nome: string
    idade: number
    foto: string
}

// Lista de clientes (JSON)
const clientes: Cliente[] = [
    {
        nome: "João Silva",
        idade: 25,
        foto: "/clientes/modelo-1.jpg"
    },
    {
        nome: "Maria Souza",
        idade: 30,
        foto: "/clientes/modelo-2.jpg"
    },
    {
        nome: "Carlos Lima",
        idade: 22,
        foto: "/clientes/modelo-3.jpg"
    },
    {
        nome: "Ana Paula",
        idade: 28,
        foto: "/clientes/modelo-4.jpg"
    },
    {
        nome: "Bruno Costa",
        idade: 35,
        foto: "/clientes/modelo-5.jpg"
    }
]

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {clientes.map((cliente, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <img
                                        src={cliente.foto}
                                        alt={cliente.nome}
                                        className="w-44 h-44 rounded-full mb-4"
                                    />
                                    <span className="text-lg font-semibold">{cliente.nome}</span>
                                    <span className="text-sm text-gray-500">{cliente.idade} anos</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
