import ErrorIcon from "@assets/icons/error-icon.svg";
import SuccessIcon from "@assets/icons/success-icon.svg";
import WarningIcon from "@assets/icons/warning-icon.svg";
import { TDialog } from "@constants/interface";
import {
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import styles from "./ModalDialog.module.scss";

interface IDialog {
  type: TDialog;
  openDialog: boolean;
  message: string;
  onCloseDialog: () => void;
  onAcceptDialog?: () => void;
}

const ModalDialog: React.FC<IDialog> = ({
  type,
  openDialog,
  message,
  onCloseDialog,
  onAcceptDialog,
}) => {
  const getContentByType = (type: TDialog) => {
    if (type === "error") {
      return (
        <>
          <DialogContent className={`${styles["content"]}`}>
            <img src={ErrorIcon} alt={ErrorIcon} />
          </DialogContent>
          <DialogTitle>{message}</DialogTitle>
          <DialogActions className={`${styles["actions"]}`}>
            <Button onClick={onCloseDialog} variant="contained">
              OK
            </Button>
          </DialogActions>
        </>
      );
    } else if (type === "success") {
      return (
        <>
          <DialogContent className={`${styles["content"]}`}>
            <img src={SuccessIcon} alt={SuccessIcon} />
          </DialogContent>
          <DialogTitle>{message}</DialogTitle>
          <DialogActions className={`${styles["actions"]}`}>
            <Button onClick={onCloseDialog} variant="contained">
              OK
            </Button>
          </DialogActions>
        </>
      );
    } else {
      return (
        <>
          <DialogContent className={`${styles["content"]}`}>
            <img src={WarningIcon} alt={WarningIcon} />
          </DialogContent>
          <DialogTitle>{message}</DialogTitle>
          <DialogActions className={`${styles["actions"]}`}>
            <Button onClick={onCloseDialog} variant="outlined">
              Cancel
            </Button>
            <Button onClick={onAcceptDialog} variant="contained">
              OK
            </Button>
          </DialogActions>
        </>
      );
    }
  };

  return (
    <div>
      <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={`${styles["modal-dialog"]}`}
        open={openDialog}
        onClose={onCloseDialog}
      >
        {getContentByType(type)}
      </Dialog>
    </div>
  );
};

export default ModalDialog;
