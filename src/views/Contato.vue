<template>
 <div class="bg-greenFanese flex flex-row w-full h-full py-20 px-12">
    <form action="processar_formulario.php" method="post" class="w-96 bg-white p-5 flex flex-col space-y-3">
      <!-- Campo Nome -->
      <input type="text" id="nome" name="nome" placeholder="Nome" class="p-1.5 border-2 border-black rounded" required>

      <br>

      <!-- Campo Telefone -->
      <input type="tel" id="telefone" name="telefone" pattern="[0-9]{2}[0-9]{8|9}" placeholder="Telefone" class="p-1.5 border-2 border-black rounded" required>

      <br>

      <!-- Campo Email -->
      <input type="email" id="email" name="email" placeholder="Email" class="p-1.5 border-2 border-black rounded" required>

      <br>

      <!-- Campo Assunto -->
      <input type="text" id="assunto" name="assunto" placeholder="Assunto" class="p-1.5 border-2 border-black rounded" required>

      <br>

      <!-- Campo Mensagem -->
      <textarea id="mensagem" name="mensagem" rows="4" class="p-1.5 border-2 border-black rounded w-full h-44" required></textarea>

      <br>

      <!-- Botão Enviar -->
      <input type="submit" value="Enviar">
    </form>
  <div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Cursos'
}
</script>
