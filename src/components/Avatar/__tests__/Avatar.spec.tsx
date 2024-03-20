import { render } from "@testing-library/react-native";
import { Avatar } from "../index";
import Me from "@src/assets/me.jpeg";

describe("Avatar Component", ()=> {
    it("should render component correctly", ()=> {
        const { getByTestId } = render(<Avatar />);

        expect(getByTestId("avatar-id")).toBeTruthy();
    });
    it("should render Me.jpeg by default", ()=> {
        const { getByTestId } = render(<Avatar />);

        const component = getByTestId("avatar-id");

       const { source } = component.props;

       expect(source).toEqual(Me);
    });

    it("should render with alt only when alt prop is provided", ()=> {
        const { getByTestId } = render(<Avatar alt="alt-test"/>);

        const component = getByTestId("avatar-id");

       const { source, alt } = component.props;

       expect(alt).toBe("alt-test");
    });
    it("should render with imageUrl only when imageUrl prop is provided", ()=> {
        const { getByTestId } = render(<Avatar imageUrl="../url"/>);
    
        const component = getByTestId("avatar-id");
    
        const { source, alt } = component.props;
    
        expect(source).toEqual("../url");
        expect(alt).toBeUndefined();
    });
});