import { render } from "@testing-library/react-native";
import { ImageProps } from "react-native";
import { AirCardHeader } from "../index";

describe("AirCardHeader Component", ()=> {
    it("should render AirCardHeader Component correctly", ()=> {
        const mockImage : ImageProps = {
            source:{
                uri:"mock-uri"
            },
            alt:"mock-alt"
        };
        
        const { 
            getByTestId,
            getByText 
        } = render(<AirCardHeader code="AAD" company="Latam" logo={mockImage} status="Agendado"/>);


        const code = getByText("AAD");
        const company = getByText("Latam");
        const logo = mockImage;
        const status = getByText("Agendado");

        expect(code).toBeTruthy();
        expect(company).toBeTruthy();
        expect(logo).toBeTruthy();
        expect(status).toBeTruthy();
        expect(getByTestId("airCardHeader-id")).toBeTruthy();
    });

})