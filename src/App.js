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
          <h3>Learning Managment System</h3>
          <p>This project involved creating a learning managment system for an after school program for girls in africa. We worked with our "client" (our professor) to work in sprints completing sections of the project in increments. It was a great learning opportunity to gather customer requirements, make a plan of the project, and piece by piece assemble it together.</p>
          </div>
          <div class="video">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/"
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
              src="https://www.youtube.com/embed/"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="text">
          <h3>Trackmate</h3>
          <p>For this project a group of students worked to expand a previously made application for one of the staff at Weber State University. We expanded the program to be able to be used accross many departments, implemented more features our customer desired, and fixed bugs and other issues our customer found while using the program.</p>
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