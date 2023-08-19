import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
