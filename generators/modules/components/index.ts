import { COMPONENT_PATH } from '../../constants'
import { generatorService } from '../../services/generator.service'

export default {
  description: 'Generate a Component',
  prompts: [
    {
      type: 'list',
      name: 'componentType',
      message: 'Select a component type',
      choices: () => [
        { name: 'Boson', value: 'bosons' },
        { name: 'Atom', value: 'atoms' },
        { name: 'Molecule', value: 'molecules' },
        { name: 'Organism', value: 'organisms' },
        { name: 'Template', value: 'templates' },
      ],
    },

    {
      type: 'input',
      name: 'componentName',
      message: 'Component Name',
      validate: (value: string) => {
        if (!value) return 'Value is required'
        return true
      },
    },
  ],

  actions: (data: any) => {
    const { pushFile } = generatorService()
    const pathTemplate = './modules/components/templates'
    const componentPath = `${COMPONENT_PATH}/{{componentType}}/{{componentName}}`

    const files = () => {
      const arrayFiles: any[] = []

      arrayFiles.push(
        pushFile({
          path: componentPath,
          name: 'index.ts',
          template: 'index.hbs',
        }),
      )

      arrayFiles.push(
        pushFile({
          path: componentPath,
          name: '{{componentName}}.tsx',
          template: 'component.hbs',
        }),
      )

      arrayFiles.push(
        pushFile({
          path: componentPath,
          name: 'styles.ts',
          template: 'styles.hbs',
        }),
      )

      return arrayFiles
    }

    const action = [] as any[]

    files().forEach((file) => {
      const createFile = {
        type: 'add',
        path: `${file.path}/${file.name}`,
        templateFile: `${pathTemplate}/${file.template}`,
        force: true,
      }

      action.push(createFile)
    })

    const message = () => `Component ${data.componentName} created`
    action.push(message)

    // const updateFile = {
    //   type: 'append',
    //   path: `${COMPONENT_PATH}index.ts`,
    //   pattern: /components/gi,
    //   template: "export * from './{{componentName}}'",
    // }
    // action.push(updateFile)

    return action
  },
}
