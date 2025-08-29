1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer:
getElementById return a single element with target id name, getElementsByClassName returns set o elements with same name 
and querySelector returns First matching element 
that Can select by id, class, tag.

2. How to create and insert a new element into the DOM
answer:
Fast of all we use document.createElement('element name') then use  .  sign and then
we may use innerHtml or innerText for changin or adding text.

3. What is Event Bubbling and how does it work?
answer:
Event bubbling is a types of mechanism where event occured on child and propagates upward
through it parents to root element.

4. What is Event Delegation in JavaScript? Why is it useful?
answer:
Event delegation is a technique that leverages event bubbling to manage events more efficiently.

5. What is the difference between preventDefault() and stopPropagation() methods?
answer:
preventDefault used for stop default action of browser. On the other hand
stopPropagation used for prevent the event for bubbling up.
