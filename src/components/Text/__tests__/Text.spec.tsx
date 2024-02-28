import { render } from "@testing-library/react-native";
import { Text } from "../index";

describe("Text Component", ()=> {
    it("should render with the font family Poppins by default", ()=> {
        const { getByTestId } = render(<Text testID="text-id"/>);
        
        expect(getByTestId("text-id")).toHaveStyle({ fontFamily:"Poppins-Regular"});
    })
})