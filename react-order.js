import React, {
  useEffect,
  useLayoutEffect,
  useInsertionEffect,
  forwardRef,
  useCallback,
} from "react";

// FirstComponent
const FirstComponent = ({ children }) => {
  console.log("1", "?");

  useEffect(() => {
    console.log("2", "?");
  }, []);

  return (
    <header>
      <h1>React Order Puzzle</h1>
      {children}
    </header>
  );
};

// SecondComponent
const SecondComponent = () => {
  console.log("3", "?");

  useEffect(() => {
    console.log("4", "?");
  }, []);

  useLayoutEffect(() => {
    console.log("5", "?");
  }, []);

  const refCallback = useCallback(() => {
    console.log("6", "?");
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
  console.log("7", "?");

  useEffect(() => {
    console.log("8", "?");
  }, []);

  useLayoutEffect(() => {
    console.log("9", "?");
  }, []);

  return (
    <div>
      <p>
        In this input, you can enter the order of numbers
        <input className="input" />
      </p>
    </div>
  );
};

// App
const App = () => {
  useInsertionEffect(() => {
    console.log("10", "?");
  }, []);

  const refCallback = useCallback(() => {
    console.log("11", "?");
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

// ответ:
// 1
// 3
// 7
// 10
// 6
// 5
// 9
// 11
// 4
// 2
// 8
