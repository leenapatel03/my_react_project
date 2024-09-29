import logo from "../assets/logo.svg";

export const Header = (
  { theme, setTheme } // eslint-plugin-react
) => {
  return (
    <>
      <div className="head-part">
        <div className="logo-box">
          <img src={logo} alt="my logo" />
          <p className="head-name">Taskmate</p>
        </div>
        <div className="theme-box">
          <span
            className={theme === "one" ? "choose one active-it" : "choose one"}
            onClick={() => setTheme("one")}
          ></span>

          <span
            className={theme === "two" ? "choose two active-it" : "choose two"}
            onClick={() => setTheme("two")}
          ></span>
          <span
            className={
              theme === "three" ? "choose three active-it" : "choose three"
            }
            onClick={() => setTheme("three")}
          ></span>
        </div>
      </div>
    </>
  );
};
