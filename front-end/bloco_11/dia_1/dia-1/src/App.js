const appointments = ['Estudar', 'Fumar', 'Comer', 'Chorar', 'Tecao' ]

const Task = (value) => {
  return (
    <ul>{value}</ul>
  );
}

function App() {
  return (
    <div>
     {Task(appointments.map((tf) => <li> {tf} </li> ))}
    </div>
  );
}

export default App;
