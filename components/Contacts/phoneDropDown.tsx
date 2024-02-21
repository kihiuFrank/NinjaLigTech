"use client";

const PhoneDropDownMenu = () => {
  return (
    <div className="flex items-center justify-center dropDownMenu absolute ">
      {/* Dropdown menu  */}
      <div
        id="dropdownAvatar"
        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        
        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-phone-button"
                          >
                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                              >
                                <div className="inline-flex items-center">
                                  <img
                                    src="/assets/countries/kenya.png"
                                    alt="kenya"
                                    width={20}
                                    height={20}
                                  />
                                  Kenya (+254)
                                </div>
                              </button>
                            </li>

                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                              >
                                <div className="inline-flex items-center">
                                  <img
                                    src="/assets/countries/nigeria.png"
                                    alt="kenya"
                                    width={20}
                                    height={20}
                                  />
                                  Nigeria (+234)
                                </div>
                              </button>
                            </li>

                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                              >
                                <div className="inline-flex items-center">
                                  <img
                                    src="/assets/countries/southAfrica.png"
                                    alt="kenya"
                                    width={20}
                                    height={20}
                                  />
                                  South Africa (+27)
                                </div>
                              </button>
                            </li>

                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                              >
                                <div className="inline-flex items-center">
                                  <img
                                    src="/assets/countries/usa.png"
                                    alt="kenya"
                                    width={20}
                                    height={20}
                                  />
                                  United States (+1)
                                </div>
                              </button>
                            </li>

                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                              >
                                <div className="inline-flex items-center">
                                  <img
                                    src="/assets/countries/uk.png"
                                    alt="kenya"
                                    width={20}
                                    height={15}
                                  />
                                  United Kingdom (+44)
                                </div>
                              </button>
                            </li>
                          </ul>
        
      </div>
    </div>
  );
};

export default PhoneDropDownMenu;
