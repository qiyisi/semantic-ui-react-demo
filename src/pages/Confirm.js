import React from "react";
import { Confirm, Button } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const ConfirmExample = () => {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Wrapper>
        <Button onClick={onOpen}>Show</Button>
        <Confirm open={open} onCancel={onClose} onConfirm={onClose} />
      </Wrapper>
    </>
  );
};

export default ConfirmExample;
