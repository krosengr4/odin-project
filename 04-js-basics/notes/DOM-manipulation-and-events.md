# DOM Manipulation and Events
- Document Object Model

## Document Object Model(DOM)
- The DOM is a tree-like representation of the contents of a webpage.
- A tree of "nodes" with different relationships depending on how they're arranged in the HTML doc.
- For now we will only focus on "element" nodes.

## Targeting Nodes With Selectors
- To target the nodes you want to work with, you use *selectors*.
- You can a combo of CSS-style selectors and relationship properties to target the nodes you want
to work with.

## DOM Methods
- The nodes that are selected are JavaScript objects and have properties and methods attached to
them.
### Query Selectors
- element.querySelector(selector) - Returns a reference to the first match of *selector*
- element.querySelectorAll(selectors) - Returns a "NodeList" containing references to all of the
matches of the *selectors*
    - The return value is a NodeList not an Array.
### Element creation
- document.createElement(tagName, [optionsp[]]) - Creates a new element of a tag type *tagName*
### Append Elements
- parentNode.appendChild(childNode) - appends *childNode* as the last child of *parentNode*
- parentNode.insertBefore(newNode, referenceNode) - inserts *newNode* into *parentNode* before *referenceNode*
### Altering Elements
- Using the reference to an element, you can do many useful alterations to the elements own properties.
    - Adding, removing, or altering attributes, changing classes, adding inline style information.
### Adding Inline Style
- div.style.color = "blue" - Sets the indicated style rule to the element in the div variable
- div.setAttribute("style", "color: blue; background: white;") - Set the entire inline style
### Editing attributes
- div.setAttribute("id", "theDiv") - if id exists, update it to "theDiv", else create an id called "theDiv"
- div.getAttribute("id") - returns the value of specified attribute
- div.removeAttribute("id") - removes specified attribute
### Working with classes
- div.classList.add("new") - adds class "new" to your new div
- div.classList.remove("new") - removes "new" class from div
- div.classList.toggle("active") - if "div" doesn't have class "active" then add it, if it does then
remove it.
### Adding text content
- div.textContent = "Hello world!" - creates a text node and inserts it in div
### Adding HTML content
- div.innerHTML = "<span>Hello world!</span>" - renders the HTML inside div

## Events
- Events are actions that occur on your webpage.
- They are used to allow dynamic manipulations to the DOM.
### 3 Primary Ways to use Events
1. Specify function attributes directly on HTML elements.
    - <button onclick="alert('Hello World')">Click Me</button>
2. Set properties with "on<eventType>" (onClick or onmousedown) on the DOM nodes in the js.
    - btn.onclick = () => alert("Hello World");
3. *Preferred Method* Attach event listeners to the DOM nodes in the javascript.
    - btn.addEventListener("click", () => {alert("Hello world")});
