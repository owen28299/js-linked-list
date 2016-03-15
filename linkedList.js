'use strict';

/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
    var newNode = {
      value: value,
      next: null
    };

    if (head === null && tail === null) {
      head = newNode;
      tail = newNode;
    }

    else {
      tail.next = newNode;
      tail = newNode;
    }

    return newNode;
  }

  function get(number){
    if (number < 0){
      return false;
    }

    var thisNode = head;

    if (number === 0){
      return thisNode;
    }

    for (var i = 1; i <= number; i++){
      if (thisNode.next === null) {
        return false;
      }

      thisNode = thisNode.next;

    }

    return thisNode;
  }

  function remove(number){
    var previousNode = get(number - 1);
    var toBeRemoved = get(number);
    var nextNode = get(number + 1);

    if(toBeRemoved === false){
      return false;
    }

    else if(previousNode === false){
      head = nextNode;
    }

    else if(nextNode === false){
      tail = previousNode;
      tail.next = null;
    }

    else {
      previousNode.next = nextNode;
    }


  }

  function insert(value, number){
    var previousNode = get(number - 1);
    var nextNode = get(number);
    var newNode = {
      value: value,
      next: null
    };

    if(nextNode === false){
      return false;
    }

    if(previousNode === false){
      newNode.next = nextNode;
      head = newNode;
    }

    else {
      newNode.next = nextNode;
      previousNode.next = newNode;
    }

  }

  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert
  };

}