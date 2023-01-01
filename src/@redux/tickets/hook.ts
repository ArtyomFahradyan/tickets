import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Ticket, Dispatch } from "types";
import types from "./types";

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch: Dispatch = useDispatch();

  const setTickets = useCallback(
    (payload: Ticket[]) => {
      dispatch({ type: types.SET_TICKETS, payload });
    },
    [dispatch]
  );

  const setRate = useCallback(
    (payload: number) => {
      dispatch({ type: types.SET_RATE, payload });
    },
    [dispatch]
  );

  const setCurrency = useCallback(
    (payload: number) => {
      dispatch({ type: types.SET_CURRENCY, payload });
    },
    [dispatch]
  );

  const setFilters = useCallback(
    (payload: number[]) => {
      dispatch({ type: types.SET_FILTERS, payload });
    },
    [dispatch]
  );

  const clearWorkspace = useCallback(() => {
    dispatch({ type: types.CLEAR_WORKSPACE });
  }, [dispatch]);

  return {
    setTickets,
    clearWorkspace,
    setRate,
    setCurrency,
    setFilters,
  };
}
