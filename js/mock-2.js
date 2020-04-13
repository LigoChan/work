var data=Mock.mock('http:www.clg.com',{
    "result|20":[{
        "id|+1":1,
        "title":'@csentence',
        "body":'@cparagraph',
        "name":'@cname',
        "city":"@city",
        "ctime":'@datetime("y-MM-dd HH:mm:ss")'
    }]
})
//拆分&
function getUrlName() { 
    var obj={}
    var url=location.search.length>0?location.search.substring(1):''
    var items=url.split('&')
    var item=null
    for(var i=0;i<items.length;i++){
       item=items[i].split('=')
       obj[item[0]]=item[1]
    }
    return obj
 }