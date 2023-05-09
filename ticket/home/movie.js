let m = document.getElementById("tt")
console.log(m);
let s = document.getElementById('s');

movies =
  [{ "adult": false, "backdrop_path": "/20uHjZ4yCPD2x0ndcxZaxM7hLIy.jpg", "id": 493529, "title": "Dungeons \u0026 Dragons: Honor Among Thieves", "original_language": "en", "original_title": "Dungeons \u0026 Dragons: Honor Among Thieves", "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.", "poster_path": "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg", "media_type": "movie", "genre_ids": [12, 14, 35], "popularity": 1655.052, "release_date": "2023-03-23", "video": false, "vote_average": 7.531, "vote_count": 974 }, { "adult": false, "backdrop_path": "/A7JQ7MIV5fkIxceI5hizRIe6DRJ.jpg", "id": 447365, "title": "Guardians of the Galaxy Volume 3", "original_language": "en", "original_title": "Guardians of the Galaxy Volume 3", "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", "media_type": "movie", "genre_ids": [878, 12, 28], "popularity": 2520.308, "release_date": "2023-05-03", "video": false, "vote_average": 8.285, "vote_count": 694 }, { "adult": false, "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg", "id": 758323, "title": "The Pope's Exorcist", "original_language": "en", "original_title": "The Pope's Exorcist", "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.", "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg", "media_type": "movie", "genre_ids": [27, 9648, 53], "popularity": 5089.969, "release_date": "2023-04-05", "video": false, "vote_average": 7.4, "vote_count": 636 }, { "adult": false, "backdrop_path": "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg", "id": 640146, "title": "Ant-Man and the Wasp: Quantumania", "original_language": "en", "original_title": "Ant-Man and the Wasp: Quantumania", "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.", "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg", "media_type": "movie", "genre_ids": [28, 12, 878], "popularity": 4665.438, "release_date": "2023-02-15", "video": false, "vote_average": 6.572, "vote_count": 2300 }, { "adult": false, "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg", "id": 934433, "title": "Scream VI", "original_language": "en", "original_title": "Scream VI", "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.", "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg", "media_type": "movie", "genre_ids": [27, 9648, 53], "popularity": 1862.283, "release_date": "2023-03-08", "video": false, "vote_average": 7.337, "vote_count": 1038 }, { "adult": false, "backdrop_path": "/e7FzphKs5gzoghDotAEp2FeP46u.jpg", "id": 649609, "title": "Renfield", "original_language": "en", "original_title": "Renfield", "overview": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.", "poster_path": "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg", "media_type": "movie", "genre_ids": [27, 35, 14], "popularity": 325.777, "release_date": "2023-04-07", "video": false, "vote_average": 7.268, "vote_count": 289 },
  { "adult": false, "backdrop_path": "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg", "id": 502356, "title": "The Super Mario Bros. Movie", "original_language": "en", "original_title": "The Super Mario Bros. Movie", "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.", "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", "media_type": "movie", "genre_ids": [16, 12, 10751, 14, 35], "popularity": 3935.55, "release_date": "2023-04-05", "video": false, "vote_average": 7.5, "vote_count": 1865 }, { "adult": false, "backdrop_path": "/8HfjrSxfTVKmjNh8cJjbu5eXzcX.jpg", "id": 420808, "title": "Peter Pan \u0026 Wendy", "original_language": "en", "original_title": "Peter Pan \u0026 Wendy", "overview": "Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.", "poster_path": "/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg", "media_type": "movie", "genre_ids": [10751, 14, 28, 12], "popularity": 1358.468, "release_date": "2023-04-20", "video": false, "vote_average": 5.896, "vote_count": 278 }, { "adult": false, "backdrop_path": "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg", "id": 868759, "title": "Ghosted", "original_language": "en", "original_title": "Ghosted", "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.", "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg", "media_type": "movie", "genre_ids": [28, 35, 10749], "popularity": 2791.532, "release_date": "2023-04-18", "video": false, "vote_average": 7.175, "vote_count": 655 }, { "adult": false, "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg", "id": 76600, "title": "Avatar: The Way of Water", "original_language": "en", "original_title": "Avatar: The Way of Water", "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.", "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", "media_type": "movie", "genre_ids": [878, 12, 28], "popularity": 2280.912, "release_date": "2022-12-14", "video": false, "vote_average": 7.708, "vote_count": 7858 }, { "adult": false, "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg", "id": 713704, "title": "Evil Dead Rise", "original_language": "en", "original_title": "Evil Dead Rise", "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.", "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", "media_type": "movie", "genre_ids": [27], "popularity": 1107.559, "release_date": "2023-04-12", "video": false, "vote_average": 7.0, "vote_count": 402 }, { "adult": false, "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg", "id": 603692, "title": "John Wick: Chapter 4", "original_language": "en", "original_title": "John Wick: Chapter 4", "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.", "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", "media_type": "movie", "genre_ids": [28, 53, 80], "popularity": 1170.178, "release_date": "2023-03-22", "video": false, "vote_average": 7.926, "vote_count": 1341 }, { "adult": false, "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg", "id": 594767, "title": "Shazam! Fury of the Gods", "original_language": "en", "original_title": "Shazam! Fury of the Gods", "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.", "poster_path": "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg", "media_type": "movie", "genre_ids": [28, 35, 14, 12], "popularity": 2702.593, "release_date": "2023-03-15", "video": false, "vote_average": 6.784, "vote_count": 1513 }, { "adult": false, "backdrop_path": "/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg", "id": 1102776, "title": "AKA", "original_language": "fr", "original_title": "AKA", "overview": "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.", "poster_path": "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg", "media_type": "movie", "genre_ids": [53, 28, 80], "popularity": 1383.661, "release_date": "2023-04-28", "video": false, "vote_average": 7.039, "vote_count": 152 },
  { "adult": false, "backdrop_path": "/eEF40Xk2twM3WjRNZftfo771gjv.jpg", "id": 700391, "title": "65", "original_language": "en", "original_title": "65", "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.", "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg", "media_type": "movie", "genre_ids": [878, 12, 53], "popularity": 717.792, "release_date": "2023-03-02", "video": false, "vote_average": 6.276, "vote_count": 960 }, { "adult": false, "backdrop_path": "/bF2skCyB5jeJuO26GFaQIGHrMNl.jpg", "id": 1085103, "title": "Clock", "original_language": "en", "original_title": "Clock", "overview": "On the eve of her 38th birthday, a woman desperately attempts to fix her broken biological clock.", "poster_path": "/m6Yt77C9u7Aume9dTJMCSRzWDED.jpg", "media_type": "movie", "genre_ids": [27, 9648, 53], "popularity": 411.923, "release_date": "2023-03-28", "video": false, "vote_average": 6.055, "vote_count": 55 }, { "adult": false, "backdrop_path": "/bmStpqOfwZt7tUbGZXp3VbSL8a0.jpg", "id": 942199, "title": "Simulant", "original_language": "en", "original_title": "Simulant", "overview": "Faye attempts to replace her newly deceased husband, Evan, with an android simulant (SIM). Although SIM Evan appears like human Evan in every way, Faye does not feel the same love for SIM Evan as it does for her. SIM Evan tries to win Faye back while at the same time being on-the-run from a government agent chasing down SIMs who have become “conscious” and could potentially be a threat to humankind.", "poster_path": "/u3M1bVxEbIe3BVkFJWwMi8DIea1.jpg", "media_type": "movie", "genre_ids": [878, 53], "popularity": 41.703, "release_date": "2023-03-29", "video": false, "vote_average": 6.2, "vote_count": 27 }, { "adult": false, "backdrop_path": "/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg", "id": 739405, "title": "Operation Fortune: Ruse de Guerre", "original_language": "en", "original_title": "Operation Fortune: Ruse de Guerre", "overview": "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.", "poster_path": "/uo7vWfQUlVwueYTDRicXOJa8Oow.jpg", "media_type": "movie", "genre_ids": [28, 35, 12], "popularity": 169.659, "release_date": "2023-01-04", "video": false, "vote_average": 6.6, "vote_count": 666 }, { "adult": false, "backdrop_path": "/zPmXiPlB9YXT9dtSHzZHQUcpekw.jpg", "id": 385687, "title": "Fast X", "original_language": "en", "original_title": "Fast X", "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.", "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg", "media_type": "movie", "genre_ids": [28, 80, 53], "popularity": 732.647, "release_date": "2023-05-17", "video": false, "vote_average": 0.0, "vote_count": 0 }, { "adult": false, "backdrop_path": "/cYyUinLXRbQwE4PAt2mQLTGBqti.jpg", "id": 876969, "title": "Assassin Club", "original_language": "en", "original_title": "Assassin Club", "overview": "In this world of contract killers, Morgan Gaines is the best of the best. When Morgan is hired to kill six people around the world, he soon discovers all the targets are also assassins unknowingly hired to kill each other.", "poster_path": "/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg", "media_type": "movie", "genre_ids": [28, 53], "popularity": 355.636, "release_date": "2023-02-24", "video": false, "vote_average": 7.056, "vote_count": 35 }]

function redirectToPage() {
  const dropdown = document.getElementById("myDropdown");
  const selectedOption = dropdown.options[dropdown.selectedIndex].value;
  if (selectedOption !== "") {
    window.location.href = selectedOption;
  }
}
render(movies);

function render(movies) {
  m.innerHTML = "";
  if (movies.length == 0) {
    console.log("NUll");
    document.getElementById("errortext").innerHTML = "NUll";
  }

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < movies.length; i++) {
    // Create a new HTML element for each movie
    const movieElement = document.createElement('div');

    movieElement.classList.add('movie');
    // Add the movie name to the HTML element
    const imgdiv = document.createElement('div');
    imgdiv.classList.add('imagecontainer');

    // const nameElement = document.createElement('h2');
    // nameElement.textContent = movies[i].name;
    // movieElement.appendChild(nameElement);

    // Add the movie poster to the HTML element
    const posterElement = document.createElement('img');
    posterElement.src = baseImageUrl + movies[i].poster_path
    imgdiv.setAttribute('href', "http://127.0.0.1:5500/index.html");
    imgdiv.appendChild(posterElement);
    const overviewElement = document.createElement('div');
    overviewElement.classList.add('overview')
    const h3 = document.createElement('h3')
    h3.textContent = "overview";
    overviewElement.appendChild(h3);
    const p1 = document.createElement('p');
    p1.textContent = movies[i].overview
    overviewElement.appendChild(p1)
    imgdiv.appendChild(overviewElement)
    movieElement.appendChild(imgdiv)
    imgdiv.classList.add("center");
    // Add the movie overview to the HTML element

    // h3.textContent = movies[i].overview;
    // movieElement.appendChild(overviewElement);

    const moviedetail = document.createElement('div');
    moviedetail.classList.add('moviesetail');
    const h4 = document.createElement('h4');
    h4.textContent = movies[i].title
    h4.setAttribute('href', "http://127.0.0.1:5500/index.html");
    moviedetail.appendChild(h4);
    h4.classList.add('btn');
    h4.classList.add('customcs');
    // const p = document.createElement('p');
    // p.textContent = movies[i].vote_average
    // moviedetail.appendChild(p);
    movieElement.appendChild(moviedetail);
    // Add the movie HTML element to the container

    let text = movies[i].title + " (Book Now)";
    let result = text.link("../booking/index.html");
    h4.innerHTML = result;
    m.appendChild(movieElement);
  }
}
//search function 
function searchFunction(text) {
  //base case
  if (text.value == "") {
    render(movies);
  }
  //searched movie
  let searchmoive = text.value;
  let searchedMovie = [];
  let textlength = searchmoive.length;
  for (i = 0; i < movies.length; i++) {
    if (movies[i].original_title.slice(0, textlength) == searchmoive) {
      searchedMovie.push(movies[i]);
    }
  }
  render(searchedMovie);
}
//////////////////// getting input 
document.getElementById("searchinput").addEventListener("input", myFunction);
function myFunction() {
  let currentstate = document.getElementById("searchinput");
  searchFunction(currentstate);
}