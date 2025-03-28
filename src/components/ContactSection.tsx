
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // Telegram form state
  const [fullName, setFullName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [telegramSubject, setTelegramSubject] = useState("");
  const [telegramMessage, setTelegramMessage] = useState("");
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, here you would send this to your backend
    console.log("Contact form submitted:", { name, email, subject, message });
    
    toast({
      title: t("common.success"),
      description: t("common.successMessage"),
      duration: 3000,
    });
    
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  
  const handleTelegramSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, here you would send this to your backend
    console.log("Telegram form submitted:", { fullName, telegram, telegramSubject, telegramMessage });
    
    toast({
      title: t("common.success"),
      description: t("common.successMessage"),
      duration: 3000,
    });
    
    // Reset form
    setFullName("");
    setTelegram("");
    setTelegramSubject("");
    setTelegramMessage("");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t("home.contact.moscow"),
      content: t("home.contact.moscowAddress"),
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t("home.contact.china"),
      content: t("home.contact.chinaAddress"),
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t("home.contact.turkey"),
      content: t("home.contact.turkeyAddress"),
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: t("home.contact.emailTitle"),
      content: t("home.contact.email"),
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t("home.contact.phoneTitle"),
      content: t("home.contact.phone"),
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: t("home.contact.workHours"),
      content: t("home.contact.workHoursText"),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info & Form */}
          <ScrollReveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{t("home.contact.formTitle")}</CardTitle>
                <CardDescription>
                  {/* Contact Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="mt-0.5">{item.icon}</div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder={t("home.contact.namePlaceholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t("home.contact.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder={t("home.contact.subjectPlaceholder")}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t("home.contact.messagePlaceholder")}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("home.contact.submitButton")}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Telegram Form */}
          <ScrollReveal delay={200}>
            <Card className="h-full bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">{t("home.contact.telegramTitle")}</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  <p className="mt-2">
                    Удобный и быстрый способ связи - напишите нам в Telegram, и мы ответим в кратчайшие сроки.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTelegramSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder={t("home.contact.fullNamePlaceholder")}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder={t("home.contact.telegramPlaceholder")}
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder={t("home.contact.telegramSubjectPlaceholder")}
                      value={telegramSubject}
                      onChange={(e) => setTelegramSubject(e.target.value)}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t("home.contact.telegramMessagePlaceholder")}
                      value={telegramMessage}
                      onChange={(e) => setTelegramMessage(e.target.value)}
                      rows={4}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="secondary" 
                    className="w-full"
                  >
                    {t("home.contact.telegramButton")}
                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l-.335 4.99c.49 0 .707-.222.98-.484l2.347-2.283l4.883 3.604c.894.498 1.538.242 1.764-.827l3.184-15.013c.325-1.301-.5-1.89-1.444-1.481z"/>
                    </svg>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
