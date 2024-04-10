 class Node {

  constructor(tag, id, classes, children) {
      // Tag name of the node.
      this.tag = tag;
      // ID name of the node.
      this.id = id;
      // Array of CSS class names (string) on this element.
      this.classes = classes;
      // Array of child nodes.
      this.children = children; // All children are of type Node
  }

  /**
   * Returns descendent nodes matching the selector. Selector can be 
   * a tag name or a CSS class name.
   * 
   * For example: 
   * 
   * 1.
   * <div> 
   *   <span id="span-1"></span>
   *   <span id="span-2"></span>
   *   <div>
   *     <span id="span-3"></span>
   *   </div>
   * </div>
   * Selector `span` should return 3 span nodes in this order
   * span-1 -> span-2 -> span-3.
   *
   * 2.
   * <div> 
   *   <span id="span-1" class="note"></span>
   *   <span id="span-2"></span>
   *   <div>
   *     <span id="span-3"></span>
   *   </div>
   * </div>
   * Selector `.note` should return one span node with `note` class.
   *
   * 3.
   * <div> 
   *   <span id="span-1"></span>
   *   <span id="span-2"></span>
   *   <article>
   *     <div>
   *       <span id="span-3"></span>
   *     </div>
   *   </article>
   * </div>
   * Selector `div span` should return three span nodes in this order
   * span-1 -> span-2 -> span-3.
   * 
   * 
   * 
   * 
   * @param {string} the selector string.
   * @returns {Array} Array of descendent nodes.
   * @public
   */
  search(selector) {
      //handle the invalid input
      try {
          if (selector === null || selector === undefined) {
              return "input is invalid";
          }

          let array = [];
          let subClasses = [];

          //Check if the selector have child or not
          function checkChlid(checkchild) {
              if (checkchild == null) {
                  return true;
              } else {
                  return false;
              }
          }

          //Check if the selector is a class
          function checkClass(checkclass) {
              if (checkclass[0] === ".") {
                  return true;
              } else {
                  return false;
              }
          }

          //Check tags
          function checkTags(sel) {
              let flag = false;
              for (let s of sel) {
                  if (s === " ") {
                      flag = true;
                  }
              }
              //if this selector have other tags, split it
              if (flag === false) {
                  return false;
              } else if (flag === ture) {
                  tags = selector.split(" ");
                  return true;
              }
          }

          //Find element
          function findElement(node) {
              let checkchlid = checkChlid(node.children);
              //Check if this node has child
              if (checkchlid == true) {
                  //If this node doesn't child
                  if (array.length === 0 || array.length > 0) {
                      return array;
                  }
                  return;
              } else {
                  //If this node has child
                  let nodeChildren = node.children;
                  /*Traverse the entire node and store the elements 
                  that meet the requirements into the array*/
                  nodeChildren.forEach(element => {
                      if (element.tag === selector) {
                          array.push(element.id);
                      } else if (element == null) {
                          return;
                      } else {
                          findElement(element);
                      }
                  });
              }
              return array;
          }

          // Find Class
          function findClass(node) {
              let checkchlid = checkChlid(node.children);
              if (checkchlid == true) {
                  return array;
              }else {
                  let nodeChildren = node.children;
                  /*Traverse the entire node and store the elements 
                  that meet the requirements into the array*/
                  nodeChildren.forEach(element => {
                      let checkclasses = checkChlid(element.classes);
                      if (checkclasses == true) {
                          return;
                      } else {
                          subClasses = element.classes;
                          subClasses.forEach(classelement => {
                              if (classelement === selector) {
                                  array.push(element.id);
                              } else {
                                  findClass(element);
                              }
                          });
                      }
                  });
              }
              return array;
          }

          function findSelector(node, selector) {
              let checkchlid = checkChlid(node.children);
              if (checkchlid == true) {
                  if (array.length === 0 || array.length > 0) {
                      return array;
                  }
                  return;
              } else {
                  let nodeChildren = node.children;
                  /*Traverse the entire node and store the elements 
                  that meet the requirements into the array*/
                  nodeChildren.forEach(element => {
                      if (element.tag === selector) {
                          array.push(element);
                      } else if (element == null) {
                          return;
                      } else {
                          findElement(element);
                      }
                  });
              }
              return array;
          }

          if (checkClass(selector)) {
              return findClass(this);
          } else if (checkTags(selector)) {
              return findSelector(this, selector);
          } else {
              return findElement(this);
          }

      } catch (err) {
          console.log(err);
          console.error(err.message);
      }

  }
}

/*define the dom tree base on:
<body id="content">
  <div id="div-1" class="mainContainer">
      <span id="span-1" class="note"></span>
      <span id="span-2"></span>
      <div id="div-2" class="subContainer1">
          <p id="para-1" class="sub1-p1 note"></p>
          <span id="span-3" class="sub1-span3"></span>
      </div>
      <div id="div-3" class="subContainer2">
          <section id="sec-1">
              <label id="lbl-1"></label>
          </section>
      </div>
      <div id="div-4">
          <span id="span-4" class="mania"></span>
          <span id="span-5" class="note mania"></span>
      </div>
  </div>
  <span id="span-6" class="randomSpan"></span>
</body>*/

let spanNode1 = new Node("span", "span-1", [".note"], null);
let spanNode2 = new Node("span", "span-2", null, null);
let spanNode3 = new Node("span", "span-3", [".sub1-span3"], null);
let spanNode4 = new Node("span", "span-4", [".mania"], null);
let spanNode5 = new Node("span", "span-5", [".note", ".mania"], null);
let spanNode6 = new Node("span", "span-6", [".randomSpan"], null);
let randomNode = spanNode6;
let p1 = new Node("p", "para-1", [".sub-p1", ".note"], null);
let label1 = new Node("label", "lbl-1", null, null);
let section1 = new Node("section", "sec-1", null, [label1]);
let divNode2 = new Node("div", "div-2", [".subContainer1"], [p1, spanNode3]);
let divNode3 = new Node("div", "div-3", [".subContainer2"], [section1]);
let divNode4 = new Node("div", "div-4", null, [spanNode4]);
let divNode1 = new Node("div", "div-1", [".mainContainer"], [spanNode1, spanNode2, divNode2, divNode3, divNode4, spanNode5]);
let body = new Node("body", "content", null, [divNode1, spanNode6])

// Testing
console.log("Started...");
// Test case 1 -
console.log(divNode1.search("span"));
// Test case 2 -
console.log(divNode1.search(".note"));
// Test case 3 -
console.log(divNode1.search("label"));
// Test case 4 -
console.log(p1.search(".note"));
// Test case 5 -
console.log(divNode1.search("div"));
// Test case 6 -
console.log(randomNode.search("div"));
// Test case 7 -
console.log(divNode2.search("section"));
// Test case 8 -
console.log(body.search());
// Error conditions need to be handled
// invalid input need to be handled
// Test case 9 -
console.log(body.search("section"));
// Test case 10 -
console.log(divNode1.search(".randomSpan"));
// randomSpan is some Span outside your divNode1 closed