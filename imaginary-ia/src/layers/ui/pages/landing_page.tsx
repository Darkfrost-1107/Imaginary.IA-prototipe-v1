import { FC } from "react";
import { Header_Component } from "../components/common/header_component";
interface PageProps {
  //Props
}

export const Landing_Page: FC<PageProps> = () => {
  return (
    <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      <Header_Component />
      <div className="h-40 md:h-20"></div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="col-span-2">
        <p className="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
          Imagina un cuento, vive una aventura. ¡Todo empieza con una idea!
        </p>
        <div className="h-10"></div>
        <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-lg">
          Transforma tus ideas en historias únicas y personalizadas. Solo piensa
          en una temática o un escenario, imagina los detalles, y en segundos
          tendrás un cuento creado a tu medida, lleno de creatividad y sorpresas.
          ¡Deja que la imaginación cobre vida y descubre nuevas aventuras cada
          vez!
        </p>
        </div>
        <img src="/image.png" alt="Imaginary Logo" width={500} height={500}/>
      </div>
      <div className="h-32 md:h-40"></div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="-ml-24 rounded-lg md:rounded-r-full bg-gradient-to-bl from-[#211032] to-black h-96"></div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
            Simple y divertido
          </p>
          <h2 className="text-4xl font-bold">Creado con imaginación</h2>
          <div className="h-6"></div>
          <p className="font-serif text-xl text-gray-400 md:pr-10">
            Nuestros cuentos se generan con ideas frescas y divertidas, pensados
            especialmente para niños. ¡Todo lo que imaginen puede hacerse
            realidad!
          </p>
          <div className="h-8"></div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
            <div>
              <p className="font-semibold text-gray-400">Fácil y accesible</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Tan sencillo como pensar, participar y disfrutar, sumérgete en
                un mundo lleno de aventuras.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">¡Sólo unos clicks!</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Puedes crear sus propios cuentos, interactuar con ellos y ver
                cómo se transforman en imágenes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-32 md:h-40"></div>

      <p className="font-serif text-4xl text-center">
        <span className="text-gray-400">
          "La imaginación es más importante que el conocimiento,{" "}
        </span>
        <span className="text-gray-600">el conocimiento es limitado;</span>
        <span className="text-gray-400"> la imaginación rodea el mundo."</span>
      </p>

      <div className="h-32 md:h-40"></div>

      <div id="info_container" className="grid gap-4 md:grid-cols-3">
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
            1
          </p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">¿Quienes somos?</p>
          <p className="font-serif text-xl text-justify">
            Somos una empresa dedicada a la creación de inteligencias
            artificiales diseñadas para mejorar la educación de los niños.
            Nuestro objetivo es transformar el aprendizaje en una experiencia
            más efectiva y accesible para todos.
          </p>
        </div>
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
            2
          </p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">¿Qué hacemos?</p>
          <p className="font-serif text-xl text-justify">
            Desarrollamos soluciones de inteligencia artificial que apoyan y
            enriquecen la educación infantil. Nuestras herramientas están
            diseñadas para facilitar el aprendizaje, adaptándose a las
            necesidades individuales de cada niño.
          </p>
        </div>
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
            3
          </p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">¿Por qué lo hacemos?</p>
          <p className="font-serif text-xl text-justify">
            Creemos firmemente que la educación es la base fundamental de la
            sociedad. Estamos convencidos de que la tecnología puede ser una
            poderosa aliada para mejorarla, creando un futuro donde cada niño
            tenga la oportunidad de aprender y crecer plenamente.
          </p>
        </div>
      </div>

      {/* crear div con 2 columnas de dos botones se colocara 2 enlaces */}
      <div className="">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd7WoTQ9TBfAoog0qsOTxVmS8E1qSBizMzZpLwqwfjSKzCg-g/viewform"
            className="flex items-center justify-center w-48 h-16 text-xl font-semibold text-white bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg"
          >
            Encuesta 1
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKZG6K2G2arydsVz078xeqQNBmZCQ9rxrPvgBrYreJX17Jdw/viewform"
            className="flex items-center justify-center w-48 h-16 text-xl font-semibold text-white bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg"
          >
            Encuesta 2
          </a>
        </div>
      </div>
      </div>

      <footer className="flex flex-col space-y-10 justify-center m-10">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-400 font-serif">
            <a className="hover:text-gray-900" href="#">Home</a>
            <a className="hover:text-gray-900" href="#">About</a>
            <a className="hover:text-gray-900" href="#">Services</a>
            <a className="hover:text-gray-900" href="#">Media</a>
            <a className="hover:text-gray-900" href="#">Gallery</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
        </nav>

        <div className="flex justify-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
        </div>
        <p className="text-center text-gray-700 font-medium">&copy; 2024 Imaginary AI. All rights reservered.</p>
    </footer>
    </div>
  );
};
