function App(props) {
  const currDate=new Date();

  return (
      <div>
          <h1>Hello, World</h1>
          <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
          <h2>The date is {currDate.toLocaleDateString()}.</h2>
      </div>
  );
}

export default App;