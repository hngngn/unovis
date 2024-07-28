// !!! This code was automatically generated. You should not change it !!!
import type { DonutConfigInterface } from "@unovis/ts";
import { Donut } from "@unovis/ts";
import { createSignal, onCleanup, createEffect, on, onMount } from 'solid-js'
import { arePropsEqual } from '../../utils/props'
import { useVisContainer } from "../../utils/context";

export type VisDonutProps<Datum> = DonutConfigInterface<Datum>& {
  data?: Datum[];
};

export const VisDonutSelectors = Donut.selectors

export function VisDonut<Datum>(props: VisDonutProps<Datum>) {
  const [component, setComponent] = createSignal<Donut<Datum>>()
   const ctx = useVisContainer();
  
  onMount(() => {
    setComponent(new Donut<Datum>(props));
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
