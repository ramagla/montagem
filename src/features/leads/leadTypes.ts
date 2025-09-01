export type LeadPayload = {
  nome: string;
  empresa?: string;
  email: string;
  telefone?: string;
  mensagem?: string;
  origem?: "header" | "hero" | "cta" | "footer";
};

export type LeadState = {
  sending: boolean;
  success: boolean | null;
  error: string | null;
};
