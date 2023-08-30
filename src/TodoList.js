//destructuracion de la propiedad props para que pueda recibir el children de manera directa

function TodoList({ children }) { 
  return (
    <ul>
      {children} 
    </ul>
  );
}

export { TodoList };

