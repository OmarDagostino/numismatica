Este proyecto es un comercio electrónico de venta de monedas de colección .

Autor : Omar D Agostino

Tecnologías utilizadas : React / FireStore 

Funcionalidad del Proyecto 

Muestra las monedas existentes en la colección de documentos "coins" del proyecto ecommerce-coins de servicio de FireStore. 

Se puede elegir la selección de monedas por país (segun consta en la navegacion) o ver todas las monedas disponibles.

Cuando se elige ver el detalle de una moneda, se renderiza una imagen con el mismo, y la posibilidad de agregar al carrito de compras la cantidad elegida mediante botones de incremento o decremento, hasta el tope del stock de la moneda (que viene del documento pertinente de la colección antes mencionada).

Al agregar una moneda al carrito, se renderiza la imagen del mismo con la cantidad de monedas que hay en el carrito, y cuando se presiona dicha imagen, se ve el contenido del mismo, pudiendo eliminar un item, vaciar por completo el carrito o realizar la compra. En este último caso le solicita en un formulario, ingresar los datos personales (nombre, apellido, telefono y e-mail). Solo cuando se han completado todos los campos se puede confirmar la compra, dando como resultado un mensaje (alert) con la identificacion de la orden (que ha sido grabada en Firestore en la colección "orders" del mismo proyecto)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
