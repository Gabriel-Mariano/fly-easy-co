import { Text } from "react-native";
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
    it("should render with contentLeft when contentLeft prop is provided", ()=> {
        const { getByText } = render(<Input contentLeft={<Text>Left</Text>}/>);
        expect(getByText("Left")).toBeOnTheScreen();
    });
    it("should not render with contentLeft when contentLeft prop is not provided", ()=> {
        const { queryByText } = render(<Input />);
        expect(queryByText("Left")).toBeNull();
    });
    it("should render with contentRight when contentRight prop is provided", ()=> {
        const { getByText } = render(<Input contentRight={<Text>Right</Text>}/>);
        expect(getByText("Right")).toBeOnTheScreen();
    });
    it("should not render with contentRight when contentRight prop is not provided", ()=> {
        const { queryByText } = render(<Input />);
        expect(queryByText("Right")).toBeNull();
    });
    it("should apply styles conditionally based on contentLeft and contentRight props", ()=> {
        const { getByTestId } = render(<Input contentLeft={<Text>Left</Text>} testID="input-id"/>);
        expect(getByTestId("input-id")).toHaveStyle({ width:"88%" });
    });
    it("should apply styles conditionally if contentLeft and contentRight is provided", ()=> {
        const { getByTestId } = render(
            <Input 
                contentLeft={<Text>Left</Text>} 
                contentRight={<Text>Right</Text>}
                testID="input-id"/>
            );
        expect(getByTestId("input-id")).toHaveStyle({ width:"76%" });
    });
})