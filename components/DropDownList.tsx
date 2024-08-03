import * as DropdownMenu from "zeego/dropdown-menu";
import RoundBtn from "./RoundBtn";

const DropDownList = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundBtn icon={"ellipsis-horizontal"} title="More" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        loop={true}
        side="bottom"
        align="start"
        alignOffset={0}
        avoidCollisions={true}
        collisionPadding={10}
        sideOffset={5}
      >
        <DropdownMenu.Item key="statement">
          <DropdownMenu.ItemIcon />
          <DropdownMenu.ItemTitle>statement</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        <DropdownMenu.Item key="converter">
          <DropdownMenu.ItemIcon />
          <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        <DropdownMenu.Item key="background">
          <DropdownMenu.ItemIcon />
          <DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        <DropdownMenu.Item key="account">
          <DropdownMenu.ItemIcon />
          <DropdownMenu.ItemTitle>Account</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropDownList;
