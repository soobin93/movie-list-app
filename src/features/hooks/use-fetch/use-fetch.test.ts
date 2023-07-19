import { renderHook, act } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from 'msw/node'

import { useFetch } from "./use-fetch"

const MOCK_GENRES = [
  {
    id: 1,
    name: 'Action'
  }, {
    id: 2,
    name: 'Fiction'
  }
];

describe("useFetch hook", () => {
  const mockServer = setupServer(
    rest.get('/movie-genres', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          genres: MOCK_GENRES
        })
      );
    })
  );

  beforeAll(() => {
    mockServer.listen();
  });

  afterAll(() => {
    mockServer.close();
  })

  it("should initialize with default values", () => {
    const { result } = renderHook(() =>
      useFetch("/movie-genres", "my-token")
    );
    expect(result.current.data).toBe(undefined);
    expect(result.current.error).toBe(false);
  });

  it("should call fetch with the correct token", async () => {
    global.fetch = jest.fn();

    const { result } = renderHook(() =>
      useFetch("/movie-genres", "my-token")
    );

    await act(() => result.current.fire());

    expect(global.fetch).toHaveBeenCalledWith("/movie-genres", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer my-token",
      },
    });
  });

  it("should receive the correct response", async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ genres: MOCK_GENRES }),
      });

    const { result } = renderHook(() =>
      useFetch("/movie-genres", "my-token")
    );

    await act(() => result.current.fire());
    expect(result.current.data).toEqual({ genres: MOCK_GENRES })
  });

  it("should set error to true when fetch response fails", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("Fetch failed"));

    const { result } = renderHook(() =>
      useFetch("/movie-genres", "my-token")
    );

    await act(() => result.current.fire());

    expect(result.current.error).toBe(true);
  });
});
