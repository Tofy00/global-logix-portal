
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
      image: "/lovable-uploads/cbe5513f-eaf4-42a0-86c4-77e624031953.png",
      initials: "РА",
    },
    {
      id: "member2",
      name: t("home.team.member2.name"),
      position: t("home.team.member2.position"),
      bio: t("home.team.member2.bio"),
      image: "/lovable-uploads/5782b152-497a-4e3b-b665-362b34bc869c.png", 
      initials: "МА",
    },
    {
      id: "member3",
      name: t("home.team.member3.name"),
      position: t("home.team.member3.position"),
      bio: t("home.team.member3.bio"),
      image: "/lovable-uploads/8dca4263-ec92-4a80-98f3-dcc0c85791ae.png",
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
                  <Avatar className="h-32 w-32 mb-4 border-4 border-background shadow-md hover:scale-105 transition-transform duration-300">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} />
                    ) : (
                      <AvatarFallback className={`text-xl font-medium bg-gradient-to-br ${gradients[idx % gradients.length]} text-white`}>
                        {member.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
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
