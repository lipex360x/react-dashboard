import { FORM_PATH } from '../../constants'
import { generatorService } from '../../services/generator.service'

export default {
  description: 'Generate a Form',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Form Name',
      validate: (value: string) => {
        if (!value) return 'Value is required'
        return true
      },
    },
  ],

  actions: (data: any) => {
    const { pushFile } = generatorService()
    const pathTemplate = './modules/forms/templates'
    const componentPath = `${FORM_PATH}/{{componentName}}`

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
          name: 'form.schema.ts',
          template: 'form.schema.hbs',
        }),
      )

      arrayFiles.push(
        pushFile({
          path: componentPath,
          name: '{{componentName}}Form.tsx',
          template: 'form.hbs',
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
