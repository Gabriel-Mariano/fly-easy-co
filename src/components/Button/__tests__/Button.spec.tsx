import { fireEvent, render, screen } from "@testing-library/react-native";
import { Button } from "../index";

describe("Button Component", ()=> {
    it("should render Button Component correctly", ()=> {
        const { getByText } = render(<Button title="MyButton"/>);
        expect(getByText("MyButton")).toBeTruthy();
    });
    it("should call a function when clicked", ()=> {
        const mockFn = jest.fn();
        const { getByText } = render(<Button title="MyButton" onPress={mockFn}/>);

        fireEvent.press(getByText("MyButton"));

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it("should render with icon when icon prop is provided", () => {
        const { getByTestId } = render(<Button title="MyButton with icon" icon="someIcon" />);

        const icon = getByTestId("icon-id");

        expect(icon).toBeDefined();
    });
    it("should not render icon when icon prop is not provided", () => {
        const { queryByTestId } = render(<Button title="Button without icon" />);

        const icon = queryByTestId("icon-id");
        
        expect(icon).toBeNull();
      });
})