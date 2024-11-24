// ButtonIcon.stories.js
import React from "react";
import ButtonIcon from "./ButtonIcon";

export default {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  argTypes: {
    icon: {
      control: "select",
      options: [
        "delete",
        "edit",
        "save",
        "home",
        "settings",
        "user",
        "heart",
        "download",
        "refresh",
        "info",
        "lockOpen",
        "lockClosed",
        "calendar",
        "chat",
        "flag",
        "share",
        "bell",
        "menu",
        "insta",
        "facebook",
        "email",
        "linkedin",
      ],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    transparent: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "large", "normal"],
    },
  },
};

const Template = (args) => {
  return <ButtonIcon {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: "delete",
  variant: "primary",
  size: "",
  transparent: true,
};
