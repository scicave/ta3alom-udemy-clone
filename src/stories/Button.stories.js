import "../theme.css";
import React from "react";
import { Button } from "../components/Button";
import { AiTwotoneSetting, AiTwotoneStar } from "react-icons/ai";

export default {
  title: "Components/Button",
  component: Button
};

const Template = (args) => <Button {...args}>Click me!</Button>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: "primary"
};

export const SmallSecondaryButton = Template.bind({});
SmallSecondaryButton.args = {
  size: "small",
  type: "secondary"
};

export const LargeOutlinedSecondaryButton = Template.bind({});
LargeOutlinedSecondaryButton.args = {
  size: "large",
  type: "secondary",
  outlined: true
};

export const OutlinedNormalButtonWithStartIcon = Template.bind({});

OutlinedNormalButtonWithStartIcon.args = {
  type: "normal",
  outlined: true,
  startIcon: <AiTwotoneSetting />
};

export const CustomButtonWithEndIcon = Template.bind({});
CustomButtonWithEndIcon.args = {
  outlined: false,
  endIcon: <AiTwotoneStar />,
  style: {
    "--scale": "1.5",
    "--main-color": "#0B2C0B",
    "--hover-color": "#031603",
    "--other-color": "#4FB1CF"
  }
};
