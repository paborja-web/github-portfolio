import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 px-6 sm:px-12 selection:bg-red-600 selection:text-white flex flex-col justify-between">
      {/* Background Decorative Red Circles / Ambient Glow */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-red-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 w-full">
        {/* Header Section */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-red-600">Me</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a question, collaboration idea, or project in mind? Reach out below!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md hover:border-red-600/50 transition-all duration-300">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl text-red-500 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-red-400/90 font-medium">Email</p>
                  <p className="text-sm font-semibold text-gray-200 truncate">paborja@ncf.edu.ph</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md hover:border-red-600/50 transition-all duration-300">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl text-red-500 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-red-400/90 font-medium">Phone</p>
                  <p className="text-sm font-semibold text-gray-200"> (63) 9637225601</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md hover:border-red-600/50 transition-all duration-300">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl text-red-500 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-red-400/90 font-medium">Location</p>
                  <p className="text-sm font-semibold text-gray-200">Bombon, Philippines</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Card */}
          <Card className="md:col-span-2 bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md">
            <CardHeader className="border-b border-zinc-800/60 pb-4">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and I&apos;ll get back to you soon.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Patrick Borja"
                      required
                      className="bg-zinc-950/70 border-zinc-800 text-white placeholder:text-gray-500 focus-visible:ring-red-600 focus-visible:border-red-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="paborja@ncf.edu.ph"
                      required
                      className="bg-zinc-950/70 border-zinc-800 text-white placeholder:text-gray-500 focus-visible:ring-red-600 focus-visible:border-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry / Hello"
                    required
                    className="bg-zinc-950/70 border-zinc-800 text-white placeholder:text-gray-500 focus-visible:ring-red-600 focus-visible:border-red-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Your message here..."
                    required
                    className="bg-zinc-950/70 border-zinc-800 text-white placeholder:text-gray-500 focus-visible:ring-red-600 focus-visible:border-red-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}