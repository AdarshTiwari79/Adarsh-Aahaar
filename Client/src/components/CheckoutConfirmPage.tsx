import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>Review your order</DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
