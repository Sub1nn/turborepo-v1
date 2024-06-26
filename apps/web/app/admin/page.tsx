import { Admin } from "@repo/ui/admin";
import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/inputbox";

export default function () {
  return (
    <div>
      <h1>Hello from Admin page</h1>
      <Admin />
      <Button appName="">click me</Button>
      <InputBox />
    </div>
  );
}
