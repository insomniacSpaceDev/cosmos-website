import { Card, CardContent, CardHeader, CardTitle } from "@/components/gscard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

const page = () => {
    return <div>
        OBSERVATORY
        <div><Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
</div>
        <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Dome</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Our sales support team will come & measure your property in order to ensure accuracy in design and finish. We'll calculate their plans, then we'll assist. Based on the measurement the 125 22 20 is charged to schedule a visit, or visit one of our Showrooms.</p>
        </CardContent>
        <div className="flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            LEARN MORE
          </button>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mount</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Consult our professionals by calling our toll-free number 800 123 32 30 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.</p>
        </CardContent>
        <div className="flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            LEARN MORE
          </button>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Control Room</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Our sales support team will come & measure your property in order to ensure accuracy in design and finish. We'll calculate their plans, then we'll assist. Based on the measurement the 125 22 20 is charged to schedule a visit, or visit one of our Showrooms.</p>
        </CardContent>
        <div className="flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            LEARN MORE
          </button>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mount</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Consult our professionals by calling our toll-free number 800 123 32 30 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.</p>
        </CardContent>
        <div className="flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            LEARN MORE
          </button>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mount</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Consult our professionals by calling our toll-free number 800 123 32 30 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.</p>
        </CardContent>
        <div className="flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            LEARN MORE
          </button>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mount</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Consult our professionals by calling our toll-free number 800 123 32 30 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.</p>
        </CardContent>
        <div className="flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            LEARN MORE
          </button>
        </div>
      </Card>
    </div>
    </div>;
};

export default page;
