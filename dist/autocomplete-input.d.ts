import { InputProps, SystemStyleObject } from '@chakra-ui/react';
import { default as React } from 'react';
import { MaybeRenderProp, UseAutoCompleteReturn } from './types';
export interface AutoCompleteInputProps extends Omit<InputProps, "children"> {
    children?: MaybeRenderProp<{
        tags: UseAutoCompleteReturn["tags"];
    }>;
    wrapStyles?: SystemStyleObject;
    hidePlaceholder?: boolean;
    loadingIcon?: React.ReactNode;
}
export declare const AutoCompleteInput: import('@chakra-ui/react').ComponentWithAs<"input", AutoCompleteInputProps>;
//# sourceMappingURL=autocomplete-input.d.ts.map