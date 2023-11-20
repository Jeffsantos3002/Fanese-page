<template>
  <div class="bg-footer flex flex-col py-5">
    <div class="h-28 flex flex-row items-center px-16 justify-between">
      <a href="https://maps.app.goo.gl/XioFy1dzz2BMAbWj7" target="_blank" class="w-72 flex w-80 space-x-2">
        <img src="@/assets/localizacao.svg" alt="localização" class="w-4">
        <p class=" text-white font-thin text-xs">Travessa Sargento Duque, 85- Bairro Industrial</p>
      </a>
      <div class="flex flex-col items-center justif-center w-80 ">
        <img src="@/assets/logo-fanese-white.svg" alt="logo-fanese" class="w-28">
        <p class="font-thin text-white text-xs w-full">Faculdade de Administração e Negócios de Sergipe</p>
      </div>
      <ul class="w-40 flex flex-row space-x-2">
        <li><a href="https://pt-br.facebook.com/FaneseSergipe" target="_blank"><img src="@/assets/social/facebook-gray.svg" alt="facebook" class="w-4"></a></li>
        <li><a href="https://twitter.com/faneseoficial" target="_blank"><img src="@/assets/social/twitter-gray.svg" alt="twitter" class="w-4"></a></li>
        <li><a href="https://www.youtube.com/fanesesergipe" target="_blank"><img src="@/assets/social/youtube-gray.svg" alt="youtube" class="w-4"></a></li>
        <li><a href="https://www.instagram.com/fanese_sergipe/" target="_blank"><img src="@/assets/social/instagram-gray.svg" alt="instagram" class="w-4"></a></li>
        <li><a href="https://www.linkedin.com/school/fanese/" target="_blank"><img src="@/assets/social/linkedin-gray.svg" alt="linkedin" class="w-4"></a></li>
      </ul>
    </div>
    <div>
      <div class="w-full flex justify-center">
        <p class="text-white font-thin text-xs">© Copyright 2021 Fanese - Todos os Direitos Reservados.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterFanese'
}
</script>
