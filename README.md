# Products Search Catalog. 🛒

Aplicación para crear productos y mostrarlos a modo de catálogo.
Permite filtrar por secciones y ordenar por precio y nombre.

Puedes verla en acción en https://flat101products.pages.dev/

### Instalación 🔧

En caso de querer ejecutarla desde tu ordenador deberas realizar los siguientes pasos:

Para ejecutar esta aplicación en tu maquina, necesitaras tener instalado Node en tu ordenador.

Puedes descargarla [aqui](https://nodejs.org/en/)

Una vez instalado, desde la teminal crea una carpeta y dentro de ella puedes clonar el repositorio

```bash
git clone https://github.com/totobagliani/frontend.git
```

Necesitas realizar la instalación de las dependencias necesarias ejecuta el comando.

```bash
npm install
```

Este proyecto utiliza variables de entorno que por seguridad no se suben a los repositorios de github, con lo que se tendrá que crear un archivo .env con las siguientes variables. Solo es copiar y pegar el siguiente código:

```powershell
REACT_APP_API_URL=https://backend-4sjz.onrender.com
REACT_APP_API_CLOUDINARY=https://api.cloudinary.com/v1_1/dxae9dngq/image/upload

```

Ahora ya puedes lanzar el proyecto con ...

Cuando termine la instalación de los paquetes , puedes lanzar el proyecto con .

```bash
npm start
```

Si el script no te lanza una ventana de navegador con la aplicación. Puedes acceder a traves de la siguiente dirección : [http://localhost:3000](http://localhost:3000)

### Ejecutando las pruebas ⚙️

La aplicación contiene pruebas automatizadas realizadas bajo el test runner jest y react-testing-library para los test de modulos con React.

Para ejecutar las pruebas, desde el terminal lanza el comando :

```bash
npm test
```

### Tecnologías 🖥

- React v18
  - React-Router v6 . Para la gestión de rutas
  - React-Redux - Redux-thunk . Para la implementación del patrón redux para la gestión del estado
  - Ant icons - Iconos tratados como componentes.
  - sass y styles modules - Para estilizar la app
  - Lint - Eslint - Para estilar el código
  - Prettier - Para formatear el código segun la guia de estilo
  - jest y React testing Library. Como test runner y testeo de componentes.
  - [Create React App](https://github.com/facebook/create-react-app). .- Como creador del proyeto y empaquetador.
- Netlify como plataforma para el deploy

### Consideraciones en el desarrollo

#### Gestión Global del estado.

Para una aplicación como la desarrollada usar la libreria Redux y thunk como "middleware" para acciones asincronas, pueder ser "overKill"

El objetivo es implementarla como práctica para aplicaciones con más escala.
Seguramente con el uso de Contexto seria suficiente.

#### Definición de Datos.

- products.- Se guardaran los productos que forman el catálogo
- ui.- Registro de los parametros necesarios para poder realizar las operaciones de UI que necesita la plataforma tales como paginacion, filtrado, ordenación y búsqueda, necesarios para el comportamiento dinámico de los componentes.

#### Organización de componentes.

Al no ser un proyecto grande todos los componentes se encuentran en el folder /components, si la app escalase habria que plantearse otros criterios (features, atomic design etc...)

Un ejemplo es la carpeta Products, que dentro contiene :

- Products: Pagina / Layout que aloja al resto.
- Products List: renderiza la lista de productos.
- Products Card: renderiza cada item de la lista

#### Estilos de aplicación css.

He usado dos implementaciones:

1.  La carpeta styles recoge todos los estilos que se van a aplicar de manera global a la aplicación. En el fichero settings.css se encuentra la guia de estilo con la definición de tipologias, colores y layouts globales que permitan una visualización homogenea de los elementos y una imagen de marca.

2.  Uso de cssModules, para cada componente se define clases únicas y exclusivas evitando la colision de clases. En estos css modules se aplicaran las variables definidas a nivel global.

#### Uso de constantes

En la medida de lo posible, intento evitar "hardcodear" los parametros, tener un único punto de entrada para que ,si se necesita realizar algún cambio, no haya que recorrer la app para cambiar esos parametros.

He incorporado el fichero constants.js donde recogo los parametros como las secciones o la paginación y , si en algun momento se quiere cambiar las secciones a unas recogidas en un backend solamente seria necesario redefinir esa constante.

### Mejoras.

- A nivel funcional
  - Incluir usuarios en la app
  - Diseñar una pagina de detalle.
  - Incluir el resto de operaciones CRUD.
- A nivel tecnico

  - Persistencia de datos, bien a traves de front básico con localStorage o IndexDB, o a traves de un back
  - Optimización: mayor Refactor de código en custom hooks y mayor granularizacion de los componentes.
  - Uso intensivo del state: Disminuir las llamadas a la API si los datos ya se encuentran en el store
  - Refactor algunos selectores para que sean mas escalables.
  - Incluir mayor gestión de errores.

  ### Gestión de versiones GIT | GitHub.

Aparte de usar git para la gestion local de versiones y github para la gestion descentralizada, lo uso como apoyo a una metodología que suelo usar en los desarrollos. En principio es secuencial pero eso no significa que pasar a la siguiente fase|iteración|rama sea inamovible y susceptible a cambios que es , lo más habitual.

Cada una de estas ramas pueden tener tareas que pueden ser parte de un backlog / canvas a incorporar durante los sprints, dailys etc..

Las ramas que uso suelen ser:

- **master - main:** unicamente para iniciar el proyecto y para el posterior deploy.
- **structure**: la parte de creación de estructura para que el resto de la app pueda
  desarrollarse. Esta suele incluir dos subramas

  - _structure-data._ Defino e implemento la estructura de datos, los metodos para obtenerlos y el sistema de gestion de estado si es necesario global o por feature. Redux o Context en función del tamaño del proyecto.
  - _structure-route_. Definir las rutas y endpoints de la app y que funcione correctamente el enrutamiento.

- **develop** - Se desarrolla la app.

  - _develop-static_. Se desarrollan los componente sin tener logica en funcion del diseño que previamente se ha entregado.
    - Pantallas (Pages)
    - Layouts
    - Containers
    - Components
  - _develop-dynamic_: Programar la logica del negocio.
    - Actions y gestion del etado
    - hooks
    - conditional rendering
    - implementacion de librerias.
  - **testing**: Se encarga de realizar los test unitarios de la aplicación. Esta rama se puede ir desarrollando en cada una de las ramas anteriores .

  La politica de merge que uso es:

  Se trabaja en una subrama, cuando se termina una feature se mergea con su "rama padre". Por ejemplo. structure-data se mergea con structure.

  De esta manera no se mergea en la rama master|main hasta que no se haya realizado y probado las funcionalidades.
