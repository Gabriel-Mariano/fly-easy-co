import { fireEvent, render, waitFor,  } from "@testing-library/react-native";
import { CounterInput } from "../index";

describe("Counter Input", ()=> {
    const props = {
        value:1,
        setterValue:jest.fn(),
        increment:jest.fn(),
        decrement:jest.fn()
    } 

    it("should render correctly", ()=> {
        const component = render(<CounterInput {...props}/>);

        expect(component).toBeTruthy();
    });
    it("should check non-mandatory properties", ()=> {
        const nonMandatoryProps = {
            min:0,
            max:10,
            label:"label-test",
            disabled:true
        }
    
        const mergeProps = {...props, ...nonMandatoryProps }

        const { getByText } = render(<CounterInput {...mergeProps}  />);

        expect(mergeProps.disabled).toBe(true);
        expect(mergeProps.min).toEqual(0);
        expect(mergeProps.max).toEqual(10);
        expect(getByText("label-test")).toBeTruthy();
    });
    it("should check if the input is disabled", ()=> {
        const { getByTestId } = render(<CounterInput {...props} disabled={true}/>);

        const input = getByTestId("input-id");

        expect(input).toBeDisabled();
       
    });
    it("decrement function passed via props decreases the value by 1 when decrement button is pressed", () => {
        let value = 1;

        const decrementMock = () => {
            value -= 1;
        };

        const { getByTestId } = render(<CounterInput {...props} value={value} decrement={decrementMock}/>);
        
        const decrementButton = getByTestId('decrement-button-id');
        fireEvent.press(decrementButton);
      
        expect(value).toBe(0);
    });
    it("increment function passed via props increase the value by 2 when increment button is pressed", () => {
        let value = 1;

        const incrementMock = () => {
            value += 1;
        };

        const { getByTestId } = render(<CounterInput {...props} value={value} increment={incrementMock} />);
        
        const incrementButton = getByTestId("increment-button-id");

        fireEvent.press(incrementButton);

        expect(value).toBe(2);
    });
})