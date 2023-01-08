import {Card, Code, Stack} from '@sanity/ui'
import {ReactElement} from 'react'
import {pathToString} from 'sanity'
import {useWorkshopSanity} from './useWorkshopSanity'

/** @internal */
export function WorkshopSanityInspector(): ReactElement {
  const {patchEvents} = useWorkshopSanity()

  return (
    <Stack>
      {patchEvents.map((patchEvent, patchEventIndex) => (
        <Card borderBottom key={patchEventIndex} padding={3}>
          <Stack padding={1} space={1}>
            {patchEvent.patches.map((p, patchIndex) => {
              const value = 'value' in p && p.value

              if (p.type === 'diffMatchPatch') {
                return (
                  <Card key={patchIndex} overflow="auto" padding={2} radius={2} tone="transparent">
                    <Stack space={3}>
                      <Code size={0} weight="bold">
                        diffMatchPatch
                      </Code>
                      <Code size={0}>{pathToString(p.path)}</Code>
                      <Code size={0}>{String(value)}</Code>
                    </Stack>
                  </Card>
                )
              }

              if (p.type === 'setIfMissing' || p.type === 'set' || p.type === 'insert') {
                return (
                  <Card key={patchIndex} overflow="auto" padding={2} radius={2} tone="transparent">
                    <Stack space={3}>
                      <Code size={0} weight="bold">
                        {p.type}
                      </Code>
                      <Code size={0}>{pathToString(p.path)}</Code>
                      <Code language="json" size={0}>
                        {JSON.stringify(value, null, 2)}
                      </Code>
                    </Stack>
                  </Card>
                )
              }

              return (
                <Card key={patchIndex} overflow="auto" padding={2} radius={2} tone="transparent">
                  <Stack space={3}>
                    <Code size={0} weight="bold">
                      {p.type}
                    </Code>
                    <Code size={0}>{pathToString(p.path)}</Code>
                    <Code language="json" size={0}>
                      {JSON.stringify(value, null, 2)}
                    </Code>
                  </Stack>
                </Card>
              )
            })}
          </Stack>
        </Card>
      ))}
    </Stack>
  )
}
