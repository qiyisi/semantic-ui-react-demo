import React from "react";
import { Portal, Button, Grid, Header, Segment } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const PortalExample = () => {
  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  return (
    <>
      <Wrapper>
        <Grid columns={2}>
          <Grid.Column>
            <Button
              content="Open Portal"
              disabled={open}
              positive
              onClick={onOpen}
            />

            <Portal onClose={onClose} open={open}>
              <Segment
                style={{
                  left: "40%",
                  position: "fixed",
                  top: "50%",
                  zIndex: 1000,
                }}
              >
                <Header>This is a controlled portal</Header>
                <p>
                  Portals have tons of great callback functions to hook into.
                </p>
                <p>To close, simply click the close button or click away</p>

                <Button content="Close Portal" negative onClick={onClose} />
              </Segment>
            </Portal>
          </Grid.Column>
        </Grid>
      </Wrapper>
    </>
  );
};

export default PortalExample;
