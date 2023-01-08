import {WorkshopPlugin} from '@sanity/ui-workshop'
import {WorkshopSanityPluginOptions} from './types'
import {WorkshopSanityInspector} from './WorkshopSanityInspector'
import {WorkshopSanityProvider} from './WorkshopSanityProvider'

export * from './types'
export * from './useWorkshopSanity'

/** @public */
export function sanity(
  options: WorkshopSanityPluginOptions
): WorkshopPlugin<WorkshopSanityPluginOptions> {
  return {
    name: 'sanity',
    title: 'Sanity',
    inspector: WorkshopSanityInspector,
    provider: WorkshopSanityProvider,
    options,
  }
}
