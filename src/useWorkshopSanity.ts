import {useContext} from 'react'
import {WorkshopSanityContextValue} from './types'
import {WorkshopSanityContext} from './WorkshopSanityContext'

/** @internal */
export function useWorkshopSanity(): WorkshopSanityContextValue {
  const workshopSanity = useContext(WorkshopSanityContext)

  if (!workshopSanity) {
    throw new Error('`useWorkshopSanity()` must be used within a `<WorkshopSanityProvider />`')
  }

  return workshopSanity
}
