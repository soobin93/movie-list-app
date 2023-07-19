import { renderHook, act } from "@testing-library/react";
import { useFetch } from "./use-fetch"

describe("useFetch", () => {
  it("should initialize with null data and false error", () => {
    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data", "my-token")
    );
    console.log(result.current);
    expect(result.current.data).toBe(undefined);
    expect(result.current.error).toBe(false);
  });

  it("should call fetch with the correct parameters", async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ foo: "bar" }),
      });

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data", "my-token")
    );

    await act(() => result.current.fire());

    expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/data", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer my-token",
      },
    });
  });

  it("should update data when fetch response is successful", async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ foo: "bar" }),
      });

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data", "my-token")
    );

    await act(() => result.current.fire());

    expect(result.current.data).toEqual({ foo: "bar" });
  });

  it("should set error to true when fetch response fails", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("Fetch failed"));

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data", "my-token")
    );

    await act(() => result.current.fire());

    expect(result.current.error).toBe(true);
  });
});
