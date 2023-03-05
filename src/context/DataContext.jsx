import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) localStorage.setItem("todos", JSON.stringify(todos));

    return () => (isMounted = false);
  }, [todos]);

  return (
    <DataContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        filter,
        setFilter,
        todos,
        setTodos,
        editID,
        setEditID,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
