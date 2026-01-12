// theme.ts (Chakra UI v3)
// 핵심: v3에서는 defineConfig(SystemConfig)에 components가 없고,
// recipes / slotRecipes / globalCss로 커스터마이징합니다. :contentReference[oaicite:0]{index=0}

import { defineConfig, defineRecipe } from "@chakra-ui/react";

// ========== recipes (single-part components) ==========
const containerRecipe = defineRecipe({
  base: {
    w: "100%",
    maxW: "100%",
    h: "100%",
    p: "0",
  },
});

const headingRecipe = defineRecipe({
  base: {
    fontSize: "30px",
    fontWeight: "normal",
    fontFamily: "Inter",
    lineHeight: "1.8",
    m: "0",
  },
});

const textRecipe = defineRecipe({
  base: {
    fontSize: "14px",
    fontWeight: "400",
    m: "0",
  },
  variants: {
    variant: {
      typeSm: {
        fontSize: "12px",
        fontWeight: "400",
        color: "#000",
      },
      typeMd: {
        fontSize: "13px",
        fontWeight: "normal",
        color: "#000",
      },
      typeTitleSm: {
        fontSize: "14px",
        fontWeight: "700",
        color: "#000",
        p: "0",
        m: "0 0 20px",
      },
      typeTitleMd: {
        fontSize: "15px",
        fontWeight: "700",
        color: "#000",
        p: "0",
        m: "0 0 20px",
      },
      typeTitleLg: {
        fontSize: "18px",
        fontWeight: "700",
        color: "#000",
      },
      typeTitleXl: {
        fontSize: "19px",
        fontWeight: "700",
        color: "#000",
      },
      typeFormDesc: {
        fontSize: "14px",
        fontWeight: "400",
        color: "#000",
        lineHeight: "1.4",
        p: "0",
        m: "15px 0 0",
      },
      typeDltSm: {
        fontSize: "14px",
        fontWeight: "700",
        color: "blackAlpha.900",
        m: "0",
      },
      typeDldSm: {
        fontSize: "14px",
        color: "blackAlpha.700",
        m: "0",
      },
      typeDldXs: {
        fontSize: "12px",
        color: "blackAlpha.500",
        m: "0",
      },
    },
  },
});

const badgeRecipe = defineRecipe({
  variants: {
    variant: {
      typeCircle: {
        display: "inline-block",
        w: "16px",
        h: "16px",
        borderRadius: "full",
        fontSize: "0",
        p: "0px",
        mr: "7px",
        bg: "#D9D9D9",
      },
      typeCircleSm: {
        display: "inline-block",
        w: "10px",
        h: "10px",
        borderRadius: "full",
        fontSize: "0",
        p: "0px",
        mr: "5px",
        bg: "#FF0000",
      },
      alarm: {
        pos: "absolute",
        right: "0",
        top: "0",
        display: "inline-block",
        w: "4px",
        h: "4px",
        borderRadius: "10px",
        fontSize: "0",
        p: "0px",
        bg: "#ff0000",
      },
      new: {
        textTransform: "none",
        fontSize: "13px",
        lineHeight: "1.3",
        color: "#1D7C4D",
        fontWeight: "600",
        p: "0 0 0 5px",
        m: "0",
      },
      unit: {
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        fontSize: "13px",
        minH: "30px",
        lineHeight: "1.3",
        color: "#000",
        fontWeight: "700",
        borderRadius: "full",
        border: "solid 1px #000",
        p: "3px 5px 3px 5px",
        m: "0px 8px 8px 0",
      },
    },
  },
});

const buttonRecipe = defineRecipe({
  base: {
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#000",
    lineHeight: "1",
    borderRadius: "5px",
  },
  variants: {
    variant: {
      solid: {
        minW: "auto",
        h: "34px",
        color: "#fff",
        px: "15px",
        bg: "#2D2D2D",
        _hover: { bg: "#444" },
      },
      ghost: {
        justifyContent: "flex-start",
        minW: "auto",
        h: "auto",
        fontSize: "14px",
        color: "#000",
        fontWeight: "700",
        p: "0",
        _hover: { bg: "transparent" },
      },

      typeIcon: {
        pos: "relative",
        w: "24px",
        minW: "auto",
        h: "24px",
        fontSize: "24px",
        border: "none",
        borderRadius: "0",
        p: "0",
        m: "0",
        bg: "transparent",
      },
      typeIconLg: {
        pos: "relative",
        w: "64px",
        minW: "auto",
        h: "64px",
        fontSize: "24px",
        border: "none",
        borderRadius: "0",
        p: "0",
        m: "4px",
        bg: "#D9D9D9",
        _hover: { bg: "#eee" },
      },
      typeIconSm: {
        pos: "relative",
        w: "12px",
        minW: "auto",
        h: "12px",
        fontSize: "12px",
        border: "none",
        borderRadius: "0",
        p: "0",
        m: "0",
        bg: "transparent",
      },
      typeGrayLg: {
        h: "35px",
        fontSize: "19px",
        px: "10px",
        bg: "#f44",
        _hover: { bg: "#ff5" },
      },
      typeTableBtn: {
        h: "30px",
        fontSize: "14px",
        color: "#000",
        fontWeight: "400",
        borderRadius: "5px",
        border: "solid 1px #e5e5e5",
        px: "12px",
        m: "0 5px",
        bg: "#fff",
        _hover: { bg: "#eee" },
      },
      typeModalBtn: {
        h: "34px",
        fontSize: "14px",
        fontWeight: "400",
        color: "#fff",
        px: "20px",
        bg: "#2D2D2D",
        _hover: { bg: "#444" },
      },
      typePopoverBtn: {
        w: "120px",
        h: "34px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#fff",
        px: "20px",
        ml: "10px",
        bg: "#2D2D2D",
        _hover: { bg: "#444" },
      },
      typePopoverWhiteBtn: {
        w: "120px",
        h: "34px",
        fontSize: "14px",
        fontWeight: "400",
        color: "blackAlpha.800",
        border: "solid 1px #e5e5e5",
        px: "20px",
        ml: "10px",
        bg: "#fff",
        _hover: { bg: "#eee" },
      },
      typeWhiteBtnSm: {
        h: "32px",
        fontSize: "14px",
        fontWeight: "400",
        color: "blackAlpha.800",
        border: "solid 1px #e5e5e5",
        px: "10px",
        ml: "10px",
        bg: "#fff",
        _hover: { bg: "#eee" },
      },
      typeBlackBtnSm: {
        h: "32px",
        fontSize: "14px",
        fontWeight: "400",
        color: "#fff",
        border: "solid 1px #2D2D2D",
        px: "10px",
        ml: "10px",
        bg: "#2D2D2D",
        _hover: { bg: "#444" },
      },
      typeDrawerClose: {
        pos: "relative",
        w: "24px",
        minW: "auto",
        h: "18px",
        fontSize: "24px",
        color: "#999",
        border: "none",
        borderLeft: "solid 2px #999",
        borderRadius: "0",
        p: "0",
        m: "0",
        bg: "transparent",
        outline: "none",
        _focusVisible: { boxShadow: "none" },
      },
      typeCopyBtn: {
        h: "14px",
        fontSize: "12px",
        fontWeight: "600",
        color: "#000",
        p: "0",
        bg: "transparent",
        _hover: { color: "#0ACF83" },
      },
      typeAlertWhiteBtn: {
        w: "calc(100%/2 - 5px)",
        h: "32px",
        fontSize: "14px",
        fontWeight: "400",
        color: "blackAlpha.800",
        border: "solid 1px #e5e5e5",
        px: "20px",
        bg: "#fff",
        _hover: { bg: "#eee" },
      },
      typeAlertBlackBtn: {
        w: "calc(100%/2 - 5px)",
        h: "32px",
        fontSize: "14px",
        fontWeight: "700",
        color: "#fff",
        border: "solid 1px #2d2d2d",
        px: "20px",
        bg: "#2d2d2d",
        _hover: { bg: "#444" },
      },
      paginationBtn: {
        fontSize: "24px",
        color: "blackAlpha.300",
        px: "7px",
        _hover: { color: "blackAlpha.900" },
      },
      typePopoverMoreBtn: {
        w: "48px",
        h: "32px",
        fontSize: "24px",
        color: "blackAlpha.900",
        p: "0",
        ml: "10px",
        border: "solid 1px #e5e5e5",
        _hover: { color: "#fff", bg: "#0acf83" },
      },
      typeSelectBtn: {
        border: "solid 1px #e5e5e5",
        px: "10px",
        ps: "15px",
        bg: "#fff",
        "& svg": {
          transition: "transform 0.2s ease-out",
          transformOrigin: "center center",
        },
        '&[aria-expanded="true"] svg': {
          transform: "rotate(-180deg)",
        },
      },
      typeSelectModalBtn: {
        w: "100%",
        h: "32px",
        fontSize: "14px",
        fontWeight: "400",
        textAlign: "left",
        border: "solid 1px #e5e5e5",
        px: "10px",
        ps: "15px",
        bg: "#fff",
        "& svg": {
          transition: "transform 0.2s ease-out",
          transformOrigin: "center center",
        },
        '&[aria-expanded="true"] svg': {
          transform: "rotate(-180deg)",
        },
      },
      typeSelectPopoverBtn: {
        w: "100%",
        h: "32px",
        fontSize: "14px",
        fontWeight: "400",
        textAlign: "left",
        border: "solid 1px #e5e5e5",
        px: "10px",
        ps: "15px",
        bg: "#fff",
        "& svg": {
          transition: "transform 0.2s ease-out",
          transformOrigin: "center center",
        },
        '&[aria-expanded="true"] svg': {
          transform: "rotate(-180deg)",
        },
      },
      typeAvatar: {
        h: "30px",
        p: "0",
        m: "0",
        "& svg": {
          transition: "transform 0.2s ease-out",
          transformOrigin: "center center",
        },
        '&[aria-expanded="true"] svg': {
          transform: "rotate(-180deg)",
        },
      },
    },
  },
});

const inputRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        h: "39px",
        border: "solid 1px #e5e5e5",
        borderRadius: "3px",
        _placeholder: {
          fontSize: "14px",
          color: "blackAlpha.600",
          fontWeight: "200",
        },
      },
      typeModal: {
        h: "32px",
        border: "solid 1px #e5e5e5",
        borderRadius: "3px",
        _placeholder: {
          fontSize: "14px",
          color: "blackAlpha.600",
          fontWeight: "200",
        },
        _disabled: {
          fontSize: "14px",
          color: "blackAlpha.700",
          bg: "#F9F9F9",
          opacity: "1",
        },
        _readOnly: {
          fontSize: "14px",
          color: "blackAlpha.700",
          bg: "#F9F9F9",
          opacity: "1",
        },
      },
      typePopover: {
        h: "32px",
        border: "solid 1px #e5e5e5",
        borderRadius: "3px",
        _placeholder: {
          fontSize: "14px",
          color: "blackAlpha.600",
          fontWeight: "200",
        },
        _disabled: {
          fontSize: "14px",
          color: "blackAlpha.800",
          bg: "#F9F9F9",
          opacity: "0.6",
        },
        _readOnly: {
          fontSize: "14px",
          color: "blackAlpha.800",
          bg: "#F9F9F9",
          opacity: "0.6",
        },
      },
      typeDrawer: {
        h: "32px",
        fontSize: "14px",
        border: "solid 1px #e5e5e5",
        borderRadius: "3px",
        _placeholder: {
          fontSize: "14px",
          color: "blackAlpha.600",
          fontWeight: "200",
        },
        _disabled: {
          fontSize: "14px",
          color: "blackAlpha.800",
          bg: "#F9F9F9",
          opacity: "0.6",
        },
        _readOnly: {
          fontSize: "14px",
          color: "blackAlpha.800",
          bg: "#F9F9F9",
          opacity: "0.6",
        },
      },
    },
  },
});

const textareaRecipe = defineRecipe({
  variants: {
    variant: {
      typeWrite: {
        h: "150px",
        border: "solid 1px #dedede",
        borderRadius: "3px",
        _placeholder: { color: "#ccc" },
        _focus: { borderColor: "#3725FF" },
      },
      typeModal: {
        h: "60px",
        border: "solid 1px #e5e5e5",
        borderRadius: "3px",
        resize: "none",
        _placeholder: {
          fontSize: "14px",
          color: "blackAlpha.600",
          fontWeight: "200",
        },
        _disabled: {
          fontSize: "14px",
          color: "blackAlpha.700",
          bg: "#F9F9F9",
          opacity: "1",
        },
      },
    },
  },
});

const avatarRecipe = defineRecipe({
  base: {
    w: "20px",
    h: "20px",
    color: "#d9d9d9",
    bg: "#d9d9d9",
  },
});

const linkRecipe = defineRecipe({
  variants: {
    variant: {
      typeUrl: {
        color: "#428EFF",
        lineHeight: "1.4",
        borderBottom: "solid 1px #428EFF",
        _hover: { textDecoration: "none" },
      },
    },
  },
});

// ========== config ==========
const config = defineConfig({
  theme: {
    tokens: {
      breakpoints: {
        sm: { value: "320px" },
        md: { value: "768px" },
        lg: { value: "1200px" },
        xl: { value: "1600px" },
        "2xl": { value: "1900px" },
      },
      fonts: {
        body: { value: "Inter" },
        heading: { value: "Inter" },
      },
      fontWeights: {
        normal: { value: "400" },
      },
      // 필요하면 spacing도 토큰으로 확장 가능
    },

    // v3: components 대신 recipes 사용 :contentReference[oaicite:1]{index=1}
    recipes: {
      container: containerRecipe,
      heading: headingRecipe,
      text: textRecipe,
      badge: badgeRecipe,
      button: buttonRecipe,
      input: inputRecipe,
      textarea: textareaRecipe,
      avatar: avatarRecipe,
      link: linkRecipe,
    },
  },

  globalCss: {
    "html, body": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "400",
      color: "#000",
      lineHeight: "1",
      letterSpacing: "normal",
      transition: "all 0.5s ease",
      overflow: "hidden",

      "&::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
        backgroundColor: "#fff",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ddd",
        borderRadius: "10px",
        backgroundClip: "padding-box",
        border: "2px solid transparent",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#fff",
        borderRadius: "10px",
      },
    },

    // Tooltip (간단 적용)
    '[role="tooltip"]': {
      fontSize: "14px",
      fontWeight: "200",
      lineHeight: "1",
      borderRadius: "4px",
      color: "#fff",
      p: "5px 10px",
      bg: "#2d3748",
    },

    // ===== 아래부터는 v2의 "멀티파트" 스타일을 v3에서 안전하게 적용하기 위해
    // 전역 셀렉터로 처리했습니다.
    // (v3는 Dialog/Drawer/Menu/Popover/Tabs 등의 내부 구조가 v2와 다르고,
    // slotRecipes로 완전 매핑하려면 각 컴포넌트 slot 명칭에 맞춰 재구성이 필요합니다.)
    // Dialog/Drawer/Menu/Popover는 v3 문서 기준 컴포넌트입니다. :contentReference[oaicite:2]{index=2}

    // Dialog(구 Modal) 기본 폭/패딩 느낌
    '[data-scope="dialog"][data-part="content"]': {
      w: "500px",
      maxW: "none",
    },
    '[data-scope="dialog"][data-part="header"]': {
      fontSize: "18px",
      fontWeight: "700",
      p: "50px 40px 20px",
    },
    '[data-scope="dialog"][data-part="body"]': {
      p: "0px 40px 10px",
      "&::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
        backgroundColor: "#fff",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ddd",
        borderRadius: "8px",
        backgroundClip: "padding-box",
        border: "2px solid transparent",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#fff",
        borderRadius: "8px",
      },
    },
    '[data-scope="dialog"][data-part="footer"]': {
      p: "10px 40px 20px",
    },

    // Drawer
    '[data-scope="drawer"][data-part="backdrop"]': { bg: "blackAlpha.400" },
    '[data-scope="drawer"][data-part="positioner"]': { top: "60px" },
    '[data-scope="drawer"][data-part="header"]': {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      h: "125px",
      p: "30px 20px 0",
    },
    '[data-scope="drawer"][data-part="body"]': {
      p: "10px 20px 20px",
      maxH: "calc(100vh - 125px)",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
        backgroundColor: "#F1F1F1",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#bbb",
        borderRadius: "8px",
        backgroundClip: "padding-box",
        border: "2px solid transparent",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#F1F1F1",
        borderRadius: "8px",
      },
    },

    // Tabs
    '[data-scope="tabs"][data-part="list"]': {
      p: "4px",
      mb: "40px",
      borderRadius: "5px",
      bg: "#f2f2f2",
    },
    '[data-scope="tabs"][data-part="trigger"]': {
      h: "40px",
      fontSize: "16px",
      color: "blackAlpha.600",
      fontWeight: "700",
      p: "12px 0",
    },
    '[data-scope="tabs"][data-part="trigger"][data-selected]': {
      color: "#000",
      borderRadius: "5px",
      bg: "#fff",
    },
    '[data-scope="tabs"][data-part="content"]': {
      p: "0",
    },

    // Menu 리스트/아이템
    '[data-scope="menu"][data-part="content"]': {
      minW: "auto",
      p: "0",
      mt: "-5px",
      borderRadius: "3px",
      bg: "#fff",
      maxH: "300px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
        backgroundColor: "#fff",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ddd",
        borderRadius: "8px",
        backgroundClip: "padding-box",
        border: "2px solid transparent",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#fff",
        borderRadius: "8px",
      },
    },
    '[data-scope="menu"][data-part="item"]': {
      p: "10px 25px 10px 15px",
      color: "#1a1a1a",
    },
    '[data-scope="menu"][data-part="item"][data-highlighted]': {
      bg: "#efefef",
    },

    // Popover
    '[data-scope="popover"][data-part="content"]': {
      maxW: "500px",
      w: "500px",
      p: "0",
    },
    '[data-scope="popover"][data-part="body"]': {
      p: "40px 30px 0px",
    },
    '[data-scope="popover"][data-part="footer"]': {
      textAlign: "right",
      p: "10px 30px 35px",
      border: "none",
    },

    // Table (단순 스타일: th/td)
    table: {
      "& caption": { display: "none" },
      "& th": {
        textTransform: "none",
        h: "50px",
        fontSize: "16px",
        fontWeight: "400",
        fontFamily: "Inter",
        lineHeight: "1.3",
        color: "#fff",
        p: "7px 2px 7px 10px",
        bg: "#333",
        letterSpacing: "normal",
      },
      "& td": {
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1",
        color: "#888",
        borderColor: "#f2f2f2",
        p: "20px 2px 20px 10px",
        wordBreak: "break-all",
        whiteSpace: "nowrap",
        fontVariantNumeric: "normal",
        letterSpacing: "normal",
      },
    },
  },
});

// export const system = createSystem(defaultConfig, config);
export default config;
