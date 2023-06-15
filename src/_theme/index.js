import {colors} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import typography from "./typography";
import fontFace from "./fontFace";

const baseTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: fontFace
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1180,
      xl: 1400
    }
  },
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white
    },
    brandColor: "#007dba",
    primary: {
      smoke: "#f8fcfd",
      grey2: "#ECF6FA",
      smokeBorder: "#DAE4E9",
      light: "#56798D",
      canard: "#005379",
      main: "#003b60",
      dark: "#002238",
      contrastText: colors.common.white
    },
    secondary: {
      main: "#31FEFD",
      smoke: "#E5FDFF",
      contrastText: "#002238",
    },
    tertiary: {
      main: "#007dba",
      light: "#56798D",
      contrastText: "#fff",
    },
    text: {
      dark: "#052643",
      primary: "#003b60",
      secondary: "#4C7A8F",
      light: "#c6d2d8",
      grey: "#b4b4b4",
      disabled: "#B6C4C9",
      white: colors.common.white,
    },
    grey: {
      grey1: "#032D40",
      grey2: "#2F5464",
      grey3: "#B6C4C9",
      grey4: "#D8E4EA",
      grey5: "#ECF6FA",
      grey6: "#F8FCFD",
    },
    error: {
      main: "#AB0000",
      light: "#C90000",
      dark: "#860000",
    },
    warning: {
      main: "#E38100",
      light: "#EDAE00",
      dark: "#D65300",
    },
    success: {
      main: "#00B400",
      light: "#00CF00",
      dark: "#009300",
    },
    info: {
      main: "#007DBA",
      light: "#00ABD3",
      dark: "#00509B",
    },
  },
  typography,
  shape: {
    borderRadius: 7
  }
});

const theme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: fontFace
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: "900"
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          ".MuiSelect-icon": {
            top: "calc(50% - 12px)",
          },
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          padding: "0.625rem 1rem",
          "&.MuiButton-sizeSmall": {
            fontSize: "0.625rem",
          },
          "&.MuiButtonGroup-grouped:hover": {
            zIndex: 1,
          }
        },
      },
      defaultProps: {
        disableElevation: true
      }
    },
    MuiBadge: {
      styleOverrides: {
        dot: {
          width: 10,
          height: 10,
          margin: "3px",
          borderRadius: "50%"
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          "svg": {
            width: "1.325rem",
            height: "1.325rem",
          }
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          width: "100%",
          border: "none"
        },
        columnHeaders: {
          backgroundColor: baseTheme.palette.primary.grey2,
          borderRadius: 0
        },
        columnHeader: {
          "&:not(:first-of-type)": {
            borderLeft: "solid 1px #0000001A"
          },
          "&.MuiDataGrid-columnHeader--emptyGroup": {
            background: "white",
          },
          "&.MuiDataGrid-columnHeader--filledGroup .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600",
            color: baseTheme.palette.primary.dark,
          }
        },
        row: {
          "&.Mui-selected": {
            backgroundColor: baseTheme.palette.primary.smoke
          }
        },
        footerContainer: {
          backgroundColor: baseTheme.palette.primary.canard,
          color: "white",
          ".MuiTablePagination-toolbar": {
            color: "white"
          },
          ".MuiSvgIcon-root": {
            color: "white"
          },
// ".MuiTablePagination-displayedRows": {
// color: "inherit",
// fontWeight: 500
// },
// ".MuiButtonBase-root": {
// margin: "0 .5em",
// padding: 0,
// color: baseTheme.palette.primary.main,
// backgroundColor: baseTheme.palette.secondary.main,
// }
        },
      },
      defaultProps: {
        disableRowSelectionOnClick: true
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-child(even)": {
            backgroundColor: baseTheme.palette.primary.smoke
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          "&:not(.MuiTableCell-head)": {
            borderBottom: 0
          },
          "&.MuiTableCell-head": {
            fontWeight: 900,
            paddingBottom: 1
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          overflow: "visible",
          fontStyle: "italic",
          fontSize: "0.875em",
          transform: "translate(1em, .625em) scale(1)",
          "&.Mui-focused, &.MuiFormLabel-filled": {
            transform: "translate(1em, -0.5em) scale(0.75)",
            fontStyle: "normal",
            fontWeight: "600",
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            borderColor: "#C3D2D9",
            borderRadius: 7,
          },
          "&.Mui-disabled .MuiInputBase-input": {
            color: baseTheme.palette.text.disabled,
            WebkitTextFillColor: "currentColor"
          },
        },
        input: {
          "&.MuiInputBase-input": {
            fontSize: "0.875em",
          },
          ".MuiInputBase-input::placeholder": {
            fontWeight: "300"
          }
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          textTransform: "none",
          whiteSpace: "nowrap",
          "&.Mui-selected": {
            backgroundColor: baseTheme.palette.primary.main,
            color: baseTheme.palette.secondary.main,
            pointerEvents: "none"
          }
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          fontFamily: "inherit"
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.grey.grey5,
          "&.Mui-expanded": {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }
        },
        expandIconWrapper: {
          "&.Mui-expanded": {
            transform: "rotate(45deg)",
          }
        },
        content: {
          alignItems: "center",
          gap: 3
        }
      }
    }
  }
});

export {theme, baseTheme};

