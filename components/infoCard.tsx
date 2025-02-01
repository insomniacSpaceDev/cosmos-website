import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface InfoCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    isImageLeft?: boolean;
}

const InfoCard = ({
    title,
    description,
    imageUrl = "https://placehold.co/800x400",
    isImageLeft = true,
}: InfoCardProps) => {
    return (
        <Card className="bg-[#313131] overflow-hidden rounded-3xl">
            <div className="flex flex-col md:flex-row">
                {isImageLeft && (
                    <div className="w-full md:w-1/2 m-5 md:m-0">
                        <Image
                            src={imageUrl}
                            width={800}
                            height={400}
                            alt="Card image"
                            className="w-full h-64 md:h-full object-cover rounded-2xl"
                        />
                    </div>
                )}

                <CardContent className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                    <p className="text-zinc-400 mb-6 line-clamp-4">{description}</p>
                    <Button
                        variant="outline"
                        className="w-fit text-white border-white hover:bg-white hover:text-zinc-900 transition-colors"
                    >
                        LEARN MORE
                    </Button>
                </CardContent>
                {!isImageLeft && (
                    <div className="w-full md:w-1/2 m-5">
                        <Image
                            src={imageUrl}
                            width={800}
                            height={400}
                            alt="Card image"
                            className="w-full h-64 md:h-full object-cover rounded-2xl"
                        />
                    </div>
                )}
            </div>
        </Card>
    );
};

export default InfoCard;
