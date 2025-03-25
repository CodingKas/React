import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

export default function ConfirmationModal({
  open,
  onConfirm,
  onCancel,
  onClose,
}) {
  const animation = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(0.9)",
    config: { tension: 200, friction: 20 },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={(props) => (
        <animated.div style={animation}>
          <div {...props} />
        </animated.div>
      )}
    >
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>Are you sure you want to proceed?</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="error">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
