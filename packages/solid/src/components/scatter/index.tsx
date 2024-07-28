// !!! This code was automatically generated. You should not change it !!!
import type { ScatterConfigInterface } from "@unovis/ts";
import { Scatter } from "@unovis/ts";
import { createSignal, onCleanup, createEffect, on, onMount } from 'solid-js'
import { arePropsEqual } from '../../utils/props'
import { useVisContainer } from "../../utils/context";

export type VisScatterProps<Datum> = ScatterConfigInterface<Datum>& {
  data?: Datum[];
};

export const VisScatterSelectors = Scatter.selectors

export function VisScatter<Datum>(props: VisScatterProps<Datum>) {
  const [component, setComponent] = createSignal<Scatter<Datum>>()
   const ctx = useVisContainer();
  
  onMount(() => {
    setComponent(new Scatter<Datum>(props));
    ctx.update("component", component());
  })

  onCleanup(() => {
    component()?.destroy()
    ctx.destroy("component");
  })

  createEffect(
    on(
      () => ({ ...props }),
      (curr, prev) => {
        if (!arePropsEqual(prev, curr)) {
          component()?.setConfig(props)
          ctx.update("component", component());
        }
      },
      {
        defer: true
      }
    )
  )

  
  createEffect(
    on(
      () => props.data,
      (data) => {
        if (data) {
          component()?.setData(data)
          ctx.update("component", component());
        }
      }
    )
  );


  return <div data-vis-component  />
}
