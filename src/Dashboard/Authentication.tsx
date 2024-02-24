import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function Demo() {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <div>
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <button type="submit">Log in</button>
          </form>
        </div>
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}

export default Demo;
