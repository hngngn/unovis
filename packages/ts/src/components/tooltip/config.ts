/* eslint-disable no-irregular-whitespace */
import { ComponentCore } from 'core/component'

// Types
import { Position } from 'types/position'

export interface TooltipConfigInterface {
  /** An array of visualization components to interact with. Default: `[]` */
  components?: ComponentCore<unknown>[];
  /** Container to where the Tooltip component should be inserted. Default: `undefined` */
  container?: HTMLElement;
  /** Follow the mouse cursor. Default: `true` */
  followCursor?: boolean;
  /** Allow the tooltip to be hovered over and interacted with. Default: `false` */
  allowHover?: boolean;
  /** Horizontal placement of the tooltip. Default: `Position.Auto` */
  horizontalPlacement?: Position | string | undefined;
  /** Horizontal shift of the tooltip in pixels. Works only with
   * `horizontalPlacement` set to `Position.Left` or `Position.Right`.
   * Default: `0` */
  horizontalShift?: number;
  /** Vertical placement of the tooltip. Default: `Position.Top` */
  verticalPlacement?: Position | string | undefined;
  /** Vertical shift of the tooltip in pixels. Works only with
   * `verticalPlacement` set to `Position.Top` or `Position.Bottom`.
   * Default: `0` */
  verticalShift?: number;
  /** Defines the content of the tooltip and hovering over which elements should trigger it.
   * An object containing properties in the following format:
   *
   * ```
   * {
   *   [selectorString]: (d: unknown) => string | HTMLElement
   * }
   * ```
   * e.g.:
   * ```
   * {
   *   [Area.selectors.area]: (d: AreaDatum[]) => `<div>${d.value.toString()}</div>
   * }
   * ```
   */
  triggers?: {
    [selector: string]: ((data: any, i: number, elements: (HTMLElement | SVGElement)[]) => string | HTMLElement | undefined | null | void) | undefined | null;
  };
  /** Custom DOM attributes for the tooltip. Useful when you need to refer to a specific tooltip instance
   * by using a CSS selector. Attributes configuration object has the following structure:
   *
   * ```
   * {
   *   [attributeName]: attribute value
   * }
   * ```
   * e.g.:
   * ```
   * {
   *   'type': 'area-tooltip',
   *   'value': 42
   * }
   * ```
   */
  attributes?: { [attr: string]: string | number | boolean };
  /** Custom class name for the tooltip. Default: `undefined` */
  className?: string;
  /** Hide delay in milliseconds. Default: `undefined` */
  hideDelay?: number;
  /** Show delay in milliseconds. Default: `undefined` */
  showDelay?: number;
}

export const TooltipDefaultConfig: TooltipConfigInterface = {
  components: [],
  container: undefined,
  followCursor: true,
  allowHover: false,
  horizontalPlacement: Position.Auto,
  horizontalShift: 0,
  verticalPlacement: Position.Top,
  verticalShift: 0,
  attributes: {},
  triggers: {},
  className: undefined,
  showDelay: undefined,
  hideDelay: undefined,
}

