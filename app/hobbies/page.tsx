import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Music, Coffee, Dumbbell, Tv } from "lucide-react";

const hobbies = [
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Playing multiplayer games like Valorant, Mobile Legends, and strategy games with friends to unwind.",
  },
  {
    title: "Music & Playlists",
    icon: Music,
    description: "Listening to lo-fi, indie, and pop music to stay focused while studying or coding.",
  },
  {
    title: "Coffee & Study Spots",
    icon: Coffee,
    description: "Exploring local cafes and enjoying good iced coffee while working on school assignments.",
  },
  {
    title: "Fitness & Workouts",
    icon: Dumbbell,
    description: "Staying active through home workouts, regular jogging, and casual sports.",
  },
  {
    title: "Movies & Anime",
    icon: Tv,
    description: "Binge-watching sci-fi series, anime, and tech documentaries during free time.",
  },
];

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 px-6 sm:px-12 selection:bg-red-600 selection:text-white flex flex-col justify-between">
      {/* Background Decorative Red Circles / Ambient Glow */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-red-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10 w-full">
        {/* Header Section */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Passions & Interests
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hobbies & <span className="text-red-600">Interests</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            What I enjoy doing outside of coding, debugging, and studying.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <Card
                key={hobby.title}
                className="bg-zinc-900/70 border-zinc-800 text-white shadow-xl backdrop-blur-md hover:border-red-600/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl text-red-500 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-bold text-white">
                      {hobby.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}