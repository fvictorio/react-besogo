import * as React from 'react'

export type BesogoProps = {
  sgfUrl?: string
  onCreate: (editor: any) => void
}

const besogo = (window as any).besogo

export const Besogo: React.FC<BesogoProps> = props => {
  React.useLayoutEffect(() => {
    const options: any = {}
    if (props.sgfUrl) {
      options.sgf = props.sgfUrl
    }

    const editor = besogo.create(document.querySelector('#besogo-container'), options)
    props.onCreate(editor)

    return () => {
      const container = document.querySelector('#besogo-container')

      if (container) {
        container.innerHTML = ''
      }
    }
  }, [props.sgfUrl])

  return <div id="besogo-container" />
}
