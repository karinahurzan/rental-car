import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--white)",
          border: "1px solid var(--button)",
          borderRadius: "12px",
        },
      },
    },
    MuiPickerPopper: {
      styleOverrides: {
        paper: {
          backgroundColor: "var(--white)",
          border: "1px solid var(--button)",
          borderRadius: "12px",
        },
      },
    },
    MuiPapper: {
      styleOverrides: {
        paper: {
          backgroundColor: "var(--white)",
          border: "1px solid var(--button)",
          borderRadius: "12px",
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontFamily: "var(--second-family)",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "120%",
          textAlign: "center",
          color: "var(--main)",
        },
        switchViewButton: {
          display: "none",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: "var(--second-family)",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "120%",
          textAlign: "center",
          color: "var(--main)",
        },
      },
    },
    MuiPickersTextField: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          width: "100%",
          backgroundColor: "var(--inputs)",
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "125%",
          color: "var(--main)",
          border: "none",
        },
      },
    },

    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          fontFamily: "var(--second-family)",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "120%",
          textAlign: "center",
          color: "var(--gray)",
        },
      },
    },
    MuiPickersInputBase: {
      styleOverrides: {
        root: {
          padding: "0px 16px",
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "125%",
          color: "var(--main)",
        },
      },
    },
    // MuiPickersOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       padding: "0px 20px",
    //     },
    //   },
    // },
    MuiPickersSectionList: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "125%",
          color: "var(--main)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          display: "none",
        },
        root: {
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "125%",
          color: "var(--gray)",
          alignSelf: "center",
          left: "4px",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "var(--gray)",
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        button: {
          color: "var(--button)",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "flex",
          // alignItems: "flex-start",
          // justifyContent: "space-between",
        },
      },
    },
  },
});
