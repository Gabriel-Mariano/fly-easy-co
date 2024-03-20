import { act, renderHook } from "@testing-library/react-native";
import { useOnLongPress } from "./index";

describe("Hook useOnLongPress", ()=> {
    it("should start the time correctly", ()=> {
        jest.useFakeTimers();

        const callback = jest.fn();
        const delay = 200;

        const { result } = renderHook(()=> useOnLongPress(callback,delay));
        const { onPressIn } = result.current;

        act(()=> {
            onPressIn();
            jest.advanceTimersByTime(200);
        });

        expect(callback).toHaveBeenCalledTimes(1);
    });
    it("should stop the time correctly", ()=> {
        jest.useFakeTimers();

        const callback = jest.fn();

        const { result } = renderHook(()=> useOnLongPress(callback));
        const { onPressOut } = result.current;

        act(()=> {
            onPressOut();
            jest.advanceTimersByTime(100);
        });

        expect(callback).toHaveBeenCalledTimes(0);
    });
    it("should start with delay provided", ()=> {
        jest.useFakeTimers();

        const callback = jest.fn();
        const delay = 200;

        const { result } = renderHook(()=> useOnLongPress(callback, delay));
        const { onPressIn } = result.current;

        act(() => {
            onPressIn();
        });

        // Avança o tempo em 100ms (menos do que o delay)
        act(() => {
            jest.advanceTimersByTime(100);
        });

        // Verifica se o callback ainda não foi chamado
        expect(callback).toHaveBeenCalledTimes(0);

        // Avança o tempo em mais 100ms (totalizando o delay)
        act(() => {
            jest.advanceTimersByTime(100);
        });

        // Verifica se o callback foi chamado após o tempo de espera (delay)
        expect(callback).toHaveBeenCalledTimes(1);
    });
});