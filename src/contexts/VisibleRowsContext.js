import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SCREEN_WIDTH } from "../utils/constant";


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
    if (window.innerWidth >= 1280) return { columns: 4, rows: 4 };
    if (window.innerWidth >= 990) return { columns: 3, rows: 4 };
    if (window.innerWidth >= 730) return { columns: 2, rows: 4 };
    if (window.innerWidth >= 480) return { columns: 2, rows: 2.5 };
    return { columns: 2, rows: 2.5 };
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

  const Initialstate = () => {
    const { columns, rows } = calculateStartColumnsAndRowsCount();
    const requiredCardCount = columns * rows;
    setCardCount(requiredCardCount);
    setVisibleRows(rows);
    setVisibleRowsSaved(rows);
  }
  
  useEffect(() => {
    Initialstate()
  }, []);

  const addRows = () => {
    const pathname = location.pathname;
    if (pathname === "/movies") setVisibleRows((prevRows) => prevRows + 1 );
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
//   setVisibleRows(0);
//    setVisibleRowsSaved(0);
    Initialstate();
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
        resetVisibleRowsContext,
        resetRows
      }}
    >
      {children}
    </VisibleRowsContext.Provider>
  );
};
