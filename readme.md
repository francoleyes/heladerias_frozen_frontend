# Python Dev Challenge - Frontend con React

## Introducción
Este proyecto es parte del desafío de desarrollo en Python para la construcción de un bot de toma de pedidos para la empresa Heladerías Frozen SRL. El objetivo de este proyecto es desarrollar las funciones auxiliares que permitirán al bot interactuar en la conversación y realizar las operaciones necesarias para la creación de órdenes de compra.

## URL FRONTEND
https://react-frontend-production-e3a5.up.railway.app
![image](https://github.com/francoleyes/heladerias_frozen_frontend/assets/85895403/b3230d63-5ec7-4589-99b5-2d5981a22131)

## Cosas extras y dinámicas agregadas a las consignas
- El mensaje de bienvenida va a depender de lo que hayamos configurado en el backend (panel de administración de Django) y depende de la temperatura obtenida mediante la API que había que consultar en el challenge.
- El catálogo contiene los productos cargados en el backend.
![image](https://github.com/francoleyes/heladerias_frozen_frontend/assets/85895403/38c47825-fe7d-4888-b457-28c14183f033)
- En el detalle se puede seleccionar la cantidad de productos a llevar, donde está la validación de no superar el stock.
![image](https://github.com/francoleyes/heladerias_frozen_frontend/assets/85895403/a4b77cd5-65d3-4eca-b7a3-6c3e1da48830)
- Al agregar un producto aparece en la esquina superior derecha un carrito y tambien botones para seguir comprando o ir al carrito.
![image](https://github.com/francoleyes/heladerias_frozen_frontend/assets/85895403/8f7c0267-1b47-401f-9a03-53bce2c9aa25)
- En el carrito se puede vaciar o eliminar un producto en específico.
![image](https://github.com/francoleyes/heladerias_frozen_frontend/assets/85895403/55c2ce9c-9651-4d10-b41f-1aab6b9decbf)
- Al ir a comprar se puede aplicar el código de descuento (en el backend tiene la función del Challenge de validación). También hay validaciones de email. Una vez comprado vuelve al inicio. (Este registro se guarda en el panel).
![image](https://github.com/francoleyes/heladerias_frozen_frontend/assets/85895403/1e7b39fc-a349-4b5a-9b40-4c3e94990c18)
