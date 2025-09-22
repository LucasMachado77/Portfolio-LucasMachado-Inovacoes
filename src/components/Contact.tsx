import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../hooks/useTranslation';

/**
 * Interface para dados de contato
 */
interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  instagram: string;
}

/**
 * Interface para dados do formulário
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Componente da seção de contato
 * Inclui formulário funcional e informações de contato
 */
const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  // Estado do formulário
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Dados de contato
  const contactInfo: ContactInfo = {
    email: 'eng.lucasmachador@gmail.com',
    phone: '+351 963 206 301',
    location: 'Portugal',
    linkedin: 'https://linkedin.com/in/lucasmachado',
    github: 'https://github.com/LucasMachado77',
    instagram: 'https://instagram.com/lucasmachado___',
  };

  // Manipular mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manipular envio do formulário via EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configurações do EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Verificar se as configurações estão definidas
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configurações do EmailJS não encontradas. Verifique as variáveis de ambiente.');
      }

      // Inicializar o EmailJS
      emailjs.init(publicKey);

      // Parâmetros do template do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: contactInfo.email, // Seu email de destino
      };

      // Enviar email via EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams);
      
      console.log('Email enviado com sucesso:', result);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho da seção */}
          <motion.div variants={itemVariants} className="text-center mb-12 xs:mb-16">
            <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-primary-500/10 text-primary-500 rounded-full text-xs xs:text-sm font-medium mb-3 xs:mb-4">
              <FaEnvelope className="inline w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
              {t.contact.title}
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-4 xs:mb-6">
              {t.contact.subtitle}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-4 xs:px-0">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
            {/* Informações de contato */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl xs:text-2xl font-bold text-primary-900 mb-6 xs:mb-8">
                {t.contact.info.title}
              </h3>
              
              <div className="space-y-4 xs:space-y-6">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  style={{ zIndex: 10 }}
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 text-sm xs:text-base">{t.contact.fields.email}</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary-500 hover:text-primary-600 transition-colors duration-300 text-sm xs:text-base break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Telefone */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  style={{ zIndex: 10 }}
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 text-sm xs:text-base">{t.contact.fields.phone}</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary-500 hover:text-primary-600 transition-colors duration-300 text-sm xs:text-base"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Localização */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  style={{ zIndex: 10 }}
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 text-sm xs:text-base">{t.contact.fields.location}</p>
                    <p className="text-secondary-600 text-sm xs:text-base">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Links sociais */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 xs:mt-8"
              >
                <h4 className="text-base xs:text-lg font-semibold text-primary-900 mb-3 xs:mb-4">
                  {t.contact.social.title}
                </h4>
                <div className="flex gap-3 xs:gap-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 xs:w-12 xs:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="w-4 h-4 xs:w-5 xs:h-5" />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 xs:w-12 xs:h-12 bg-gray-900 hover:bg-black text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub className="w-4 h-4 xs:w-5 xs:h-5" />
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 xs:w-12 xs:h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="w-4 h-4 xs:w-5 xs:h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Disponibilidade */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 xs:mt-8 p-4 xs:p-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white relative"
                style={{ zIndex: 10 }}
              >
                <h4 className="text-base xs:text-lg font-semibold mb-1.5 xs:mb-2">{t.contact.availability.title}</h4>
                <p className="text-xs xs:text-sm opacity-90">
                  {t.contact.availability.message}
                </p>
              </motion.div>
            </motion.div>

            {/* Formulário de contato */}
            <motion.div variants={itemVariants}>
              <div className="card p-4 xs:p-6 sm:p-8">
                <h3 className="text-xl xs:text-2xl font-bold text-primary-900 mb-4 xs:mb-6">
                  {t.contact.formTitle}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-primary-900 mb-1.5 xs:mb-2">
                      {t.contact.form.name} {t.contact.form.required}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-primary-900 mb-1.5 xs:mb-2">
                      {t.contact.form.email} {t.contact.form.required}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>

                  {/* Assunto */}
                  <div>
                    <label htmlFor="subject" className="block text-xs xs:text-sm font-medium text-primary-900 mb-1.5 xs:mb-2">
                      {t.contact.form.subject} {t.contact.form.required}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                      placeholder={t.contact.form.subjectPlaceholder}
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-primary-900 mb-1.5 xs:mb-2">
                      {t.contact.form.message} {t.contact.form.required}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm xs:text-base"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  {/* Status do envio */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 xs:p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-sm xs:text-base"
                    >
                      {t.contact.form.success}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 xs:p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm xs:text-base"
                    >
                      {t.contact.form.error}
                    </motion.div>
                  )}

                  {/* Botão de envio */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 xs:w-5 xs:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-3 h-3 xs:w-4 xs:h-4" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
