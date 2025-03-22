import useThemeStore from "../../../hooks/useThemeStore";

const themes = ["light", "green", "purple"];

export default function ThemeSwitcher() {
    const { theme, setTheme } = useThemeStore();

    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-2 border rounded"
        >
            {themes.map((t) => (
                <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
            ))}
        </select>
    );
}
