import { Carousel } from "@material-tailwind/react";

export default function Carousels() {
  return (
    <div className="mx-auto w-4/5 py-8">
      <Carousel className="rounded-lg">
        <img
          src="/src/assets/images/banner1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/src/assets/images/banner2.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/src/assets/images/banner3.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
