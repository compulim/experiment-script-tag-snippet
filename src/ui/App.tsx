type Props = {
  fontSize?: string;
  site?: string;
};

const App = ({ fontSize, site }: Props) => {
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
