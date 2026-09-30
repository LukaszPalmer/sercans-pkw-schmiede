export type ContactField = 'name' | 'email' | 'phone' | 'service' | 'vehicle' | 'date' | 'message' | 'privacy';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
  /** Eingaben bei Fehlern zurückgeben – React 19 setzt Formulare nach Actions zurück. */
  values?: Partial<Record<ContactField, string>>;
  /** Zähler je Absendeversuch – dient als React-key für den Formular-Remount. */
  attempt?: number;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicle: string;
  date: string;
  message: string;
}
