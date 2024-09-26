import clubes from "./data/data"


function App() {
  

  return (
    <>
      <header>CLUBES DE FUTBOL</header>
      {clubes.map(club => 
        <article>
          <p>{club.name}</p>
          <img src={club.pics} alt={club.name} />
        </article>
      )}
    </>
  )
}

export default App
