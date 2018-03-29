
//本地数据文件读写操作
module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
  addData: addData
}
var mt_data = mtData()
function searchmtdata(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
}
//如果数组中不存在则插入，否则不插入
function addData(id){
  console.log(id.face);
  var isAdd = true
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.face == id.face) {
      isAdd = false
    }
  }
  if(isAdd){
    mt_data.list.push(id)
  }
  return mt_data.list
} 

function mtData() {
  var arr = {
    list: [ ]
  }
  return arr
}  