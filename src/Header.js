import React from "react";
export const Header = () => {
    const [openNavBar, setOpenNavBar] = React.useState(false);
    const toggleNavBar = () => {
        setOpenNavBar(!openNavBar);
        console.log("hi");
    };
    return (
        <header class="header">
            <div class="header__navigation">
                <svg
                    height="32px"
                    class="header__navigation__hamburger"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="32px"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={toggleNavBar}
                >
                    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                </svg>

                <nav
                    class={
                        openNavBar
                            ? "header__navigation__navbar header__navigation__navbar--mobile"
                            : "header__navigation__navbar"
                    }
                >
                    <ul class="header__navbar__links">
                        <li class="header__navbar__links__link">
                            <a
                                href="https://www.google.com/search?q=emil+joshy&rlz=1C5CHFA_enIN918IN918&oq=emil+joshy&aqs=chrome..69i57j69i60l2j69i61.2819j0j15&sourceid=chrome&ie=UTF-8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                About Me
                            </a>
                        </li>
                        <li class="header__navigation__navbar__links__link">
                            <a
                                href="https://www.instagram.com/emjshrx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li class="header__navigation__navbar__links__link">
                            <a
                                href="https://www.linkedin.com/in/emil-joshy-1ab610144/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li class="header__navigation__navbar__links__link">
                            <a
                                href="https://github.com/emjshrx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__name">Emil Joshy</div>
        </header>
    );
};
