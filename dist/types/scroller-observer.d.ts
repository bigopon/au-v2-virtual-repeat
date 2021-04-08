import { IPlatform } from "@aurelia/runtime-html";
import { IContainer } from "@aurelia/kernel";
import { IScrollerInfo, IScrollerObsererLocator, IScrollerObserver, IScrollerSubscriber } from "./interfaces";
export declare class ScrollerObserverLocator implements IScrollerObsererLocator {
    static get inject(): import("@aurelia/kernel").InterfaceSymbol<IPlatform>[];
    static register(container: IContainer): import("@aurelia/kernel").IResolver<ScrollerObserverLocator>;
    constructor(p: IPlatform);
    getObserver(scroller: HTMLElement): IScrollerObserver;
}
export declare class ScrollerObserver implements IScrollerObserver {
    readonly p: IPlatform;
    readonly scroller: HTMLElement;
    private readonly subs;
    private geo;
    constructor(p: IPlatform, scroller: HTMLElement);
    private start;
    private stop;
    private notify;
    setValue(): void;
    getValue(): IScrollerInfo;
    subscribe(sub: IScrollerSubscriber): void;
    unsubscribe(sub: IScrollerSubscriber): void;
}
