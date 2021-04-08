import { IContainer } from "@aurelia/kernel";
import { ICollectionStrategy, ICollectionStrategyLocator } from "./interfaces";
export declare class CollectionStrategyLocator implements ICollectionStrategyLocator {
    static register(container: IContainer): import("@aurelia/kernel").IResolver<CollectionStrategyLocator>;
    getStrategy(items: unknown): ICollectionStrategy;
}
