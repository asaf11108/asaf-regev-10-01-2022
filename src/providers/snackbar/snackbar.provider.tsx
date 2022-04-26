// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { FC, useState } from "react";
import { SnackbarContext } from "./snackbar.context";
import { Snackbar } from "@mui/material";

export const SnackbarProvider: FC = ({ children }) => {
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
