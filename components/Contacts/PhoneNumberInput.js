import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
//import "react-phone-input-2/lib/style.css";

export default class PhoneNumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }
  render() {
    return (
      <div>
        <PhoneInput
          id="contact"
          name="contact"
          country={"ke"}
          value={this.state.phone}
          onChange={(phone) => this.setState({ phone })}
          placeholder={"Phone No."}
          enableSearch
          disableSearchIcon
          inputProps={{
            required: true,
            autoFocus: true,

            className:
              "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 px-11 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
          }}
        />
      </div>
    );
  }
}
