// !!! This code was automatically generated. You should not change it !!!
import type { TimelineConfigInterface } from "@unovis/ts";
import { Timeline } from "@unovis/ts";
import { createSignal, onCleanup, createEffect, on, onMount } from 'solid-js'
import { arePropsEqual } from '../../utils/props'
import { useVisContainer } from "../../utils/context";

export type VisTimelineProps<Datum> = TimelineConfigInterface<Datum>& {
  data?: Datum[];
};

export const VisTimelineSelectors = Timeline.selectors

export function VisTimeline<Datum>(props: VisTimelineProps<Datum>) {
  const [component, setComponent] = createSignal<Timeline<Datum>>()
   const ctx = useVisContainer();
  
  onMount(() => {
    setComponent(new Timeline<Datum>(props));
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
