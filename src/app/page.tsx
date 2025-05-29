
import { CarouselPlugin } from "@/components/carrousel";
import { CardDemo } from "@/components/product-item";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>Hello</h1>
      <CarouselPlugin />

      <CardDemo />
    </div>
  );
}
