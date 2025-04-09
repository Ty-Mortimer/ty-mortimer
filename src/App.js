import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Ty Mortimer</h1>
        <p>Programmer | husband | Friend</p>
      </header>

      <section className="projects">
    
        <div className="project-card">
          <div class="text">
          <h3>Rick Rolloff</h3>
          <p>This is a very important and special project to me. My mom always loved this and so i made this with tender loving care (please please please hire me)</p>
          </div>
          <div class="video">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div class="background"></div>
        <div className="project-card">
          <div class="video">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/gB8wSuAhfNs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="text">
          <h3>Minecraft</h3>
          <p>This is a minecraft video because i'm addicted and I can't stop playing and i'm 3 years old</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Connect with me:</p>
        <a href="mailto:tyorionmortimer@gmail.com">Email</a> | 
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a> | 
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

export default App;