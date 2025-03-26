
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      id: "address",
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t("home.contact.addressTitle"),
      info: t("home.contact.address"),
    },
    {
      id: "phone",
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t("home.contact.phoneTitle"),
      info: t("home.contact.phone"),
    },
    {
      id: "email",
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t("home.contact.emailTitle"),
      info: t("home.contact.email"),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.contact.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              {t("home.contact.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {contactInfo.map((item, idx) => (
              <ScrollReveal key={item.id} delay={300 + idx * 100}>
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.info}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={600}>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3476626493805!2d37.6151896!3d55.7539734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2sus!4v1618168404720!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

          <ContactForm 
            title={t("home.contact.formTitle")}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
