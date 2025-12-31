import { QueryClient } from '@tanstack/react-query';
import { createRouter as createRouter$1, createRootRouteWithContext, createFileRoute, lazyRouteComponent, Outlet, ScriptOnce, HeadContent, Scripts } from '@tanstack/react-router';
import { jsx, jsxs } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { createContext, forwardRef, useState, useEffect, useRef, useContext } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Sun, Moon, Menu, X, XIcon } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = createContext(initialState);
function ThemeProvider(t0) {
  const $ = c(20);
  let children;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      children,
      defaultTheme: t1,
      storageKey: t2,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    children = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  const defaultTheme = t1 === void 0 ? "system" : t1;
  const storageKey = t2 === void 0 ? "vite-ui-theme" : t2;
  let t3;
  if ($[5] !== defaultTheme || $[6] !== storageKey) {
    t3 = () => {
      {
        return defaultTheme;
      }
    };
    $[5] = defaultTheme;
    $[6] = storageKey;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const [theme, setTheme] = useState(t3);
  let t4;
  let t5;
  if ($[8] !== theme) {
    t4 = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
        return;
      }
      root.classList.add(theme);
    };
    t5 = [theme];
    $[8] = theme;
    $[9] = t4;
    $[10] = t5;
  } else {
    t4 = $[9];
    t5 = $[10];
  }
  useEffect(t4, t5);
  let t6;
  if ($[11] !== storageKey) {
    t6 = (theme_0) => {
      localStorage.setItem(storageKey, theme_0);
      setTheme(theme_0);
    };
    $[11] = storageKey;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t6 || $[14] !== theme) {
    t7 = {
      theme,
      setTheme: t6
    };
    $[13] = t6;
    $[14] = theme;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  const value = t7;
  let t8;
  if ($[16] !== children || $[17] !== props || $[18] !== value) {
    t8 = /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
    $[16] = children;
    $[17] = props;
    $[18] = value;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  return t8;
}
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function TooltipProvider(t0) {
  const $ = c(6);
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      delayDuration: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
    $[2] = t1;
  } else {
    props = $[1];
    t1 = $[2];
  }
  const delayDuration = t1 === void 0 ? 0 : t1;
  let t2;
  if ($[3] !== delayDuration || $[4] !== props) {
    t2 = /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delayDuration, ...props });
    $[3] = delayDuration;
    $[4] = props;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
}
function Tooltip(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipContent(t0) {
  const $ = c(13);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      sideOffset: t1,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const sideOffset = t1 === void 0 ? 0 : t1;
  let t2;
  if ($[5] !== className) {
    t2 = cn("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" });
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== children || $[9] !== props || $[10] !== sideOffset || $[11] !== t2) {
    t4 = /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, { "data-slot": "tooltip-content", sideOffset, className: t2, ...props, children: [
      children,
      t3
    ] }) });
    $[8] = children;
    $[9] = props;
    $[10] = sideOffset;
    $[11] = t2;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
const navItems = [{
  id: "about",
  label: "Home"
}, {
  id: "experience",
  label: "Impact"
}, {
  id: "professional-projects",
  label: "Projects"
}, {
  id: "connect",
  label: "Connect"
}];
const SECTION_IDS = navItems.map((item) => item.id);
function useScrollSpy(headerRef) {
  const $ = c(13);
  const [activeSection, setActiveSection] = useState("about");
  const [headerHeight, setHeaderHeight] = useState(80);
  let t0;
  if ($[0] !== headerRef.current) {
    t0 = () => {
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      const resizeObserver = new ResizeObserver(() => {
        setHeaderHeight(headerElement.offsetHeight);
      });
      resizeObserver.observe(headerElement);
      return () => resizeObserver.disconnect();
    };
    $[0] = headerRef.current;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== headerRef) {
    t1 = [headerRef];
    $[2] = headerRef;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  useEffect(t0, t1);
  let t2;
  let t3;
  if ($[4] !== headerHeight) {
    t2 = () => {
      if (headerHeight === 0) {
        return;
      }
      const observer = new IntersectionObserver((entries) => {
        const intersectingEntries = entries.filter(_temp);
        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries.reduce(_temp2);
          const newActiveSection = mostVisibleEntry.target.id;
          setActiveSection(newActiveSection);
        }
      }, {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: [0.1, 0.5, 0.9]
      });
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
      return () => observer.disconnect();
    };
    t3 = [headerHeight];
    $[4] = headerHeight;
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  useEffect(t2, t3);
  let t4;
  if ($[7] !== headerHeight) {
    t4 = (id_0) => {
      const el_0 = document.getElementById(id_0);
      if (!el_0) {
        return;
      }
      const elementPosition = el_0.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
      setTimeout(() => setActiveSection(id_0), 100);
    };
    $[7] = headerHeight;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const navigateTo = t4;
  let t5;
  if ($[9] !== activeSection || $[10] !== headerHeight || $[11] !== navigateTo) {
    t5 = {
      activeSection,
      navigateTo,
      headerHeight
    };
    $[9] = activeSection;
    $[10] = headerHeight;
    $[11] = navigateTo;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
}
function _temp2(prev, current) {
  return prev.intersectionRatio > current.intersectionRatio ? prev : current;
}
function _temp(e) {
  return e.isIntersecting;
}
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button(t0) {
  const $ = c(16);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
      size: t2,
      asChild: t3,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  const variant = t1 === void 0 ? "default" : t1;
  const size = t2 === void 0 ? "default" : t2;
  const asChild = t3 === void 0 ? false : t3;
  const Comp = asChild ? Slot : "button";
  let t4;
  if ($[6] !== className || $[7] !== size || $[8] !== variant) {
    t4 = cn(buttonVariants({
      variant,
      size,
      className
    }));
    $[6] = className;
    $[7] = size;
    $[8] = variant;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== Comp || $[11] !== props || $[12] !== size || $[13] !== t4 || $[14] !== variant) {
    t5 = /* @__PURE__ */ jsx(Comp, { "data-slot": "button", "data-variant": variant, "data-size": size, className: t4, ...props });
    $[10] = Comp;
    $[11] = props;
    $[12] = size;
    $[13] = t4;
    $[14] = variant;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  return t5;
}
function Dialog(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogPortal(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogOverlay(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(DialogPrimitive.Overlay, { "data-slot": "dialog-overlay", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function DialogContent(t0) {
  const $ = c(15);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      children,
      showCloseButton: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const showCloseButton = t1 === void 0 ? true : t1;
  let t2;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(DialogOverlay, {});
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== className) {
    t3 = cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className);
    $[6] = className;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== showCloseButton) {
    t4 = showCloseButton && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { "data-slot": "dialog-close", className: "ring-offset-background focus:ring-ring absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-black/90 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
      /* @__PURE__ */ jsx(XIcon, {}),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] });
    $[8] = showCloseButton;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== children || $[11] !== props || $[12] !== t3 || $[13] !== t4) {
    t5 = /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
      t2,
      /* @__PURE__ */ jsxs(DialogPrimitive.Content, { "data-slot": "dialog-content", className: t3, ...props, children: [
        children,
        t4
      ] })
    ] });
    $[10] = children;
    $[11] = props;
    $[12] = t3;
    $[13] = t4;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  return t5;
}
function DialogTitle(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("text-lg leading-none font-semibold", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(DialogPrimitive.Title, { "data-slot": "dialog-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function DropdownMenu(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuContent(t0) {
  const $ = c(10);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      sideOffset: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  const sideOffset = t1 === void 0 ? 4 : t1;
  let t2;
  if ($[4] !== className) {
    t2 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== sideOffset || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, { "data-slot": "dropdown-menu-content", sideOffset, className: t2, ...props }) });
    $[6] = props;
    $[7] = sideOffset;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function DropdownMenuItem(t0) {
  const $ = c(12);
  let className;
  let inset;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      inset,
      variant: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = inset;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    inset = $[2];
    props = $[3];
    t1 = $[4];
  }
  const variant = t1 === void 0 ? "default" : t1;
  let t2;
  if ($[5] !== className) {
    t2 = cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== inset || $[8] !== props || $[9] !== t2 || $[10] !== variant) {
    t3 = /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: t2, ...props });
    $[7] = inset;
    $[8] = props;
    $[9] = t2;
    $[10] = variant;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function ModeToggle() {
  const $ = c(11);
  const {
    setTheme
  } = useTheme();
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
      /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== setTheme) {
    t1 = /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" });
    $[1] = setTheme;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== setTheme) {
    t2 = /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" });
    $[3] = setTheme;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== setTheme) {
    t3 = /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" });
    $[5] = setTheme;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
    t4 = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      t0,
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
        t1,
        t2,
        t3
      ] })
    ] });
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
function NavLink(t0) {
  const $ = c(10);
  const {
    item,
    activeSection,
    isMobile,
    onClick
  } = t0;
  let t1;
  if ($[0] !== item.id || $[1] !== onClick) {
    t1 = () => onClick(item.id);
    $[0] = item.id;
    $[1] = onClick;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const t2 = isMobile ? "text-3xl font-medium py-6 px-4" : "py-2 px-4 text-sm";
  const t3 = activeSection === item.id ? "text-brand-primary-light" : "text-muted-foreground hover:text-brand-primary-light";
  let t4;
  if ($[3] !== t2 || $[4] !== t3) {
    t4 = cn("rounded transition-colors duration-200", t2, t3);
    $[3] = t2;
    $[4] = t3;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== item.label || $[7] !== t1 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsx("button", { onClick: t1, className: t4, children: item.label });
    $[6] = item.label;
    $[7] = t1;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
}
function MobileMenu(t0) {
  const $ = c(15);
  const {
    activeSection,
    onLinkClick
  } = t0;
  const [open, setOpen] = useState(false);
  let t1;
  if ($[0] !== onLinkClick) {
    t1 = (id) => {
      onLinkClick(id);
      setOpen(false);
    };
    $[0] = onLinkClick;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleNavClick = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", "aria-label": "Open menu", children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }) }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: "Navigation Menu" });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== activeSection || $[5] !== handleNavClick) {
    t4 = navItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { item, activeSection, isMobile: true, onClick: handleNavClick }) }, item.id));
    $[4] = activeSection;
    $[5] = handleNavClick;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t4) {
    t5 = /* @__PURE__ */ jsx("ul", { className: "flex flex-col items-center space-y-6", children: t4 });
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-4 top-4", "aria-label": "Close menu", onClick: () => setOpen(false), children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) });
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t5) {
    t7 = /* @__PURE__ */ jsxs(DialogContent, { showCloseButton: false, className: "flex h-dvh max-h-none w-screen max-w-none flex-col items-center justify-center border-none bg-background/95 backdrop-blur-md", children: [
      t3,
      t5,
      t6
    ] });
    $[10] = t5;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== open || $[13] !== t7) {
    t8 = /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      t2,
      t7
    ] });
    $[12] = open;
    $[13] = t7;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  return t8;
}
const Navbar = forwardRef((t0, ref) => {
  const $ = c(19);
  const {
    activeSection,
    navigateTo
  } = t0;
  let t1;
  if ($[0] !== navigateTo) {
    t1 = /* @__PURE__ */ jsx("button", { onClick: () => navigateTo("about"), className: "text-lg font-bold text-foreground transition-colors hover:text-brand-primary", children: "Kevin Diesenberg" });
    $[0] = navigateTo;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== activeSection || $[3] !== navigateTo) {
    t2 = navItems.map((item) => /* @__PURE__ */ jsx(NavLink, { item, activeSection, onClick: navigateTo }, item.id));
    $[2] = activeSection;
    $[3] = navigateTo;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(ModeToggle, {});
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== t2) {
    t4 = /* @__PURE__ */ jsxs("nav", { className: "hidden items-center space-x-2 md:flex", children: [
      t2,
      t3
    ] });
    $[6] = t2;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(ModeToggle, {});
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== activeSection || $[10] !== navigateTo) {
    t6 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:hidden", children: [
      t5,
      /* @__PURE__ */ jsx(MobileMenu, { activeSection, onLinkClick: navigateTo })
    ] });
    $[9] = activeSection;
    $[10] = navigateTo;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== t1 || $[13] !== t4 || $[14] !== t6) {
    t7 = /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
      t1,
      t4,
      t6
    ] });
    $[12] = t1;
    $[13] = t4;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== ref || $[17] !== t7) {
    t8 = /* @__PURE__ */ jsx("header", { ref, className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md", children: t7 });
    $[16] = ref;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  return t8;
});
Navbar.displayName = "Navbar";
function Footer() {
  const $ = c(2);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = (/* @__PURE__ */ new Date()).getFullYear();
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const currentYear = t0;
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx("footer", { className: "border-t border-border/20 bg-background py-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground", children: "Kevin Diesenberg" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "\xA9 ",
        currentYear,
        " All rights reserved."
      ] })
    ] }) }) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
function StructuredData() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kevin Diesenberg",
      image: "https://www.kevindiesenberg.com/favicon.ico",
      gender: "male",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.kevindiesenberg.com"
      },
      jobTitle: "Web Developer | Software Engineer",
      description: "Web Developer & Software Engineer specializing in enterprise media platforms and video analytics APIs. Built features serving 6 local news stations across NBC, CBS, and ABC affiliates for Graham Media Group.",
      url: "https://www.kevindiesenberg.com",
      sameAs: ["https://linkedin.com/in/kevindiesenberg", "https://github.com/kdiesenberg", "https://medium.com/@kevdies", "https://twitter.com/KevinDiesenberg"],
      worksFor: {
        "@type": "Organization",
        name: "Graham Media Group",
        description: "Media company operating NBC, CBS, and ABC affiliate stations across 4 states",
        url: "https://www.grahammedia.com"
      },
      knowsLanguage: ["English"],
      knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "ArcXP CMS", "Nielsen DCR Analytics", "Chartbeat Analytics", "Video Player APIs", "Broadcast Media Technology", "Enterprise API Integration", "Anyclip Video Platform", "Bitmovin Video Platform", "AWS Infrastructure", "Sentry Monitoring", "Braze"],
      hasOccupation: {
        "@type": "Occupation",
        name: "Web Developer",
        description: "Software engineer specializing in enterprise media platforms, video analytics integration, and broadcast technology solutions for news organizations.",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.kevindiesenberg.com"
        },
        occupationLocation: {
          "@type": "Country",
          name: "United States"
        },
        skills: ["Enterprise Media Platforms", "Video Analytics Integration", "Broadcast Technology", "Content Management Systems", "API Development"]
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Michigan",
        addressCountry: "US"
      },
      email: "kdiesenb@gmail.com",
      alumniOf: {
        "@type": "Organization",
        name: "Flatiron School",
        description: "Software Engineering Bootcamp"
      },
      workExample: [{
        "@type": "CreativeWork",
        name: "Video Analytics Integration",
        description: "Nielsen DCR and Chartbeat analytics integrated into Anyclip and Bitmovin video players",
        creator: {
          "@type": "Person",
          name: "Kevin Diesenberg"
        }
      }, {
        "@type": "CreativeWork",
        name: "ArcXP CMS Templates",
        description: "Custom templates and pages built for content editors and publishers",
        creator: {
          "@type": "Person",
          name: "Kevin Diesenberg"
        }
      }],
      nationality: "American",
      birthPlace: {
        "@type": "Place",
        name: "United States"
      }
    };
    t0 = /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData)
    } });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function MainLayout(t0) {
  const $ = c(13);
  const {
    children
  } = t0;
  const headerRef = useRef(null);
  const {
    activeSection,
    navigateTo,
    headerHeight
  } = useScrollSpy(headerRef);
  const t1 = `${headerHeight}px`;
  let t2;
  if ($[0] !== t1) {
    t2 = {
      "--header-height": t1
    };
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const t3 = t2;
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(StructuredData, {});
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  let t5;
  if ($[3] !== activeSection || $[4] !== navigateTo) {
    t5 = /* @__PURE__ */ jsx(Navbar, { ref: headerRef, activeSection, navigateTo });
    $[3] = activeSection;
    $[4] = navigateTo;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== children) {
    t6 = /* @__PURE__ */ jsx("main", { id: "main-content", className: "min-h-screen", children });
    $[6] = children;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  let t7;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Footer, {});
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  let t8;
  if ($[9] !== t3 || $[10] !== t5 || $[11] !== t6) {
    t8 = /* @__PURE__ */ jsxs("div", { style: t3, children: [
      t4,
      t5,
      t6,
      t7
    ] });
    $[9] = t3;
    $[10] = t5;
    $[11] = t6;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  return t8;
}
const appCss = "/assets/app-CUYOSubo.css";
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "Kevin Diesenberg | Software Engineer"
    }, {
      name: "description",
      content: "Full-stack software engineer specializing in React, TypeScript, and modern web technologies."
    }],
    links: [{
      rel: "stylesheet",
      href: appCss
    }, {
      rel: "icon",
      href: "/favicon.ico"
    }]
  }),
  component: RootComponent
});
function RootComponent() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsxs(ThemeProvider, { defaultTheme: "system", storageKey: "portfolio-theme", children: [
      /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsx(Outlet, {}) }) }),
      /* @__PURE__ */ jsx(Analytics, {}),
      /* @__PURE__ */ jsx(SpeedInsights, {})
    ] }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function RootDocument(t0) {
  const $ = c(5);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(ScriptOnce, { children: `document.documentElement.classList.toggle(
            'dark',
            localStorage.getItem('portfolio-theme') === 'dark' ||
            (localStorage.getItem('portfolio-theme') !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
          )` }),
      /* @__PURE__ */ jsx(HeadContent, {})
    ] });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  let t3;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(Scripts, {});
    t3 = false;
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  let t4;
  if ($[3] !== children) {
    t4 = /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
      t1,
      /* @__PURE__ */ jsxs("body", { children: [
        children,
        t2,
        t3
      ] })
    ] });
    $[3] = children;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
}
const $$splitComponentImporter = () => import('./index-BQOGw5Hq.mjs');
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
  const queryClient = new QueryClient();
  const router2 = createRouter$1({
    routeTree,
    context: {
      queryClient
    },
    defaultPreload: "intent",
    scrollRestoration: true
  });
  return router2;
}
function getRouter() {
  return createRouter();
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRouter,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));

export { Button as B, DialogTitle as D, Tooltip as T, TooltipTrigger as a, TooltipContent as b, cn as c, DialogContent as d, Dialog as e, router as r };
//# sourceMappingURL=router-BY-ncZr1.mjs.map
