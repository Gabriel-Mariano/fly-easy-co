import React from "react";
import { render } from "@testing-library/react-native";
import { VectorIcon, Icon } from "../index";

describe("VectorIcon Component", () => {
  it("should render correctly with MaterialCommunityIcons type", () => {
    const { getByTestId } = render(
      <VectorIcon name="check" type={Icon.MaterialCommunityIcons} />
    );
    const icon = getByTestId("icon-id");

    expect(icon).toBeTruthy();
  });

  it("should render correctly with FontAwesome type", () => {
    const { getByTestId } = render(
      <VectorIcon name="check" type={Icon.FontAwesome} />
    );
    const icon = getByTestId("icon-id");

    expect(icon).toBeTruthy();
  });

  it("should render correctly with size provided", () => {
    const { getByTestId } = render(
      <VectorIcon name="check" type={Icon.FontAwesome} size={35}/>
    );
    const icon = getByTestId("icon-id");

    expect(icon).toHaveStyle({
        fontSize:35
    });
  });

  it("should render correctly with the color provided", () => {
    const { getByTestId } = render(
      <VectorIcon name="check" type={Icon.FontAwesome} color={"white"}/>
    );
    const icon = getByTestId("icon-id");

    expect(icon).toHaveStyle({
        color:"white"
    });
  });

});
