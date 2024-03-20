import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { FabButton } from "../index";

describe("FabButton Component", () => {
    it("should render component correctly with given props", () => {
        const mockPressHandler = jest.fn();
        const { getByTestId } = render(
            <FabButton
                testID="fab-button-id"
                icon="check"
                iconType="FontAwesome"
                iconColor="green"
                onPress={mockPressHandler}
            />
        );

        expect(getByTestId("fab-button-id")).toBeTruthy();

        const vectorIcon = getByTestId("icon-id"); 

        expect(vectorIcon.props.name).toBe("check");
        expect(vectorIcon.props.color).toBe("green");
    });

    it("should call onPress function when the button is pressed", () => {
        const mockPressHandler = jest.fn();
        const { getByTestId } = render(
            <FabButton
                testID="fab-button-id"
                icon="check"
                iconType="FontAwesome"
                iconColor="green"
                onPress={mockPressHandler}
            />
        );

        fireEvent.press(getByTestId("fab-button-id"));

        expect(mockPressHandler).toHaveBeenCalled();
    });
});