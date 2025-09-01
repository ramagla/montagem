// src/features/leads/leadSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LeadPayload, LeadState } from "./leadTypes";
import { enviarLead } from "../../services/api";

const initialState: LeadState = {
  sending: false,
  success: null,
  error: null,
};

export const sendLead = createAsyncThunk(
  "leads/send",
  async (payload: LeadPayload, { rejectWithValue }) => {
    try {
      const res = await enviarLead(payload);
      if (!res?.ok) throw new Error("Falha ao enviar lead");
      return true;
    } catch (err: any) {
      return rejectWithValue(err.message || "Erro desconhecido");
    }
  }
);

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    resetLeadState: (state) => {
      state.sending = false;
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendLead.pending, (state) => {
        state.sending = true;
        state.success = null;
        state.error = null;
      })
      .addCase(sendLead.fulfilled, (state) => {
        state.sending = false;
        state.success = true;
      })
      .addCase(sendLead.rejected, (state, action) => {
        state.sending = false;
        state.success = false;
        state.error = String(action.payload || "Erro");
      });
  },
});

export const { resetLeadState } = leadSlice.actions;
export default leadSlice.reducer;
