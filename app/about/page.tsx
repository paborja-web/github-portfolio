import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "Tailwind CSS",
  "HTML & CSS",
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 px-6 sm:px-12 selection:bg-red-600 selection:text-white flex flex-col justify-between">
      {/* Background Decorative Red Circles / Ambient Glow */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-red-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10 w-full">
        {/* Header Section */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Get to know me
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-red-600">Me</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            A bit about my background, passion, and technical skillset.
          </p>
        </div>

        {/* My Story Card */}
        <Card className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md">
          <CardHeader className="border-b border-zinc-800/60 pb-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              My Story
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300 leading-relaxed pt-6">
            <p>
              In my second year as a Computer Science student, I am dedicated to building a strong foundation in web development, programming logic, data structures, and database systems. I actively work on academic projects and personal coding builds to constantly refine my skills.
            </p>
            <p>
              My primary goal is to continuously develop my problem-solving abilities, write clean and efficient code, and prepare for future software engineering internships and tech industry projects.
            </p>
          </CardContent>
        </Card>

        {/* Skills & Technologies Card */}
        <Card className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md">
          <CardHeader className="border-b border-zinc-800/60 pb-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm px-4 py-1.5 rounded-xl bg-zinc-950 border-zinc-800 text-gray-200 hover:border-red-600 hover:bg-red-950/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}