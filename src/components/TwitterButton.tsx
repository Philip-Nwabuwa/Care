import { Button, ButtonProps } from "@mantine/core";
import { TwitterIcon } from "@mantine/ds";

// Twitter button as anchor
function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"a">
) {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon size="1rem" color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
}

export default TwitterButton;
