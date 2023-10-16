import { useEffect } from 'react';
import jQuery from 'jquery';
const useScript = () => {
  useEffect(() => {
    let kaScroll = (function($) {
        let s;
      
        return {
          settings: {
            $wrap: $(".wrap")
          },
      
          init: function() {
            s = this.settings;
            this.bindUIActions();
          },
      
          bindUIActions: function() {
           kaScroll.slideOne();
          },
          
          slideOne: function() {
           s.$wrap.find('img').first().animate(
              {
                height: "toggle"
              },
              1000,
             "linear",
              function() {
                kaScroll.appendEnd();
              }
            );
          },
          
          appendEnd: function(){
               s.$wrap.find('img').first().appendTo(".wrap").show();
           kaScroll.slideOne();
        }
          
        };
      })(jQuery);
      kaScroll.init();
      
  }, []);
};
export default useScript;