let node1 = new Node(1, null); // 2017320138 computer science department 강주성
let node2 = new Node(2, node1);
let tree = new Tree(node1);

tree.add_node(node1, node2);
tree.print_tree(tree.root);

tree.delete_node(node2);
tree.print_tree(tree.root);

//

let rectNode = new rectangle(123, 100, 100);
let circleNode = new circle(1234, (50, 50), 50);
let lineNode = new line(12345, (100, 50), (50, 100));

let tree = new Tree(rectNode);
tree.add_node(rectNode, circleNode);
tree.add_node(rectNode, lineNode);

tree.print_tree(tree.root);

//

//main page
let windowNode = new bwindow(100, 200, 200, "white", "black", "main");

//login region
let windowNode1 = new bwindow(101, 100, 100, "white", "black", "login region");
let inputboxNode_id = new inputbox(1011, 100, 30, "white", "black"); //id
let inputboxNode_pw = new inputbox(1012, 100, 30, "white", "black"); //pw
let buttonNode = new button(1013, "rectangle", 100, 40, "green");

//img region
let windowNode2 = new bwindow(102, 100, 100, "white", "black", "img region");
let imgNode = new imagebox(1021, 100, 100, "www.hci/jusung/hw2-1");

//text region
let windowNode3 = new bwindow(103, 200, 100, "white", "black", "text region");
let windowNode4 = new bwindow(
  1031,
  100,
  100,
  "white",
  "black",
  "top text region"
);
let textNode1 = new textbox(10311, 100, 100, "hello world!");
let windowNode5 = new bwindow(
  1032,
  100,
  100,
  "white",
  "black",
  "bottom text region"
);
let textNode2 = new textbox(10321, 100, 100, "hello HCI!");

// make tree
let tree = new Tree(windowNode);

tree.add_node(windowNode, windowNode1);
tree.add_node(windowNode, windowNode2);
tree.add_node(windowNode, windowNode3);

tree.add_node(windowNode1, inputboxNode_id);
tree.add_node(windowNode1, inputboxNode_pw);
tree.add_node(windowNode1, buttonNode);

tree.add_node(windowNode2, imgNode);

tree.add_node(windowNode3, windowNode4);
tree.add_node(windowNode3, windowNode5);

tree.add_node(windowNode4, textNode1);
tree.add_node(windowNode5, textNode2);
