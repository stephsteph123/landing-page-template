// AnimatedButton.stories.jsx
import React from "react";
import { NavBar } from "./NavBar";

export default {
  title: "Framer/NavBar",
  component: NavBar,
  argTypes: {},
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
