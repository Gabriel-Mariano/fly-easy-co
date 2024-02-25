import { fireEvent, render } from "@testing-library/react-native";
import { Input } from "../index";

describe("Input Component", ()=> {
    it("should render Input Component correctly", ()=> {
        const { getByTestId } = render(<Input testID="input-id"/>);
        expect(getByTestId("input-id")).toBeDefined();
    });
    it("should allow typing text", ()=> {
        const mockOnChangeText = jest.fn();
        const { getByTestId } = render(<Input value="" onChangeText={mockOnChangeText} testID="input-id" />);
        
        fireEvent.changeText(getByTestId("input-id"), "test");

        expect(mockOnChangeText).toHaveBeenCalledWith("test");
    });
    it("should render with label when label prop is provided", ()=> {
        const { getByText } = render(<Input label="some-label"/>);
        expect(getByText("some-label")).toBeDefined();
    });
    it("should not render with label when label prop is not provided", ()=> {
        const { queryByText } = render(<Input />);
        expect(queryByText("some-label")).toBeNull();
    });
})