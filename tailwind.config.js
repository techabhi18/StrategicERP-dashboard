const withOpacity = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
};

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        appBg: "var(--background)",
        container: "var(--surface)",
        sidebar: "var(--sidebar-bg)",
        topbar: "var(--topbar-bg)",

        primaryText: "var(--text-primary)",
        secondaryText: "var(--text-secondary)",
        disabledText: "var(--text-disabled)",

        primaryHover: "var(--primary-hover)",
        primaryActive: "var(--primary-active)",

        divider: "var(--border)",
        overlay: "var(--shadow)",

        hoverBg: "var(--hover)",
        activeBg: "var(--active)",
        disabledBg: "var(--disabled)",

        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        info: "var(--info)",
      },
    },
  },
  plugins: [],
};
