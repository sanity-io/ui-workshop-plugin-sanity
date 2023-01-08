import {defineConfig} from '@sanity/ui-workshop'
import {Config} from 'sanity'
import {createMockSanityClient} from 'sanity-testing-library'
import {sanity} from './src'

const config: Config = {
  unstable_clientFactory: () => createMockSanityClient(),
  projectId: 'test',
  dataset: 'test',
}

// Workshop configuration
export default defineConfig({
  title: '@sanity/ui-workshop-plugin-sanity',
  plugins: [sanity({config})],
})
