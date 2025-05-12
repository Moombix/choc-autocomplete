import { UseAutoCompleteReturn } from './types';
import * as React from "react";
export declare const AutoCompleteProvider: React.Provider<UseAutoCompleteReturn>, useAutoCompleteContext: () => UseAutoCompleteReturn;
type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];
export declare function createContext<ContextType>(): CreateContextReturn<ContextType>;
export {};
//# sourceMappingURL=autocomplete-context.d.ts.map