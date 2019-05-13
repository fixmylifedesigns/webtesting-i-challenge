module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement > 19) {
   return { ...item, enhancement:item.enhancement }; 
  } else {
    return { ...item, enhancement:item.enhancement + 1}; 
  }
}

function fail(item) {
  if ( item.enhancement < 15 && item.enhancement > 0) {
    return { ...item, durability:item.durability - 5}
  } else if (item.enhancement > 15 && item.enhancement > 16) {
    return { ...item, durability:item.durability - 10,  enhancement:item.enhancement - 1}
   } else if (item.enhancement > 16) {
    return { ...item, enhancement:item.enhancement - 1}   
  } else if (item.enhancement >= 15) {
    return { ...item, durability:item.durability - 10}
  } 
}

function repair(item) {
  if (item.durability < 100){
    return { ...item, durability: 100 };
  } else {
   null;
  }
  
}

function get(item) {
  return { ...item };
}
