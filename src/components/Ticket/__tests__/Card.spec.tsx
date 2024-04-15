import { fireEvent, render } from "@testing-library/react-native";
import { Ticket } from "../index";
import { IFlightsProps } from "@src/views/authenticated/home";
import { ImageProps } from "react-native";

describe("Card Component", ()=> {
    const mockImage:ImageProps = {
        source: {
            uri:"uri"
        }
    }

    const mockProps = {
        id: "1",
        logo: mockImage,
        code: "123",
        company: "Test Company",
        status: "Agendado",
        startDate: "2022-03-01",
        origin: "Origin",
        acronymOrigin: "ORI",
        departureTime: "12:00 PM",
        endDate: "2022-03-02",
        destination: "Destination",
        acronymDestination: "DES",
        landingTime: "01:00 PM"
    } as IFlightsProps;

    it("should render Card Component correctly", ()=> {
        const { getByText, getByTestId } = render(<Ticket props={mockProps} />);

        expect(getByText("Origin")).toBeTruthy();
        expect(getByText("ORI")).toBeTruthy();
        expect(getByText("12:00 PM")).toBeTruthy();
        expect(getByText("Destination")).toBeTruthy();
        expect(getByText("DES")).toBeTruthy();
        expect(getByText("01:00 PM")).toBeTruthy();

        expect(getByTestId("airCardHeader-id")).toBeTruthy();

        expect(getByTestId("airProgress-id")).toBeTruthy();
    });

    it("should call the fn when clicked", ()=> {
        const mockFn = jest.fn();
        const { getByTestId } = render(
            <Ticket props={mockProps} testID="card-id" onPress={mockFn}/>
        );

        const component = getByTestId("card-id");

        fireEvent.press(component);

        expect(mockFn).toHaveBeenCalled();
    });
});