import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formPayload = new FormData();
      // Replace this string with your actual access key from web3forms.com
      formPayload.append("access_key", "553c648f-08d2-4036-82b8-de75f704e9d2");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    } finally {
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get in <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="glass p-8 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-300">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Email Me</h3>
                <a href="mailto:gauravnpatil2005@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                  gauravnpatil2005@gmail.com
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Call Me</h3>
                <a href="tel:+919422583474" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                  +91 94225 83474
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/gaurav-patil-25b879282/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors break-all">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl w-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-glass-border focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors text-foreground placeholder-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-glass-border focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors text-foreground placeholder-slate-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-glass-border focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors text-foreground placeholder-slate-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'Sending...'}
                  className="w-full px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status ? status : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919422583474"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:bg-green-600 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
};
