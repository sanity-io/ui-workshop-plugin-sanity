import {Box, Text} from '@sanity/ui'
import {useWorkshopSanity} from '../useWorkshopSanity'

export default function TestStory() {
  const sanity = useWorkshopSanity()

  return (
    <Box padding={4}>
      <Text>Patch events: {sanity.patchEvents.length}</Text>
    </Box>
  )
}
