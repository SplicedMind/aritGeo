module.exports = {
 
 aritGeo: function(aray) {
   
   if(aray instanceof Array)
   {
      var result;

      if(aray.length == 0)
      {
         result = 0;

      }
      else
      {
         var arit = aray[1] - aray[0];
         var geo = aray[1]/aray[0];
         var i = 0;
         while(i < aray.length -1)
         {
            if(aray[i + 1]/aray[i] == geo)
            {
               result = 'Geometric';
               i += 1
               continue;
            }
            else if(aray[i + 1] - aray[i] == arit)
            {
               result = 'Arithmetic';
               i += 1
               continue;
            }
            else
            {
               result = -1;
               break;
            }

         }                     
      }
      return result;
   }
 }

}