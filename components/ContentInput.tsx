import React from "react";
import { Button, Textarea } from "@nextui-org/react";

export default function ContentInput() {
  return (
    <div>
      <div className="w-full">
        <Textarea
          variant={"flat"}
          label="输入内容"
          labelPlacement="outside"
          placeholder="Enter your description"
          className=""
        />
      </div>
      <Button color="primary" size="sm" className="mt-2 float-right">
        确定
      </Button>
    </div>
  );
}
