import { FlexProps } from '@chakra-ui/react';
import { MaybeRenderProp } from './types';
interface AutoCompleteCreatableProps extends Omit<FlexProps, "children"> {
    children?: MaybeRenderProp<{
        value: any;
    }>;
    alwaysDisplay?: boolean;
}
export declare function AutoCompleteCreatable(props: AutoCompleteCreatableProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace AutoCompleteCreatable {
    var displayName: string;
}
export {};
//# sourceMappingURL=autocomplete-creatable.d.ts.map