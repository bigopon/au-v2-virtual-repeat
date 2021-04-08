import { IPlatform, IRenderLocation } from '@aurelia/runtime-html';
import { IContainer } from '@aurelia/kernel';
import { IVirtualRepeatDom, IDomRenderer } from './interfaces';
export declare class DefaultDomRenderer implements IDomRenderer {
    protected p: IPlatform;
    static get inject(): import("@aurelia/kernel").InterfaceSymbol<IPlatform>[];
    static register(container: IContainer): import("@aurelia/kernel").IResolver<DefaultDomRenderer>;
    constructor(p: IPlatform);
    render(target: HTMLElement | IRenderLocation): IVirtualRepeatDom;
}
