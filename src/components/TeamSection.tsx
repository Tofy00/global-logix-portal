
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollReveal from "@/components/ScrollReveal";

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    {
      id: "member1",
      name: t("home.team.member1.name"),
      position: t("home.team.member1.position"),
      bio: t("home.team.member1.bio"),
      image: "/lovable-uploads/eecebb31-362a-4b14-8ecd-e5e70f88f8da.png",
      initials: "РА",
    },
    {
      id: "member2",
      name: t("home.team.member2.name"),
      position: t("home.team.member2.position"),
      bio: t("home.team.member2.bio"),
      image: "/lovable-uploads/26634ba0-f35d-4b9b-9777-5bb18b7a1f23.png", 
      initials: "МА",
    },
    {
      id: "member3",
      name: t("home.team.member3.name"),
      position: t("home.team.member3.position"),
      bio: t("home.team.member3.bio"),
      image: "/lovable-uploads/39f903a0-bd34-4b14-ad6b-250f6651b261.png",
      initials: "ЗС",
    },
  ];

  // Gradient colors for avatar fallbacks
  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-amber-500",
  ];

  return (
    <section id="team" className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.team.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              {t("home.team.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <ScrollReveal key={member.id} delay={300 + idx * 100}>
              <Card className="text-center overflow-hidden hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1 dark:border-primary-800/30 border-primary-200/80">
                <CardContent className="pt-6 pb-4 px-4 flex flex-col items-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-md hover:scale-105 transition-transform duration-300 mb-4">
                    <div className="w-full h-full bg-gradient-to-br absolute inset-0 opacity-10" />
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className={`flex items-center justify-center w-full h-full bg-gradient-to-br ${gradients[idx % gradients.length]} text-white text-2xl font-medium`}>
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <CardTitle className="mt-4 mb-1 font-medium text-foreground text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium mb-3 text-md">
                    {member.position}
                  </CardDescription>
                  <p className="text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
