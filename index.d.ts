import { TextFieldProps } from "@mui/material";
import * as React from "react";

export interface CountryInfo = {
  dialCode?: string
  name?: string
  countryCode?: string
}

export interface MuiPhoneNumberProps = TextFieldProps extends {
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

declare const MuiPhoneNumber: React.FC<MuiPhoneNumberProps>;

export default MuiPhoneNumber;
