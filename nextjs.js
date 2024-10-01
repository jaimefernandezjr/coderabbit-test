import React, { useState, useEffect } from 'react'; 

const unusedVariable = "I am not used anywhere";

const API_KEY = "12345-ABCDE";

function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  function processData(a, b, c, d, e) {
    return a + b + c + d + e;
  }

  function createMarkup() {
    return { __html: "<script>alert('XSS!')</script>" };
  }

  return (
    <div>
      <h1>Next.js Page</h1>
      
      <div style={{ color: "red" }}>This is an inline-styled div</div>
      
      <div dangerouslySetInnerHTML={createMarkup()} />
      
      <button onClick={() => { setCount(count + 1); setCount(count + 2); }}>
        Increment Count
      </button>

      <input type="text" onChange={(e) => setData(e.target.value)} />

      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
}

export default Home;
