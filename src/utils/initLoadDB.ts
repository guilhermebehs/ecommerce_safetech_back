import ProductController from '../controllers/ProductController';
import initialData from './initialData';

function initLoadDB ():any {
  const productController = new ProductController();

  initialData.forEach((product) => {
    productController.create(product);
  });

  setTimeout(function () {
    return process.exit(0);
  }, 5000);
}

initLoadDB();
