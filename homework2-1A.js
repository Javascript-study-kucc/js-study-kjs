class Node {
  // 2017320138 computer science department 강주성
  constructor(id) {
    this.id = id;
    this.parent_id = null;
    this.child_list = [];
  }
  print_node() {
    console.log(this);
  }
}

//
class line {
  constructor(id, start_point, end_point) {
    this.id = id;
    this.type = line;
    this.parent = null;
    this.child_list = [];
    this.start_point = start_point;
    this.end_point = end_point;
  }
  print_node() {
    console.log(this);
  }
}

class circle {
  constructor(id, center, radius) {
    this.id = id;
    this.type = circle;
    this.parent = null;
    this.child_list = [];
    this.center = center;
    this.radius = radius;
  }
  print_node() {
    console.log(this);
  }
}

class rectangle {
  constructor(id, width, height) {
    this.id = id;
    this.type = rectangle;
    this.parent = null;
    this.child_list = [];
    this.width = width;
    this.height = height;
  }
  print_node() {
    console.log(this);
  }
}
//
class button {
  constructor(id, type, width, height, color) {
    this.id = id;
    this.parent = null;
    this.type = type;
    this.width = width;
    this.height = height;
    this.color = color;
    this.child_list = [];
  }
  print_node() {
    console.log(this);
  }
}
class inputbox {
  constructor(id, width, height, bgcolor, border_color) {
    this.id = id;
    this.parent = null;
    this.width = width;
    this.height = height;
    this.bgcolor = bgcolor;
    this.border_color = border_color;
    this.child_list = [];
  }
  print_node() {
    console.log(this);
  }
}
class bwindow {
  constructor(id, width, height, bgcolor, border_color, title) {
    this.id = id;
    this.parent = null;
    this.width = width;
    this.height = height;
    this.bcolor = bgcolor;
    this.border_color = border_color;
    this.title = title;
    this.child_list = [];
  }
  print_node() {
    console.log(this);
  }
}
class imagebox {
  constructor(id, width, height, img_link) {
    this.id = id;
    this.parent = null;
    this.width = width;
    this.height = height;
    this.img_link = img_link;
    this.child_list = [];
  }
  print_node() {
    console.log(this);
  }
}

class textbox {
  constructor(id, width, height, text) {
    this.id = id;
    this.parent = null;
    this.width = width;
    this.height = height;
    this.text = text;
    this.child_list = [];
  }
  print_node() {
    console.log(this);
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  add_node(parent_node, node) {
    // add node to the tree
    parent_node.child_list.push(node);
    node.parent = parent_node;
  }

  delete_node(node) {
    // delete node from the tree
    let l = node.parent.child_list;
    for (let i = 0; i < l.length; i++) {
      if (l[i].id == node.id) {
        node.parent.child_list.splice(i, 1);
      }
    }
  }

  search_tree(node, sid) {
    // check if there is a node with id == sid
    if (node.id == sid) {
      console.log("exist");
    } else {
      let l = node.child_list;
      if (l.length > 0) {
        for (let i = 0; i < l.length; i++) {
          this.search_tree(node.child_list[i], sid);
        }
      }
    }
  }

  print_tree(node) {
    // print all the tree element in a dfs method
    node.print_node();
    let l = node.child_list;
    if (l.length > 0) {
      for (let i = 0; i < l.length; i++) {
        this.print_tree(node.child_list[i]);
      }
    }
  }
}
