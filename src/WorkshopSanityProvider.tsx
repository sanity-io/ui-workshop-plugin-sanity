import {useWorkshop} from '@sanity/ui-workshop'
import {ReactElement, ReactNode, useMemo} from 'react'
import {useCallback} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {FormPatch, PatchEvent, StudioProvider} from 'sanity'
import {WorkshopSanityContextValue, WorkshopSanityPluginOptions} from './types'
import {WorkshopSanityContext} from './WorkshopSanityContext'

interface SanityPatchEventMsg {
  type: 'workshop/sanity/patchEvent'
  patches: Omit<FormPatch, 'patchType'>[]
}

type SanityMsg = SanityPatchEventMsg

/** @internal */
export function WorkshopSanityProvider(props: {
  children?: ReactNode
  options: WorkshopSanityPluginOptions
}): ReactElement {
  const {children, options} = props
  const {channel, broadcast} = useWorkshop<SanityMsg>()
  const [patchEvents, setPatchEvents] = useState<{patches: Omit<FormPatch, 'patchType'>[]}[]>([])

  const onPatchEvent = useCallback(
    (ev: PatchEvent) =>
      broadcast({
        type: 'workshop/sanity/patchEvent',
        patches: ev.patches.map(({patchType, ...p}) => p),
      }),
    [broadcast]
  )

  const ctx: WorkshopSanityContextValue = useMemo(
    () => ({onPatchEvent, patchEvents}),
    [onPatchEvent, patchEvents]
  )

  useEffect(() => {
    return channel.subscribe((msg) => {
      if (msg.type === 'workshop/sanity/patchEvent') {
        setPatchEvents((p) => [{patches: msg.patches}].concat(p))
      }
    })
  }, [channel])

  return (
    <StudioProvider config={options.config}>
      <WorkshopSanityContext.Provider value={ctx}>{children}</WorkshopSanityContext.Provider>
    </StudioProvider>
  )
}
