"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Github, Linkedin } from "lucide-react";
import { FaXTwitter, FaStackOverflow, FaMedium } from "react-icons/fa6";

const Contact = () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I'd love to hear from you. Send me a message and I'll respond as soon
          as possible.
        </p>
      </div>
      <div className="flex md:hidden items-center justify-center gap-4 mt-4">
        <SocialIcon
          href="#"
          icon={<FaXTwitter size={18} />}
          tooltip="Twitter"
        />
        <SocialIcon href="#" icon={<Github size={18} />} tooltip="Github" />
        <SocialIcon href="#" icon={<Linkedin size={18} />} tooltip="LinkedIn" />
        <SocialIcon
          href="#"
          icon={<FaStackOverflow size={18} />}
          tooltip="Stack Overflow"
        />
        <SocialIcon href="#" icon={<FaMedium size={18} />} tooltip="Medium" />
      </div>
      <div className="">
        {/* <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>San Francisco, CA</span>
            </div>
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" asChild>
                  <a href="#">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card> */}

        <Card className="dark:bg-[#1e2738]">
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    className="dark:bg-[#273248] dark:border-[#273248]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="dark:bg-[#273248] dark:border-[#273248]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  placeholder="Message subject"
                  className="dark:bg-[#273248] dark:border-[#273248] focus:outline-none focus:ring-0 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  className="dark:bg-[#273248] dark:border-[#273248] "
                />
              </div>
              <Button
                className="w-full bg-[#465981] hover:bg-blue-700"
                type="submit"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  function SocialIcon({
    href,
    icon,
    tooltip,
  }: {
    href: string;
    icon: React.ReactNode;
    tooltip?: string;
  }) {
    return (
      <div className="relative group inline-block">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                     shadow hover:shadow-md transition"
        >
          {icon}
        </a>

        {/* Tooltip */}
        <span
          className="absolute top-full mb-2 mt-2 left-1/2 -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-gray-800 text-white text-xs rounded-md 
                     px-2 py-1 transition-all duration-300 
                     whitespace-nowrap pointer-events-none"
        >
          {tooltip}
        </span>
      </div>
    );
  }
};

export default Contact;
