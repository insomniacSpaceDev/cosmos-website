import { LuSatelliteDish } from "react-icons/lu";
import { IoTelescope } from "react-icons/io5";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
    const teamMembers = [
        {
            name: "Esther Howard",
            role: "Apollo 11 Pilot",
            description: "They delivered my custom rocket as fast as the rocket.",
            imageSrc: "/LOGO.svg", // Replace with the actual image path
        },
        {
            name: "Esther Howard",
            role: "Apollo 11 Pilot",
            description: "They delivered my custom rocket as fast as the rocket.",
            imageSrc: "/LOGO.svg", // Replace with the actual image path
        },
        {
            name: "Esther Howard",
            role: "Apollo 11 Pilot",
            description: "They delivered my custom rocket as fast as the rocket.",
            imageSrc: "/LOGO.svg", // Replace with the actual image path
        },
    ];
    return (
        <div>
            <main className="px-24">
                <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-black text-white">
                    {/* Left Text Section */}
                    <div className="flex-1 mb-8 md:mb-0 md:pr-12">
                        <h2 className="text-4xl font-bold leading-tight">
                            Join our vibrant community of space enthusiasts where you can
                        </h2>
                    </div>

                    {/* Right Cards Section */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Observatory Card */}
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-gray-700 p-4 rounded-full">
                                    <IoTelescope className="text-2xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Observatory</h3>
                            <p className="text-gray-400">
                                Explore the latest missions, both past and present, from NASA, ESA,
                                SpaceX, and other space agencies and organizations.
                            </p>
                        </div>

                        {/* Ground Station Card */}
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-gray-700 p-4 rounded-full">
                                    <LuSatelliteDish className="text-2xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Ground Station</h3>
                            <p className="text-gray-400">
                                Delve into the cutting-edge technology powering space exploration,
                                from spacecraft and telescopes to propulsion systems and space
                                habitats.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="px-6 py-12 bg-black text-white text-center">
                    <h2 className="text-7xl mb-12 tracking-widest">
                        <span className="font-extralight">OUR</span>{" "}
                        <span className="font-bold">TEAM MEMBERS</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-center w-72"
                            >
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mb-4"
                                    width={50}
                                    height={50}
                                />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-400 mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="px-6 py-6 border rounded-3xl">
                    <div className="flex flex-col lg:w-1/2 m-16">
                        <div className="text-4xl text-white font-bold">
                            Start your ASTREA Collection
                        </div>
                        <div className="w-3/4 text-sm my-6 font-light">
                            Simply DM us to secure your edition and pay right away to recieve your
                            hard copy as soon as it&apos;s out. The universe is waiting for you!
                        </div>
                        <div className="flex my-2">
                            <Input placeholder="Enter your Email" className="mr-2" />
                            <Button className="mx-2 p-4 font-bold ">Subscribe</Button>
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    );
}
