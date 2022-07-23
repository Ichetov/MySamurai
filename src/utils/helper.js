
export const mapFunc = (data, id, objProperty,newObjProp)=>{
 return data.map(item =>{
    if (item[objProperty] === id) {
      return {...item, ...newObjProp}
    }
    return item
  })
}