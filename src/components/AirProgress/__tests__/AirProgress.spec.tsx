import { render } from "@testing-library/react-native";
import { AirProgress } from "../index";

describe("AirProgress Component", ()=> {
    it("should apply styles conditionally with status type 'Agendado' provided", ()=> {
        const { getByTestId } = render(<AirProgress status="Agendado"/>);

        const icon = getByTestId('icon-id');
        
        expect(icon).toHaveStyle({
            position:'absolute',
            left:-12,
            width:35,
        });
        
    });

    it("should apply styles conditionally with status type 'Em Rota' provided", ()=> {
        const { getByTestId } = render(<AirProgress status="Em Rota"/>);

        const icon = getByTestId("icon-id");
        const component = getByTestId("middleContainer-id")
        
        expect(icon).toHaveStyle({
            position:'absolute',
            left: '65%', 
            width:35,
        });
        expect(component).toHaveStyle({
            width:"50%",
            backgroundColor: "#7e889a"
        })
    });

    it("should apply styles conditionally with status type 'Pousado' provided", ()=> {
        const { getByTestId } = render(<AirProgress status="Pousado"/>);

        const icon = getByTestId('icon-id');
        const compoennt = getByTestId("middleContainer-id");
        
        expect(icon).toHaveStyle({
            position:'absolute',
            left:-12,
            width:35,
        });

        expect(compoennt).toHaveStyle({
            width:'100%',
            backgroundColor: "#7e889a"
        });
        
    });
});