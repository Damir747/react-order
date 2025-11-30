import {
  useCallback,
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  type ReactNode,
} from "react";

// FirstComponent
type FirstComponentProps = {
  children?: ReactNode;
};

const FirstComponent = ({ children }: FirstComponentProps) => {
  console.log("1", "render FirstComponent");

  useEffect(() => {
    console.log("17", "useEffect FirstComponent");
  }, []);

  useLayoutEffect(() => {
    console.log("11", "useLayoutEffect FirstComponent");
  }, []);

  const refCallback = useCallback(() => {
    console.log("10", "refCallback FirstComponent");
  }, []);

  useInsertionEffect(() => {
    console.log("5", "useInsertionEffect FirstComponent");
  }, []);

  return (
    <header ref={refCallback}>
      <h1>React Order Puzzle</h1>
      {children}
    </header>
  );
};

// SecondComponent
const SecondComponent = () => {
  console.log("2", "render SecondComponent");

  useEffect(() => {
    console.log("16", "useEffect SecondComponent");
  }, []);

  useLayoutEffect(() => {
    console.log("9", "useLayoutEffect SecondComponent");
  }, []);

  const refCallback = useCallback(() => {
    console.log("8", "refCallback SecondComponent");
  }, []);

  useInsertionEffect(() => {
    console.log("4", "useInsertionEffect SecondComponent");
  }, []);

  return (
    <h3 ref={refCallback}>
      You need to figure out what sequence the numbers are displayed in the
      console
    </h3>
  );
};

// ThirdComponent
const ThirdComponent = () => {
  console.log("3", "render ThirdComponent");

  useEffect(() => {
    console.log("18", "useEffect ThirdComponent");
  }, []);

  useLayoutEffect(() => {
    console.log("13", "useLayoutEffect ThirdComponent");
  }, []);

  const refCallback = useCallback(() => {
    console.log("12", "refCallback ThirdComponent");
  }, []);

  useInsertionEffect(() => {
    console.log("6", "useInsertionEffect ThirdComponent");
  }, []);

  return (
    <div ref={refCallback}>
      <p>
        In this input, you can enter the order of numbers
        <input className="input" />
      </p>
    </div>
  );
};

// App
const App = () => {
  console.log("0", "render App");
  useInsertionEffect(() => {
    console.log("7", "useInsertionEffect App");
  }, []);

  const refCallback = useCallback(() => {
    console.log("14", "refCallback App");
  }, []);

  useLayoutEffect(() => {
    console.log("15", "useLayoutEffect App");
  }, []);

  useEffect(() => {
    console.log("19", "useEffect App");
  }, []);

  return (
    <main className="app" ref={refCallback}>
      <FirstComponent>
        <SecondComponent />
      </FirstComponent>
      <ThirdComponent />
    </main>
  );
};

export default App;
