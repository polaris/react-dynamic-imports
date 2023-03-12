import React, { Suspense } from "react";

const About = React.lazy(() => {
  return import("./About2");
});

function App() {
  return (
    <Suspense fallback={<div>Hi, This page is Loading...</div>}>
      <section>
        <About />
      </section>
    </Suspense>
  );
}

export default App;
