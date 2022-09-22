"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value; //nodo raiz
    this.left = null;
    this.right = null;
  }

  size() {
    /* if (!this.left && !this.right) {
      return 0;
    } else {
      if (this.left && !this.right) {
        return this.left.size() + 1;
      } else if (!this.left && this.right) {
        return this.right.size() + 1;
      } else {
        return max(this.left.size() + 1, this.right.size() + 1);
      }
    } */
    let nodos = 0;
    //if (!this.value) return 0;
    //else {

      if (this.left) {
        nodos += this.left.size();

      }
      if (this.right) {
        nodos += this.right.size();
      }
      nodos ++
      return nodos;
    }



  insert(value) {
    /* let tree = new BinarySearchTree(value)
    if (this.value > value) {
      if (this.left) {
        this.left = tree
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right) {
        this.right = tree;
      } else {
        this.right.insert(value)
      }
    }
  } */

    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    /* if (!this.value === value) {
      return true;
    } else if (this.value > value && this.left) {
      return this.left.contains(value);
    } else if (this.value < value && this.right) {
      return this.right.contains(value);
      return true;
    } else {
      return false;
    } */
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  }

  depthFirstForEach(cb, order) {
    if (order === 'pre-order') {
      cb(this.value);
    }
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }

    if (order === 'in-order' || !order) {
      cb(this.value);
    }

    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
    if (order === 'post-order') {
      cb(this.value);
    }

  }

  breadthFirstForEach(cb) {
    let queue = [this];
    while (queue.length) {
      let node = queue.shift();
      cb(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
