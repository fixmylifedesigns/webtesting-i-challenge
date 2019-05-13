module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancment < 20) {
   return { ...item, enhancment:item.enhancment + 1}; 
  } else {
    return { ...item, enhancment:item.enhancment}; 
  }
}

function fail(item) {
  if ( item.enhancment < 15 && item.enhancment > 0) {
    return { ...item, durability:item.durability - 5};
  } else if (item.enhancment >= 15) {
    return { ...item, durability:item.durability - 10};
  } else if (item.enhancment > 16) {
    return { ...item, enhancment:item.enhancment - 1}
  } 
  return item;
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
