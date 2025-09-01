// src/services/api.ts
import type { LeadPayload } from "../features/leads/leadTypes";

export async function enviarLead(data: LeadPayload) {
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true };
}
