import {createContext} from 'react'
import {WorkshopSanityContextValue} from './types'

/** @internal */
export const WorkshopSanityContext = createContext<WorkshopSanityContextValue | null>(null)
