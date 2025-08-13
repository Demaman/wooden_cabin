// components/AboutPage.tsx

import Image from 'next/image';
import Link from 'next/link'; // 1. Importar o componente Link
import { FaHeart, FaHammer, FaUserFriends, FaArrowLeft } from 'react-icons/fa'; // 2. Importar o ícone de seta

// Um pequeno componente auxiliar para itens de destaque
const FeatureItem = ({ icon, text }: { icon: React.ElementType, text: string }) => {
  const Icon = icon;
  return (
    <div className="flex items-center text-gray-700">
      <Icon className="h-5 w-5 text-green-600 mr-3" />
      <span>{text}</span>
    </div>
  );
};

const AboutPage = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* --- Seção 1: Nossa História --- */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Um Legado Construído à Mão</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Bem-vindo ao nosso refúgio nas montanhas, um lugar nascido do sonho de um pai e continuado com a paixão de um filho. 
            Mais do que apenas cabanas, esta é a história da nossa família, compartilhada com você.
          </p>
        </div>

        {/* --- Seção 2: O Fundador --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Fundadores: Melicia & Ricardo Demaman</h2>
            <p className="text-gray-700 mb-4">
            A história da nossa família começou em Dourados, MS, onde Melicia e Ricardo Demaman criaram quatro filhos com muito amor. 
            Em busca de um novo capítulo, decidiram construir três cabanas no alto da serra em Santa Catarina, um lugar feito para a família se reunir e criar novas memórias.
            </p>
            <p className="text-gray-700">
            No entanto, o destino os uniu de forma inesperada, e os filhos decidiram morar todos na mesma cidade. 
            Assim, as cabanas, cheias de carinho e com uma vista deslumbrante, agora estão prontas para acolher a sua família.
            De nossa família para a sua, convidamos você a escrever novas e preciosas memórias neste refúgio.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <Image 
                src="/images/about/Ricardo&Melicia.jpeg"
                alt="Ricardo Demaman, fundador das cabanas" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* --- Seção 3: A Nova Geração --- */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Um Toque Moderno: Perion Demaman</h2>
            <p className="text-gray-700 mb-4">
              Seguindo os passos de seu pai, eu, Perion, assumi o comando para continuar o legado. Enquanto meu pai construiu a base física, eu construo as pontes que conectam nosso refúgio de paz com você.
            </p>
            <p className="text-gray-700">
              Como desenvolvedor, profissional de marketing e seu ponto de contato, minha missão é garantir que sua experiência seja perfeita desde o momento em que você nos encontra online até o dia do check-out. Eu uno a tradição atemporal de nossas cabanas com a conveniência moderna que você merece.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <Image 
                src="/images/about/perion.jpg"
                alt="Perion Ferreira Demaman, gerenciando as cabanas" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* --- Seção 4: Nossa Filosofia & Destaques --- */}
        <div className="text-center pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Seu Refúgio na Montanha</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
            Acreditamos na magia dos momentos simples: o calor de uma lareira, o sabor do ar puro da montanha e o som do silêncio. Nosso objetivo é fornecer a você uma tela para pintar suas próprias memórias inesquecíveis.
          </p>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
            <FeatureItem icon={FaHeart} text="Administração familiar com um toque pessoal" />
            <FeatureItem icon={FaHammer} text="Construção artesanal com materiais locais" />
            <FeatureItem icon={FaUserFriends} text="Perfeito para casais e famílias" />
            <FeatureItem icon={FaUserFriends} text="Uma autêntica fuga para a natureza" />
          </div>
        </div>

        {/* --- 3. BOTÃO DE VOLTAR ADICIONADO --- */}
        <div className="text-center pt-10 mt-10 border-t border-gray-200">
          <Link href="/">
            <span className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform shadow-lg cursor-pointer">
              <FaArrowLeft className="mr-3 h-5 w-5" />
              Voltar para a Página Inicial
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;