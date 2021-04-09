import { IContainer } from "@aurelia/kernel";
import { Collection } from '@aurelia/runtime';
import { IInstruction, IController, IViewFactory, HydrateTemplateController, IHydratedComponentController, ICustomAttributeViewModel, IRenderLocation, IPlatform } from '@aurelia/runtime-html';
import type { IScrollerInfo, IScrollerSubscriber, IVirtualRepeater } from "./interfaces";
import type { IServiceLocator } from "@aurelia/kernel";
export interface VirtualRepeat extends ICustomAttributeViewModel {
}
export declare class VirtualRepeat implements IScrollerSubscriber, IVirtualRepeater {
    readonly location: IRenderLocation;
    readonly instruction: HydrateTemplateController;
    readonly parent: IHydratedComponentController;
    readonly factory: IViewFactory;
    readonly container: IServiceLocator;
    static get inject(): (import("@aurelia/kernel").InterfaceSymbol<IRenderLocation<ChildNode>> | import("@aurelia/kernel").InterfaceSymbol<IInstruction> | import("@aurelia/kernel").InterfaceSymbol<IController<import("@aurelia/runtime-html").IViewModel>> | import("@aurelia/kernel").InterfaceSymbol<IViewFactory> | import("@aurelia/kernel").InterfaceSymbol<IContainer> | import("@aurelia/kernel").InterfaceSymbol<IPlatform>)[];
    local: string;
    items: Collection;
    private iterable;
    private forOf;
    private hasWrapExpression;
    private obsMediator;
    private views;
    private taskQueue;
    private task;
    private itemHeight;
    private minViewsRequired;
    private collectionStrategy;
    private dom;
    private scrollerObserver;
    constructor(location: IRenderLocation, instruction: HydrateTemplateController, parent: IHydratedComponentController, factory: IViewFactory, container: IServiceLocator, platform: IPlatform);
    itemsChanged(items: Collection): void;
    private calcRealScrollTop;
    private measureBuffer;
    handleScrollerChange(scrollerInfo: IScrollerInfo): void;
    private handleScroll;
}
export declare const enum SizingSignals {
    none = 0,
    reset = 1,
    has_sizing = 2
}
