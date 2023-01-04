// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { useState } from "react";
import { SnackbarContext } from "./snackbar.context";
import { Snackbar } from "@mui/material";
import { FCC } from "../../interfaces/general";

export const SnackbarProvider: FCC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const snackbarOpen = (text: string) => {
    setText(text);
    setOpen(true);
  }

  return (
    <SnackbarContext.Provider value={snackbarOpen}>
      {children}

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
        message={text}
      />
    </SnackbarContext.Provider>
  );
};
