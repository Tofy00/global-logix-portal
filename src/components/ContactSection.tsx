
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
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

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Офис в Москве",
      content: "просп. Вернадского, 41, стр. 1 (Московский облпотребсоюз)",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Эл. почта",
      content: "hello@witpower.ru",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Время работы",
      content: "Пн–Пт, 10:00–19:00",
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
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Отправьте нам сообщение</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Электронная почта"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Тема сообщения"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                    <Send className="ml-2 h-4 w-4" />
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
