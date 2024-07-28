import { createContext, useContext } from 'solid-js'

type VisContainerContextType =
  | 'component'
  | 'axis'
  | 'tooltip'
  | 'annotations'
  | 'crosshair'

export type VisContainerContextProps = {
  update: (key: VisContainerContextType, value: unknown) => void
  destroy: (key: VisContainerContextType, value?: unknown) => void
}

export const VisContainerContext = createContext<VisContainerContextProps>({
  update: () => null,
  destroy: () => null,
})

export const useVisContainer = () => useContext(VisContainerContext)
