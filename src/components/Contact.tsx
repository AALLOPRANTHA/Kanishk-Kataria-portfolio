
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="noise-overlay"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Have a project idea or just want to connect? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal transition-all duration-700 delay-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fancy-border p-0.5 bg-gradient-to-r from-primary/20 via-transparent to-purple-500/20 rounded-lg">
                  <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-lg space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="w-full bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="w-full min-h-[120px] bg-white/5 border-white/10 focus:border-primary/50"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="reveal transition-all duration-700 delay-300">
              <div className="grid grid-cols-1 gap-6">
                <div className="fancy-border bg-white/5 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-lg">Email</h4>
                      <a href="mailto:kanishk.kataria@bcah.christuniversity.in" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                        kanishk.kataria@bcah.christuniversity.in
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="fancy-border bg-white/5 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/30">
                      <Phone className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-lg">Phone</h4>
                      <a href="tel:+919958029445" className="text-foreground/70 hover:text-indigo-400 transition-colors text-sm">
                        +91 9958029445
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="fancy-border bg-white/5 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/30">
                      <MapPin className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-lg">Location</h4>
                      <p className="text-foreground/70 text-sm">
                        B-1903 Aishwaryam Society<br/>
                        Gaur City-2, Greater Noida West
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
