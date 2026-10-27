export type ContactField = 'name' | 'email' | 'phone' | 'vehicle' | 'engine' | 'mileage' | 'service' | 'message' | 'privacy';

/** Felder mit eigener Fehlermeldung – zusätzlich zum Textformular der Bildanhang. */
export type ContactErrorField = ContactField | 'photos';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message: string;
  fieldErrors: Partial<Record<ContactErrorField, string>>;
  /** Eingaben bei Fehlern zurückgeben – React 19 setzt Formulare nach Actions zurück. */
  values?: Partial<Record<ContactField, string>>;
  /** Zähler je Absendeversuch – dient als React-key für den Formular-Remount. */
  attempt?: number;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  engine: string;
  mileage: string;
  service: string;
  message: string;
}
