import { useState } from "react";
import type { FormEvent } from "react";
import {
  Send,
  Mail,
  User,
  FileText,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Section from "./Section";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast.success("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contato"
      titulo="Entre em"
      tituloDestacado="contato"
      descricao="Tem algum projeto em mente ou quer trocar uma ideia? Ficarei feliz em conversar!"
    >
      <div className="bg-card border border-border rounded-xl p-8 md:p-12 pointer-events-auto max-w-2xl mx-auto">
        {isSuccess ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl mb-3">Mensagem Enviada!</h3>
            <p className="text-muted-foreground">
              Obrigado pelo contato. Responderei em breve!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="name"
                className="flex items-center gap-2 mb-2 text-sm"
              >
                <User className="w-4 h-4 text-primary" />
                <span>Seu Nome</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="João Silva"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 mb-2 text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Seu Email</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="joao@exemplo.com"
              />
            </div>

            {/* Assunto */}
            <div>
              <label
                htmlFor="subject"
                className="flex items-center gap-2 mb-2 text-sm"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>Assunto</span>
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Proposta de projeto"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 mb-2 text-sm"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Mensagem</span>
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Conte-me sobre seu projeto ou ideia..."
              />
            </div>

            {/* Botão Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
