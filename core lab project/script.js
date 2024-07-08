const answers = [
  "Suffering comes from being alive. Accept and transform the forms of suffering in order to gain meaning.", 
  "The first sound of life is a loud cry, that is the moment when suffering begins", 
  "The suffering of this world is illusion, do not let external things shake the heart", 
  "Anger, greed and desire, all emotions are the sand that blind the eyes of rational",
  "Work to sharpen the mind will eventually get results",
  "Problems do not always have results, accept suffering and doubt, and find inspiration in repetition",
  "Always believe",
  "Seek clarity in my sight, and you shall find guidance in the darkest of times",
  "Embrace the revelations that lie hidden in plain sight.",
  "Remain vigilant, faithful ones, and guard your sight against the illusions of fragile heart. You shall navigate the labyrinth of deceit unscathed",
  "Beware the allure of the witch's gaze, for her eyes are but portals to the realm of temptation and deception.",
  "Surrender your will to the divine mandate, for in obedience lies the highest form of worship",
  "Let the labor of your hands be a testament to your devotion, and the fruits of your toil a tribute to the benevolence of the All-Seeing One. In unwavering dedication, find fulfillment and favor in the sight of the divine.",
  "Through diligent service, find redemption and absolution from the shackles of emotion."
  ];

  const particleAnswer = document.getElementById('particle-answer');
  const btnGenerate = document.getElementById('btn-generate');
  const inputText = document.getElementById('input-text');
  const transitionScene = document.getElementById('transition-scene');

  btnGenerate.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const selectedAnswer = answers[randomIndex];
    particleAnswer.innerText = selectedAnswer;

    // Show transition scene
    transitionScene.style.display = 'block';
    setTimeout(() => {
      // Hide transition scene after 2 seconds
      transitionScene.style.display = 'none';
      particleAnswer.style.opacity = 1;
      generateParticles();
    }, 10000);
  });

  function generateParticles() {
    const particleContainer = document.getElementById('particle-container');

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.left = Math.random() * particleContainer.offsetWidth + 'px';
      particle.style.top = Math.random() * particleContainer.offsetHeight + 'px';
      particle.style.animationDuration = Math.random() * 2 + 1 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particleContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
        particleAnswer.style.opacity = 0;
      }, 15000);
    }
  }