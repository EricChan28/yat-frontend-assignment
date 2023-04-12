import { iconHome, iconPerson, iconEmoji, iconDiamond } from "assets/icons";
import { IconButton } from "components/base/button";
import { Icon } from "components/base/icon";

const HEADER_ICONS = [
  {
    id: 1,
    content: iconHome,
    viewboxWidth: 18,
    viewboxHeight: 19,
    slug: "home",
  },
  {
    id: 2,
    content: iconPerson,
    viewboxWidth: 18,
    viewboxHeight: 19,
    slug: "person",
  },
  {
    id: 3,
    content: iconEmoji,
    viewboxWidth: 18,
    viewboxHeight: 18,
    slug: "emoji",
  },
  {
    id: 4,
    content: iconDiamond,
    viewboxWidth: 20,
    viewboxHeight: 17,
    slug: "diamond",
  },
];

export const Header = () => (
  <header>
    {HEADER_ICONS.map((icon) => (
      <IconButton key={icon.id} tabIndex={icon.id}>
        <Icon
          content={icon.content}
          viewBoxHeight={icon.viewboxHeight}
          viewBoxWidth={icon.viewboxWidth}
        />
      </IconButton>
    ))}
  </header>
);
