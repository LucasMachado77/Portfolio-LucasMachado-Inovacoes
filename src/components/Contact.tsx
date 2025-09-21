import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
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

  // Manipular envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio do formulário (substitua por integração real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com um serviço real como EmailJS, Formspree, ou Supabase
      console.log('Dados do formulário:', formData);
      
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho da seção */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-4">
              <FaEnvelope className="inline w-4 h-4 mr-2" />
              {t.contact.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {t.contact.subtitle}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-900 mb-8">
                {t.contact.info.title}
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  style={{ zIndex: 10 }}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{t.contact.fields.email}</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary-500 hover:text-primary-600 transition-colors duration-300"
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
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  style={{ zIndex: 10 }}
                >
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{t.contact.fields.phone}</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary-500 hover:text-primary-600 transition-colors duration-300"
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
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  style={{ zIndex: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{t.contact.fields.location}</p>
                    <p className="text-secondary-600">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Links sociais */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <h4 className="text-lg font-semibold text-primary-900 mb-4">
                  {t.contact.social.title}
                </h4>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 hover:bg-black text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Disponibilidade */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white relative"
                style={{ zIndex: 10 }}
              >
                <h4 className="text-lg font-semibold mb-2">{t.contact.availability.title}</h4>
                <p className="text-sm opacity-90">
                  {t.contact.availability.message}
                </p>
              </motion.div>
            </motion.div>

            {/* Formulário de contato */}
            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">
                  {t.contact.formTitle}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                      {t.contact.form.name} {t.contact.form.required}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                      {t.contact.form.email} {t.contact.form.required}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>

                  {/* Assunto */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-900 mb-2">
                      {t.contact.form.subject} {t.contact.form.required}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder={t.contact.form.subjectPlaceholder}
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                      {t.contact.form.message} {t.contact.form.required}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  {/* Status do envio */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700"
                    >
                      {t.contact.form.success}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-700"
                    >
                      {t.contact.form.error}
                    </motion.div>
                  )}

                  {/* Botão de envio */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
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
