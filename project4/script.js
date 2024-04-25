 // Function to handle button click event
 document.getElementById('generate-btn').addEventListener('click', function() {
    const transitionScene = document.getElementById('transition-scene');
    if (transitionScene) {
        transitionScene.classList.remove('hidden');
    }

    // Hide result page
    const resultPage = document.getElementById('result-page');
    if (resultPage) {
        resultPage.classList.add('hidden');
    }
    // Clear previous result
    const pokemonContainer = document.getElementById('pokemon-container');
    if (pokemonContainer) {
        pokemonContainer.innerHTML = '';
    }

    // Get the user's name from the input field
    const userNameInput = document.getElementById('name-input');
    if (userNameInput) {
        const userName = userNameInput.value.trim();

        // Generate a random number between 1 and 898 (total number of Pokémon)
        const randomId = Math.floor(Math.random() * 898) + 1;
        setTimeout(() => {
        // Fetch data from the PokeAPI for the Pokémon species
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`)
        .then(response => response.json())
        .then(data => {
            // Extract the Pokémon name and category from the API response
            const pokemonName = data.name;
            const pokemonCategory = data.genera.find(genus => genus.language.name === 'en').genus;

            // Fetch data from the PokeAPI for the Pokémon details
            fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then(details => {
                // Extract the Pokémon sprite from the details
                const pokemonSprite = details.sprites.front_default;
                currentPokemonImage = pokemonSprite;

                // Create an image element for the Pokémon sprite
                const img = document.createElement('img');
                img.src = pokemonSprite;
                img.alt = pokemonName;

                // When the image is loaded, display it and enable the save button
                img.onload = function() {
                    img.style.display = 'block';
                    const saveBtn = document.getElementById('save-btn');
                    if (saveBtn) {
                        saveBtn.disabled = false;
                    }
                };

                // Create a paragraph element to display the Pokémon name and category
                const paragraph = document.createElement('p');
                paragraph.textContent = `${userName}, you got ${pokemonName} (${pokemonCategory})!`;

                // Create a paragraph element to display the Pokémon description
                const description = document.createElement('p');
                description.classList.add('description');
                description.textContent = data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;

                // Append the elements to the container
                if (pokemonContainer) {
                    pokemonContainer.appendChild(paragraph);
                    pokemonContainer.appendChild(img);
                    pokemonContainer.appendChild(description);
                }

                // Hide transition scene and show result page
                if (transitionScene) {
                    transitionScene.classList.add('hidden');
                    const resultPage = document.getElementById('result-page');
                    if (resultPage) {
                        resultPage.classList.remove('hidden');
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                if (pokemonContainer) {
                    pokemonContainer.textContent = 'Error fetching data. Please try again later.';
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            if (pokemonContainer) {
                pokemonContainer.textContent = 'Error fetching data. Please try again later.';
            }
        });
    }, 2000);
    }

});

// Function to handle save button click event
document.getElementById('save-btn').addEventListener('click', function() {
    if (currentPokemonImage) {
        // Capture the screenshot of the result container using html2canvas
        html2canvas(document.getElementById('pokemon-container'), {
            onrendered: function(canvas) {
                // Convert the canvas to image data URL
                const imageDataUrl = canvas.toDataURL('image/png');

                // Create an anchor element and set its attributes for downloading
                const downloadLink = document.createElement('a');
                downloadLink.href = imageDataUrl;
                downloadLink.download = 'pokemon_result.png';
                downloadLink.click();
            }
        });
    } else {
        alert('No Pokémon image to save. Please generate a Pokémon first.');
    }
});

// Function to handle retry button click event
document.getElementById('retry-btn').addEventListener('click', function () {
    // Hide result page
    const resultPage = document.getElementById('result-page');
    if (resultPage) {
        resultPage.classList.add('hidden');
    }

    // Show input form
    const inputForm = document.getElementById('input-form');
    if (inputForm) {
        inputForm.classList.remove('hidden');
    }

    // Clear any existing result content
    const pokemonContainer = document.getElementById('pokemon-container');
    if (pokemonContainer) {
        pokemonContainer.innerHTML = '';
    }
});
