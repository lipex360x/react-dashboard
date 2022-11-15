import { NodePlopAPI } from 'plop'

import components from './modules/components'
import forms from './modules/forms'
import pages from './modules/pages'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('Component', components)
  plop.setGenerator('Form', forms)
  plop.setGenerator('Pages', pages)
}
