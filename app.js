const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react and arpit!")
const root=ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading2"},"this is second heading"),React.createElement("h1",{id:"heading2"},"this is second heading2")]
));
root.render(parent);
