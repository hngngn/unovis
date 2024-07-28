// !!! This code was automatically generated. You should not change it !!!
import type { TopoJSONMapConfigInterface } from "@unovis/ts";
import { TopoJSONMap } from "@unovis/ts";
import { createSignal, onCleanup, createEffect, on, onMount } from 'solid-js'
import { arePropsEqual } from '../../utils/props'
import { useVisContainer } from "../../utils/context";

export type VisTopoJSONMapProps<AreaDatum, PointDatum, LinkDatum> = TopoJSONMapConfigInterface<AreaDatum, PointDatum, LinkDatum>& {
  data?: {areas?: AreaDatum[]; points?: PointDatum[]; links?: LinkDatum[]};
};

export const VisTopoJSONMapSelectors = TopoJSONMap.selectors

export function VisTopoJSONMap<AreaDatum, PointDatum, LinkDatum>(props: VisTopoJSONMapProps<AreaDatum, PointDatum, LinkDatum>) {
  const [component, setComponent] = createSignal<TopoJSONMap<AreaDatum, PointDatum, LinkDatum>>()
   const ctx = useVisContainer();
  
  onMount(() => {
    setComponent(new TopoJSONMap<AreaDatum, PointDatum, LinkDatum>(props));
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
