import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const VisibleRowsContext = createContext();

export const VisibleRowsProvider = ({ children }) => {
  const [visibleRows, setVisibleRows] = useState(0);
  const [visibleRowsSaved, setVisibleRowsSaved] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [prevPathname, setPrevPathname] = useState("");
  const location = useLocation();

  const resetVisibleRowsContext = () => {
    setVisibleRows(0);
    setVisibleRowsSaved(0);
    setCardCount(0);
    setPrevPathname("");
  };

  const calculateStartColumnsAndRowsCount = () => {
    if (window.innerWidth >= 1668) return { columns: 4, rows: 3 };
    if (window.innerWidth >= 1028) return { columns: 3, rows: 4 };
    if (window.innerWidth >= 610) return { columns: 2, rows: 4 };
    return { columns: 1, rows: 5 };
  };

  useEffect(() => {
    const pathname = location.pathname;
    if (
      (prevPathname === "/movies" ||
        prevPathname === "" ||
        prevPathname === "/saved-movies") &&
      (pathname === "/movies" || pathname === "/saved-movies")
    ) {
    } else {
      resetRows();
    }
    setPrevPathname(pathname);
  }, [location.pathname, prevPathname]);

  useEffect(() => {
    const { columns, rows } = calculateStartColumnsAndRowsCount();
    const requiredCardCount = columns * rows;
    setCardCount(requiredCardCount);
    setVisibleRows(rows);
    setVisibleRowsSaved(rows);
  }, []);

  const addRows = () => {
    const pathname = location.pathname;
    if (pathname === "/movies") setVisibleRows((prevRows) => prevRows + 1);
    else {
      setVisibleRowsSaved((prevRows) => prevRows + 1);
    }
  };

  const getRows = () => {
    const pathname = location.pathname;
    if (pathname === "/movies") return visibleRows;
    else {
      return visibleRowsSaved;
    }
  };

  const resetRows = () => {
    setVisibleRows(2);
    setVisibleRowsSaved(2);
  };

  return (
    <VisibleRowsContext.Provider
      value={{
        getRows,
        addRows,
        visibleRows,
        visibleRowsSaved,
        cardCount,
        setCardCount,
        calculateStartColumnsAndRowsCount,
        resetVisibleRowsContext
      }}
    >
      {children}
    </VisibleRowsContext.Provider>
  );
};
