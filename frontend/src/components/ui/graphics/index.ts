import type { ComponentType } from 'react';
import type { ServiceSlug } from '@/types/service';
import { AlignmentGraphic } from './AlignmentGraphic';
import { DetailingGraphic } from './DetailingGraphic';
import { GlassGraphic } from './GlassGraphic';
import { InspectionGraphic } from './InspectionGraphic';
import { MaintenanceGraphic } from './MaintenanceGraphic';
import { OilGraphic } from './OilGraphic';
import { RepairGraphic } from './RepairGraphic';
import { StorageGraphic } from './StorageGraphic';
import { TireGraphic } from './TireGraphic';

export { BlogGraphic } from './BlogGraphic';
export { BrandGraphic } from './BrandGraphic';
export { ContactGraphic } from './ContactGraphic';
export { FaqGraphic } from './FaqGraphic';
export { LegalGraphic } from './LegalGraphic';
export { ServicesGraphic } from './ServicesGraphic';

/** Jede Leistungsseite erhält ihre eigene, thematisch passende Grafik. */
export const serviceGraphics: Record<ServiceSlug, ComponentType> = {
  achsvermessung: AlignmentGraphic,
  reparaturen: RepairGraphic,
  instandhaltung: MaintenanceGraphic,
  aufbereitung: DetailingGraphic,
  reifenwechsel: TireGraphic,
  'smart-repair-glas': GlassGraphic,
  reifenlagerung: StorageGraphic,
  oelwechsel: OilGraphic,
  tuev: InspectionGraphic,
};
