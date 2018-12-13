import * as React from 'react';
import Query from './Query';
export declare class RenderPromises {
    private queryPromises;
    private queryGraveyard;
    addQueryPromise<TData, TVariables>(queryInstance: Query<TData, TVariables>, finish: () => React.ReactNode): React.ReactNode;
    hasPromises(): boolean;
    consumeAndAwaitPromises(): Promise<any[]>;
    clear(): void;
}
export default function getDataFromTree(tree: React.ReactNode, context?: {
    [key: string]: any;
}): Promise<string>;
export declare type GetMarkupFromTreeOptions = {
    tree: React.ReactNode;
    context?: {
        [key: string]: any;
    };
    renderFunction?: (tree: React.ReactElement<any>) => string;
};
export declare function getMarkupFromTree({ tree, context, renderFunction, }: GetMarkupFromTreeOptions): Promise<string>;
