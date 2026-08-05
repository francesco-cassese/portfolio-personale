import mxTrackImg from '../assets/projects/mx-track.webp';
import porcheDottoImg from '../assets/projects/porchedotto.webp';
import reSeaImg from '../assets/projects/resea.webp';
import cineListImg from '../assets/projects/cinelist.webp';
import laravelComicsImg from '../assets/projects/laravel-comics.webp';
import laravelPrimiPassiImg from '../assets/projects/laravel-primipassi.webp';
import phpHotelImg from '../assets/projects/php-hotel.webp';
import phpHotelDemo from '../assets/projects/php-hotel-demo.mp4';
import phpDischiImg from '../assets/projects/php-dischi.webp';
import phpPasswordImg from '../assets/projects/php-password.webp';
import passwordGeneratorDemo from '../assets/projects/password-generator-demo.mp4';
import phpMovieImg from '../assets/projects/php-movie.webp';
import playstationImg from '../assets/projects/playstation.webp';

const projects = [
    {
        id: 1,
        title: "MX Track & Bike Manager",
        description: "Gestione di moto da cross/enduro: sessioni in pista, manutenzioni programmate e autenticazione. Progetto personale nato per rimettere in pratica tutti i concetti del corso core, collegato alla mia passione per il motocross.",
        category: "Full-Stack",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/mx_track_and_bike_manager",
        imageUrl: mxTrackImg
    },
    {
        id: 2,
        title: "PorcheDotto",
        description: "E-commerce a tema con catalogo prodotti, recensioni e un assistente AI (LangChain + Claude) per consigliare l'acquisto. Progetto finale di gruppo del corso Boolean.",
        category: "Full-Stack",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/webapp-react",
        repoBackendUrl: "https://github.com/francesco-cassese/webapp-express",
        imageUrl: porcheDottoImg
    },
    {
        id: 3,
        title: "ReSea EyeWear",
        description: "E-commerce di occhiali sostenibili con carrello, wishlist, checkout e assistente AI per la scelta del prodotto. Progetto finale di gruppo del corso Boolean.",
        category: "Full-Stack",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/reSea-Frontend",
        repoBackendUrl: "https://github.com/francesco-cassese/reSea-Express",
        imageUrl: reSeaImg
    },
    {
        id: 4,
        title: "CineList (Laravel MVC)",
        description: "Catalogo film con Eloquent, Controller e Blade: primi passi con l'architettura MVC di Laravel.",
        category: "Laravel",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/laravel-model-controller",
        imageUrl: cineListImg
    },
    {
        id: 5,
        title: "Laravel Comics",
        description: "Layout condivisi in Blade con partial, componenti riutilizzabili e dati letti da file di configurazione.",
        category: "Laravel",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/laravel-comics",
        imageUrl: laravelComicsImg
    },
    {
        id: 6,
        title: "Primi Passi con Laravel",
        description: "Routing di base in Laravel: pagine collegate tramite route() e passaggio di dati dinamici alle view.",
        category: "Laravel",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/laravel-primi-passi",
        imageUrl: laravelPrimiPassiImg
    },
    {
        id: 7,
        title: "PHP Hotel Finder",
        description: "Elenco hotel filtrabile per rating minimo e disponibilità parcheggio, in PHP puro. Esercizio del corso Boolean.",
        category: "PHP",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/php-hotel",
        imageUrl: phpHotelImg,
        demoVideo: phpHotelDemo
    },
    {
        id: 8,
        title: "Dischi '90 (PHP + JSON)",
        description: "Libreria di dischi anni '90 in PHP puro, con CRUD e persistenza dei dati su file JSON.",
        category: "PHP",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/php-dischi-json",
        imageUrl: phpDischiImg
    },
    {
        id: 9,
        title: "Generatore Password Sicure",
        description: "Generatore di password con lunghezza e set di caratteri configurabili, generazione crittografica con random_int().",
        category: "PHP",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/php-strong-password-generator",
        imageUrl: phpPasswordImg,
        demoVideo: passwordGeneratorDemo
    },
    {
        id: 10,
        title: "Movie Collection (PHP OOP)",
        description: "Gestione di una collezione film in PHP 8 OOP: classi tipizzate, trait riutilizzabili e incapsulamento.",
        category: "PHP",
        demoUrl: "",
        repoUrl: "https://github.com/francesco-cassese/ex-php8-oop-movie",
        imageUrl: phpMovieImg
    },
    {
        id: 11,
        title: "Homepage PlayStation (clone)",
        description: "Ricostruzione della homepage PlayStation con Bootstrap 5: grid system, flexbox e breakpoint responsive per mobile, tablet e desktop.",
        category: "HTML/CSS",
        demoUrl: "https://francesco-cassese.github.io/htmlcss-playstation/",
        repoUrl: "https://github.com/francesco-cassese/htmlcss-playstation",
        imageUrl: playstationImg
    }
];

export default projects;
