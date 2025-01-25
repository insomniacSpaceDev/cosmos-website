import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Add newsletter subscription logic here
    // };

    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Get in touch section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-16">Get in touch</h2>
                        <address className="not-italic">
                            <p>MIT World Peace University</p>
                            <p>Pune</p>
                            <p className="mb-4">Maharastra, India</p>
                            <p className="mb-2">(684) 555-0102</p>
                            <p>cosmos123@gmail.com</p>
                        </address>
                    </div>

                    {/* Quick Links section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-16">Quick Links</h2>
                        <nav>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/features"
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/testimonial"
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Testimonial
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Newsletter section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-16">Newsletter</h2>
                        <p className="mb-4">We send updates in every week</p>
                        <form className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-gray-800 border-gray-700"
                                />
                                <Button type="submit" variant="secondary" className="px-6">
                                    Go
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom section with copyright and social icons */}
                <div className="mt-16 pt-16 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">© 2025 Cosmos. All right reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
