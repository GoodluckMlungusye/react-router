import { useThemeContext, useThemeUpdateContext } from "../contexts/ThemeContext";
import ColorTheme from "../themes/ColorTheme";

export default function Home() {

  const isLightTheme = useThemeContext();
  const toggleTheme = useThemeUpdateContext();

  const themeStyles = {
    backgroundColor: isLightTheme? ColorTheme.primary: ColorTheme.secondary,
    color: isLightTheme? ColorTheme.secondary: ColorTheme.primary
  }

    return (
      <div className="home">
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.</p>
        <button style={themeStyles} onClick={toggleTheme}>CHANGE THEME</button>
      </div>
    )
  }