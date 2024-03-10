import { render } from "@testing-library/react-native";
import { Badge } from "../index";

describe("Badge Component", ()=> {
    it("should render Badge Component correctly", ()=> {
        const { queryByText } = render(<Badge status="Em Rota"/>);

        const element = queryByText("Em Rota");
        expect(element).toBeTruthy();
    });
    it("should apply styles conditionally with status type 'Agendado' provided", ()=> {
        const { getByTestId } = render(<Badge status="Agendado"/>);

        expect(getByTestId("badge-id")).toHaveStyle({
            backgroundColor:'#1c77c3'
        })
    });
    it("should apply styles conditionally with status type 'Em Rota' provided", ()=> {
        const { getByTestId } = render(<Badge status="Em Rota"/>);

       expect(getByTestId("badge-id")).toHaveStyle({
           backgroundColor:'#e39637'
       })
    });
    it("should apply styles conditionally with status type 'Pousado' provided", ()=> {
        const { getByTestId } = render(<Badge status="Pousado"/>);

       expect(getByTestId("badge-id")).toHaveStyle({
           backgroundColor:'#00cd66'
       })
    });
    
})