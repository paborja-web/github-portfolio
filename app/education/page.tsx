import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  description: string;
  achievements: string[];
}

const educationList: EducationItem[] = [
  {
    degree: "Bachelor in Science in Computer Science",
    institution: "Naga College Foundation, Inc.",
    description: "Currently building a solid foundation in web development, programming logic, data structures, and database systems.",
    achievements: [
      "Active Member of the Student IT Society",
    ],
  },
  {
    degree: "Senior High School - TVL (CSS)",
    institution: "Quipayo National High School", 
    description: "Specialized in Information and Communications Technology, covering basic web development, networking, and computer troubleshooting.",
    achievements: [
      "Graduated with Honors",
      "NC2 Certificate in Computer Systems Servicing",
    ],
  },
  {
    degree: "Junior High School Education",
    institution: "SARMHS", 
    description: "Completed general secondary education with strong performance in MAPEH.",
    achievements: [
      "With Honors",
    ],
  },
];

export default function Education() {
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
            Academic Background
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-red-600">Education</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Academic background, degrees, and notable achievements.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {educationList.map((item, idx) => (
            <Card 
              key={idx} 
              className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md hover:border-red-600/50 transition-all duration-300"
            >
              <CardHeader className="border-b border-zinc-800/60 pb-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl text-red-500 shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white">{item.degree}</CardTitle>
                    <CardDescription className="text-red-400/90 font-medium mt-0.5">
                      {item.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-6">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>

                <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                  <h4 className="text-sm font-semibold flex items-center gap-2 mb-2.5 text-red-400">
                    <Award className="h-4 w-4 text-red-500" /> Key Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}