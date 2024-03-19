import { validateAndFormatValue, ValidateAndFormatValueProps } from "./validateValue"

describe("validate value function", ()=> {
    it("should return the formatted value if it is within the specified range", ()=> {
        const props : ValidateAndFormatValueProps = {
            currentValue:"7",
            min:2,
            max:10
        }

        expect(validateAndFormatValue(props)).toEqual(7)
    });
    it("should return the minimum value",()=> {
        const props : ValidateAndFormatValueProps = {
            currentValue:"1",
            min:2,
            max:10
        } 

        expect(validateAndFormatValue(props)).toEqual(2);
    });
    it("should return the maximum value",()=> {
        const props : ValidateAndFormatValueProps = {
            currentValue:"12",
            min:2,
            max:10
        } 

        expect(validateAndFormatValue(props)).toEqual(10);
    });
    it("should return zero case the formatted value is an empty string", ()=> {
        const props : ValidateAndFormatValueProps = {
            currentValue:"",
        } 

        expect(validateAndFormatValue(props)).toEqual(0)
    });

    it("should return the formatted value if there is no limit specified", ()=> {
        const props : ValidateAndFormatValueProps = {
            currentValue:"7",
        } 

        expect(validateAndFormatValue(props)).toEqual(7)
    });
});


