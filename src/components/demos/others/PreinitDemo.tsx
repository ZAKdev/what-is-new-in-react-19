import { JSX, useState } from "react";
import { preinit } from "react-dom";

const PreinitDemo = (): JSX.Element => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const handlePreloadFont = () => {
        // React 19 preinit: Downloads AND applies the font stylesheet
        preinit(
            "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",
            { as: "style" }
        );
        setFontLoaded(true);
    };

    return (
        <div className="container">
            <div className="section">
                <button
                    onClick={handlePreloadFont}
                    className="btn btn-primary mb-3"
                    disabled={fontLoaded}
                >
                    {fontLoaded
                        ? "✅ Font Preloaded"
                        : "🚀 Preload Roboto Font"}
                </button>

                <div
                    className="alert alert-success"
                    style={{
                        fontFamily: fontLoaded
                            ? "Roboto, sans-serif"
                            : "inherit",
                        fontSize: "18px",
                        lineHeight: "1.6",
                    }}
                >
                    <h3 style={{ fontWeight: 700, marginBottom: "10px" }}>
                        📦 Font Demo Text
                    </h3>
                    <p style={{ fontWeight: 400, marginBottom: "8px" }}>
                        This text will use{" "}
                        {fontLoaded
                            ? "Roboto (preloaded)"
                            : "default system font"}
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PreinitDemo;
