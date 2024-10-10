import {
  forwardRef,
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
  Spinner,
  SystemStyleObject,
  useMergeRefs,
  useMultiStyleConfig,
  Wrap,
  WrapItem,
  PopoverAnchor,
} from "@chakra-ui/react";
import { runIfFn } from "./utils";
import React, { useEffect } from "react";

import { useAutoCompleteContext } from "./autocomplete-context";
import { MaybeRenderProp, UseAutoCompleteReturn } from "./types";

export interface AutoCompleteInputProps extends Omit<InputProps, "children"> {
  children?: MaybeRenderProp<{ tags: UseAutoCompleteReturn["tags"] }>;
  wrapStyles?: SystemStyleObject;
  hidePlaceholder?: boolean;
  loadingIcon?: React.ReactNode;
}

const AutoCompleteInputComponent = forwardRef((props, forwardedRef) => {
  const { isLoading } = useAutoCompleteContext();
  const { loadingIcon, ...inputProps } = props;

  return (
    <InputGroup>
      <Input {...inputProps} ref={forwardedRef} />
      {isLoading && (
        <InputRightElement>{loadingIcon || <Spinner />}</InputRightElement>
      )}
    </InputGroup>
  );
});

export const AutoCompleteInput = forwardRef<AutoCompleteInputProps, "input">(
  (props, forwardedRef) => {
    const {
      autoCompleteProps,
      inputRef,
      getInputProps,
      tags,
      setQuery,
      value,
      itemList,
    } = useAutoCompleteContext();

    // const ref = useMergeRefs(forwardedRef, inputRef);

    const {
      children: childrenProp,
      isInvalid,
      hidePlaceholder,
      ...rest
    } = props;

    const { value: inputValue } = rest;

    useEffect(() => {
      if (
        value !== undefined &&
        (typeof value === "string" || value instanceof String)
      ) {
        const item = itemList.find(l => l.value === value);

        const newQuery = item === undefined ? value : item.label;

        setQuery(newQuery);
      }
    }, [value]);

    useEffect(() => {
      if (
        inputValue !== undefined &&
        (typeof inputValue === "string" || inputValue instanceof String)
      ) {
        setQuery(inputValue);
      }
    }, [inputValue]);

    const themeInput: any = useMultiStyleConfig("Input", props);

    let { wrapper, input: inputProps } = getInputProps(rest, themeInput);
    const { ref: wrapperRef, ...wrapperProps } = wrapper;
    const ref = useMergeRefs(forwardedRef, inputRef);

    const children = runIfFn(childrenProp, { tags });
    if (hidePlaceholder) {
      inputProps = {
        ...inputProps,
        placeholder:
          Array.isArray(children) && children.length
            ? undefined
            : inputProps.placeholder,
      };
    }

    const simpleInput = (
      <AutoCompleteInputComponent
        isInvalid={isInvalid}
        {...(inputProps as any)}
        ref={ref}
      />
    );

    const multipleInput = (
      <Wrap aria-invalid={isInvalid} {...wrapperProps} ref={wrapperRef}>
        {children}
        <WrapItem
          as={AutoCompleteInputComponent}
          {...(inputProps as any)}
          ref={ref}
        />
      </Wrap>
    );

    return (
      <PopoverAnchor>
        {autoCompleteProps.multiple ? multipleInput : simpleInput}
      </PopoverAnchor>
    );
  }
);

AutoCompleteInput.displayName = "Input";

AutoCompleteInput.id = "Input";
