import * as React from 'react';
import Box from "@mui/material/Box";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

export default function Work({ prefersDarkMode }) {
    const theme = prefersDarkMode ? "muiDark" : "light";
    const prompt = ">>>";

    const commands = {
        help: (
            <span>
                <strong>clear</strong> - clears all commands and outputs given. <br />
                <strong>calculate &lt;EXPR&gt;</strong> - Evaluates a
                mathematical expression (eg, <strong>4*4</strong>) by hitting a public
                API, api.mathjs.org.
            </span>
        ),

        calculate: async (expr) => {
            const response = await fetch(
                `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expr)}`
            );
            return await response.text();
        },
    };

    const welcomeMessage = (
        <div>
            <h1 style={{ fontSize: "150%" }}>Work Experience</h1>
            <hr class="solid" />
            <ul>
                <u><li>Backend Software Engineer Co-op @ <span style={{ fontWeight: "bold" }}>VMware</span></li></u>
                <ul>
                    <li>Utilized Java, Spring, Hibernate, Maven, and PostgreSQL for backend development.</li>
                    <li>Significantly contributed to the Service Account feature, released in VMware Cloud Director v10.4.0, which dealt with OAuth 2.0 dynamic client registration and device authorization.</li>
                    <li>Developed in the REST API space, work included conversions of legacy API endpoints, introduction of new features on existing API endpoints, and performance optimizations of database calls.</li>
                    <li>Key contributor to the VMware Cloud Director Customer Experience Improvement Program, which tracks anonymized data to determine which features are useful to customers.</li>
                </ul>
                <br />
                <u><li>Fullstack Software Engineer Co-op @ <span style={{ fontWeight: "bold" }}>Ambri Inc.</span></li></u>
                <ul>
                    <li>Handled full-stack development using Django, MySQL, Python, JQuery, and JavaScript.</li>
                    <li>Developed API’s that processed data into graphical visualizations with Python and Plotly.js. </li>
                    <li>Collaborated with engineers to generate dashboards to track progress of developing battery cells, inventory and security, and other KPIs. </li>
                    <li>Increased speeds up to 170% of crucial pipeline data by managing and processing scripts using multiprocessing and pandas. </li>
                </ul>
            </ul>
            <span>Type "help" for all available commands. <br /></span>
        </div >
    );

    return (
        <Box name="work" sx={{
            height: "80vh",
            width: "80%",
            fontSize: "0px",
        }}>
            <TerminalContextProvider>
                <ReactTerminal
                    prompt={prompt}
                    theme={theme}
                    themes={{
                        muiDark: {
                            themeBGColor: "#272B36",
                            themeToolbarColor: "#38423B",
                            themeColor: "#FFFEFC",
                            themePromptColor: "#a917a8"
                        }
                    }}
                    welcomeMessage={welcomeMessage}
                    commands={commands}

                />
            </TerminalContextProvider>
        </Box>
    );
}