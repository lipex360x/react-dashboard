import { PAGE_PATH } from '../../constants'
import { generatorService } from '../../services/generator.service'

export default {
  description: 'Generate a Component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Page Name',
      validate: (value: string) => {
        if (!value) return 'Value is required'
        return true
      },
    },
  ],

  actions: (data: any) => {
    const { pushFile } = generatorService()
    const pathTemplate = './modules/pages/templates'
    const componentPath = `${PAGE_PATH}/{{componentName}}Page`

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
          name: '{{componentName}}Page.tsx',
          template: 'page.hbs',
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

    const message = () => `Page ${data.componentName} created`
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
