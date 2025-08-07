import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { t, currentLanguage } = useLanguage();
  
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      const response = await fetch('http://77.110.126.31:8000/feedback', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Show success notification
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div className="flex flex-col">
              <span className="font-medium">Успешно!</span>
              <span className="text-sm text-muted-foreground">Ваше сообщение отправлено</span>
            </div>
          </div>,
          {
            duration: 5000,
            position: "top-center",
            className: "border-2 border-primary/20 shadow-lg",
          }
        );
        
        // Reset form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Show error notification
        toast.error(
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-medium">{t("common.error")}</span>
              <span className="text-sm text-muted-foreground">Ошибка отправки. Попробуйте позже.</span>
            </div>
          </div>,
          {
            duration: 5000,
            position: "top-center",
            className: "border-2 border-red-500/20 shadow-lg",
          }
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      // Show network error notification
      toast.error(
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-medium">{t("common.error")}</span>
            <span className="text-sm text-muted-foreground">Не удалось подключиться к серверу.</span>
          </div>
        </div>,
        {
          duration: 5000,
          position: "top-center",
          className: "border-2 border-red-500/20 shadow-lg",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t("home.contact.moscow"),
      content: t("home.contact.moscowAddress"),
      link: "https://maps.google.com/?q=просп.+Вернадского,+41,+стр.+1,+Москва,+Россия",
      isExternal: true
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: t("home.contact.emailTitle"),
      content: t("home.contact.email"),
      link: "mailto:hello@witpower.ru",
      isExternal: false
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: t("home.contact.workHours"),
      content: t("home.contact.workHoursText"),
      link: "",
      isExternal: false
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
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="overflow-hidden transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full transform transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        {item.icon}
                      </div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target={item.isExternal ? "_blank" : undefined}
                          rel={item.isExternal ? "noopener noreferrer" : undefined}
                          className="group transition-colors duration-300 hover:text-primary"
                        >
                          <h4 className="font-medium text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                          <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">{item.content}</p>
                        </a>
                      ) : (
                        <div>
                          <h4 className="font-medium text-lg text-foreground mb-1">{item.title}</h4>
                          <p className="text-muted-foreground">{item.content}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <Card className="h-full transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">{t("home.contact.formTitle")}</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <Input
                      type="text"
                      placeholder={t("home.contact.namePlaceholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background transition-all duration-300 hover:border-primary focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background transition-all duration-300 hover:border-primary focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <Textarea
                      placeholder={t("home.contact.messagePlaceholder")}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                      className="bg-background transition-all duration-300 hover:border-primary focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full transform transition-all duration-300 hover:scale-102 hover:shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("common.loading") : t("home.contact.submitButton")}
                    <Send className="ml-2 h-4 w-4 transform transition-all duration-300 group-hover:translate-x-1" />
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
