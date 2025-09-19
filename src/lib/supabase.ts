import { createClient } from '@supabase/supabase-js';

// Configurações do Supabase
// Substitua pelas suas próprias configurações quando configurar o Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

/**
 * Cliente Supabase para interações com o banco de dados
 * Configurado para uso com o formulário de contato e outras funcionalidades
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Função para enviar mensagem de contato via Supabase
 * @param formData Dados do formulário de contato
 */
export const sendContactMessage = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return { success: false, error };
  }
};

/**
 * Função para obter estatísticas do portfólio
 * Útil para mostrar dados dinâmicos como número de projetos, etc.
 */
export const getPortfolioStats = async () => {
  try {
    const { data, error } = await supabase
      .from('portfolio_stats')
      .select('*')
      .single();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Erro ao obter estatísticas:', error);
    return { success: false, error };
  }
};
