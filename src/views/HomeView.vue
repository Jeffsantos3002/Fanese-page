<template>
  <div class="home bg-red-400 w-full flex flex-col mb-16">
    <div class="h-96 hidden md:flex w-full bg-cover flex flex-col justify-center items-end pr-10 mb-16" :style="{ backgroundImage: 'url(' + bg + ')' }">
      <p class="text-white text-6xl text-center font-leagueEspartan font-bold sm:w-4/5 md:w-3/5 animate__animated animate__backInLeft">
        Aqui o saber encontra a paixão, e o futuro é moldado com excelência.
      </p>
    </div>
    <div class="h-96 flex md:hidden w-full bg-cover flex flex-col justify-center items-end pr-10 mb-16" :style="{ backgroundImage: 'url(' + bgOpacity + ')' }">
      <p class="text-white text-2xl text-center font-leagueEspartan w-4/5 sm:w-2/5 font-bold animate__animated animate__backInLeft">
        Aqui o saber encontra a paixão, e o futuro é moldado com excelência.
      </p>
    </div>
    <div><NoticiasHome/></div>
    <div class="flex flex-col items-center h-1/2 animate__animated animate__backInUp">
      <div class="w-9/12 flex flex-col items-center space-y-9 mb-16">
        <img src="@/assets/faculdade-fanese.png" alt="fanese-img" class="w-96">
        <div>
          <p class="text-sm">
            A Faculdade de Administração e Negócios de Sergipe (FANESE) foi fundada em 19 de dezembro de 1997, iniciando suas atividades acadêmicas no primeiro semestre de 1998. O primeiro curso oferecido pela instituição foi o de Administração. Ao longo dos anos subsequentes à sua fundação, foram gradualmente incorporados novos cursos, como Engenharia de Produção, Engenharia Civil, Direito, Enfermagem, Sistemas para Internet, e vários outros. Atualmente, a instituição oferece um total de 14 cursos, incluindo bacharelados e tecnólogos, e destaca-se tanto a nível estadual quanto nacional pela qualidade do ensino que proporciona. Em 2021, a FANESE foi eleita a melhor instituição de ensino superior privado no estado de Sergipe.
          </p>
          <p class="text-sm">
            A instituição dedica-se profundamente a retribuir à comunidade sergipana por seu crescimento, por meio de ações sociais, tais como o Projeto Fanese Acolhe Você, o Imposto de Renda Solidário e o Karatê Nota 10 Aju. Convidamos você a conhecer mais sobre nossa história.
          </p>
        </div>
      </div>
      <!-- percorre a lista de objetos cards e monta cada um dinamicamente -->
      <div class="flex flex-col space-y-5 space-x-0 md:space-y-0 md:space-x-5 md:flex-row mb-16">
        <Card
        v-for="(card, index) in cards" :key="index"
        :texto = "card.texto"
        :titulo="card.titulo"
        :icone="require('@/assets/' + card.icone)">
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/Home/Card.vue'
import NoticiasHome from '@/components/Home/NoticiasHome.vue'

const bg = require('@/assets/Bg-home.jpg')
const bgOpacity = require('@/assets/Bg-home-opacity.png')

const cards = [
  {
    titulo: 'VISÃO',
    texto: 'Ser um centro educacional de impacto econômico e social.',
    icone: 'vision-icon.svg'
  },
  {
    titulo: 'MISSÃO',
    texto: 'Promover ações efetivas de educação superior de qualidade, com uma concepção humanística, holística e empreendedora, na formação de profissionais nas diversas áreas do conhecimento, em sintonia com as transformações sociais e as exigências do mercado.',
    icone: 'mission-ico.svg'
  },
  {
    titulo: 'VALORES',
    texto: 'Oferta de serviços educacionais de qualidade; Respeito ao ser humano e às diversidades; Ética e responsabilidade socioambiental; Compromisso com as comunidades interna e externa; Busca contínua pela atualização, aperfeiçoamento e inovação.',
    icone: 'values-icon.svg'
  }
  // Adicione mais objetos conforme necessário
]
</script>
