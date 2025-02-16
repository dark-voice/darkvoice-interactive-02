
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('message', values.message)
    formData.append('_subject', "Novo contato do site DarkVoice")
    formData.append('_replyto', values.email)
    formData.append('_template', 'table')
    formData.append('_captcha', 'true')
    formData.append('_autoresponse', 'Obrigado por entrar em contato! Retornaremos em breve.')

    toast.promise(
      fetch("https://formsubmit.co/darkvoiceeee@gmail.com", {
        method: "POST",
        body: formData
      }).then((res) => {
        if (!res.ok) throw new Error("Erro ao enviar mensagem")
        return res
      }),
      {
        loading: "Enviando mensagem...",
        success: "Mensagem enviada com sucesso!",
        error: "Erro ao enviar mensagem",
      }
    )
    form.reset()
  }

  return (
    <section id="contato" className="section-container py-24 space-y-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Entre em Contato</h2>
        <p className="text-muted-foreground">
          Tire suas dúvidas ou faça um orçamento personalizado
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <p className="text-lg">+55 41 9503-0689</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <p className="text-lg">darkvoiceeee@gmail.com</p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_subject" value="Novo contato do site DarkVoice" />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Digite sua mensagem" 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
