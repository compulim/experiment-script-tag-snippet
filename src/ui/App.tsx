const App = ({ fontSize, site }: { fontSize?: string; site?: string }) => {
  return (
    <main>
      <h1 style={{ fontSize }}>Hello, World from {site}!</h1>
      <dl>
        <dt>font-size</dt>
        <dd>{fontSize}</dd>
      </dl>
    </main>
  );
};

export default App;
