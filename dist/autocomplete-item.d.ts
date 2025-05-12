import { SystemStyleObject, FlexProps } from '@chakra-ui/react';
export interface AutoCompleteItemProps extends FlexProps {
    value: any;
    label?: string;
    fixed?: boolean;
    _focus?: SystemStyleObject | any;
    disabled?: boolean;
    _fixed?: SystemStyleObject;
    getValue?: (item: AutoCompleteItemProps["value"]) => any;
}
export declare const AutoCompleteItem: import('@chakra-ui/react').ComponentWithAs<"div", AutoCompleteItemProps>;
export declare const baseItemStyles: FlexProps;
//# sourceMappingURL=autocomplete-item.d.ts.map