import { Button } from "react-bootstrap";
import { regSw, subscribe } from "./helper";
import { FormattedMessage } from "react-intl";

function App() {
  async function registerAndSubscribe() {
    try {
      const serviceWorkerReg = await regSw();
      console.log("subscribing");
      const res = await subscribe(serviceWorkerReg);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button variant="dark" onClick={registerAndSubscribe}>
      <FormattedMessage id="footer_1" />
    </Button>
  );
}
export default App;
