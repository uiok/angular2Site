var contr = require('../routers/indexcontroller.js');
// var newsContr = require('../routers/newsController.js');



module.exports=function(app) {

//index
 app.get('/',contr.readLandPage);
// app.get('/api/indexPartialData',contr.readIndexPartialData);
//news
// app.get('/api/getNewsPartialData',newsContr.readPartialData);


}