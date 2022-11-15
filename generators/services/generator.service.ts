type PushFileProps = {
  path: string
  name: string
  template: string
  force?: boolean
}

export const generatorService = () => {
  const pushFile = ({ name, path, template, force = true }: PushFileProps) => ({
    path,
    name,
    template,
    force,
  })

  return { pushFile }
}
