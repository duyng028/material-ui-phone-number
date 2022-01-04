import { TextFieldProps } from "@mui/material";
import * as React from "react";

export interface CountryInfo {
  dialCode?: string;
  name?: string;
  countryCode?: string;
}

export type MuiPhoneNumberProps =  Partial<TextFieldProps> & {
  autoFormat?: boolean;
  classes?: any;
  countryCodeEditable?: boolean;
  defaultCountry?: string;
  disableAreaCodes?: boolean;
  disableCountryCode?: boolean;
  disableDropdown?: boolean;
  dropdownClass?: string;
  enableLongNumbers?: boolean;
  excludeCountries?: string[];
  inputClass?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    country?: CountryInfo
  ) => void;
  onlyCountries?: string[];
  preferredCountries?: string[];
  regions?: [string] | string;
};


export default function MuiPhoneNumber(props: MuiPhoneNumberProps): JSX.Element;
