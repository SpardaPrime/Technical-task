import renderer from "react-test-renderer";
import App from "./app";

test("snapshot: component App", () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
