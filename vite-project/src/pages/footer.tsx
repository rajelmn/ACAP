// Import shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FiMail as Mail } from "react-icons/fi";
// Contact icons
import Table from "../components/table"
import { useTranslation } from "react-i18next";
import { Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation() ; 
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-500" />
                    <p>contact@acap.net</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-500" />
                    <p>+222 36 63 43 27</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                    <p>Address: ONG ksar ZRC560A</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Simplified Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message..." 
                      className="min-h-32" 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-[#000000] text-gray-200">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">ACAP (Association Chinguiti Aide Poor)</h3>
              <div className="text-gray-400 mb-4">
                CCP:00100/ 13005 /11344280111 / 11 MAURIPOST
              </div>
              <div className="flex items-center">
                <span className="text-normal">
                <Mail /> 
                </span>
                <p className="ml-2">chinguittiong@gmail.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="/#about-us" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="/#blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
          
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

              <h3 className="text-lg font-semibold mb-4">Reference bancaires</h3>
        <Table />
          <div className="flex my-7 flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025  All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;