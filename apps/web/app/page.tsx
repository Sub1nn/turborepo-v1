import { Button } from "@repo/ui/button"; // button component is coming from a separate repository or module which is packages/ui which is not part of this next js application.
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Button className={styles.button} appName="Next.js">
        Click me
      </Button>
    </div>
  );
}
