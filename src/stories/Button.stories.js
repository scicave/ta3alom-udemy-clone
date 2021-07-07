import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    otherColor: { control: "color" }
  }
};

const Template = (args) => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: "primary"
};

export const SmallSecondaryButton = Template.bind({});
SmallSecondaryButton.args = {
  size: "small",
  color: "secondary"
};

export const LargeOutlinedSecondaryButton = Template.bind({});
LargeOutlinedSecondaryButton.args = {
  size: "large",
  color: "secondary",
  outlined: true
};
