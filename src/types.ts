import {Config, FormPatch, PatchEvent} from 'sanity'

/** @public */
export interface WorkshopSanityPluginOptions {
  config: Config
}

/** @public */
export interface WorkshopSanityContextValue {
  onPatchEvent: (patchEvent: PatchEvent) => void
  patchEvents: {patches: Omit<FormPatch, 'patchType'>[]}[]
}
