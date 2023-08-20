import MacyWrapper from './macyWrapper.js';

const masonry = new MacyWrapper({
    container: '.masonry',
    mobileFirst: true,
    columns: 3,
    
    breakAt: {
        760: {
            columns: 3,
            margin:{
                x:30,
                y:30
            }
        }
      }
});;