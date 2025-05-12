import { default as React } from 'react';
import { AutoCompleteRefMethods, UseAutoCompleteProps, MaybeRenderProp } from './types';
export type AutoCompleteChildProps = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
};
export interface AutoCompleteProps extends UseAutoCompleteProps {
    children: MaybeRenderProp<AutoCompleteChildProps>;
    ref?: React.RefObject<AutoCompleteRefMethods>;
}
export declare const AutoComplete: import('@chakra-ui/react').ComponentWithAs<"div", AutoCompleteProps>;
//# sourceMappingURL=autocomplete.d.ts.map