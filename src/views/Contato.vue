<template>
 <div class="bg-greenFanese flex flex-row w-full h-full py-20 px-12 justify-center">
    <form id="form-contato" class="w-96 bg-white p-5 flex flex-col space-y-5 rounded-2xl">
      <!-- Campo Nome -->
      <input type="text" id="nome" name="nome" placeholder="Nome" class="p-1.5 border focus:border-indigo-700 focus:outline-none border-black rounded" required>
      <!-- mensagem de verifição -->
      <p v-if="verificaNome" class="text-red text-sm mt-2">{{ this.verificaNome }}</p>

      <!-- Campo Telefone -->
      <input type="tel" id="telefone" name="telefone" placeholder="Tel: (xx) xxxxx-xxxx" class="p-1.5 border focus:border-indigo-700 focus:outline-none border-black rounded" required>
      <!-- mensagem de verifição -->
      <p v-if="verificaTel" class="text-red text-sm mt-2">{{ this.verificaTel }}</p>

      <!-- Campo Email -->
      <input type="email" id="email" name="email" placeholder="Email" class="p-1.5 border focus:border-indigo-700 focus:outline-none border-black rounded" required>
      <!-- mensagem de verifição -->
      <p v-if="verificaEmail" class="text-red text-sm mt-2">{{ this.verificaEmail }}</p>

      <!-- Campo Assunto -->
      <input type="text" id="assunto" name="assunto" placeholder="Assunto" class="p-1.5 border focus:border-indigo-700 focus:outline-none border-black rounded" required>

      <!-- Campo Mensagem -->
      <textarea id="mensagem" name="mensagem" rows="4" class="p-1.5 border focus:border-indigo-700 focus:outline-none border-black rounded w-full h-44 resize-none"  required></textarea>
      <!-- mensagem de verifição -->
      <p v-if="verificaMesg" class="text-red text-sm mt-2">{{ this.verificaMesg }}</p>

      <!-- Botão Enviar -->
      <div class="w-full flex justify-center items-center">
        <button type="submit" @click.prevent="handleSubmit()" class="w-20 h-9 py-2.5 px-5 text-white bg-roxo hover:bg-roxoEscuro rounded-2xl flex items-center">Enviar</button>
      </div>

    </form>
  <div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Cursos',
  data () {
    return {
      verificaEmail: null,
      verificaTel: null,
      verificaNome: null,
      verificaMesg: null
    }
  },
  methods: {
    // esse métódo aciona os demais métodos de verificação por regex e de campo vazio. Se o campo não corresponder ao validador regex, uma mensagem de erro é adionada
    handleSubmit () {
      this.checkEmail()
      this.checkTel()
      this.checkNome()
      this.checkMessag()
      if (this.verificaEmail || this.verificaTel || this.verificaNome || this.verificaMesg) {
        alert('Preencha os campos corretamente')
      } else {
        document.getElementById('form-contato').submit()
        alert('Email enviado com sucesso!')
      }
    },
    checkNome () {
      const nomeElement = document.getElementById('nome')
      if (nomeElement.value) {
        this.verificaNome = null
      } else {
        this.verificaNome = 'Campo obrigatório'
      }
    },
    checkMessag () {
      const mensagemElement = document.getElementById('mensagem')
      if (mensagemElement.value) {
        this.verificaMesg = null
        console.log(mensagemElement.value)
      } else {
        this.verificaMesg = 'Campo obrigatório'
      }
    },
    checkEmail () {
      const emailElement = document.getElementById('email')
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (emailElement.value === '') {
        this.verificaEmail = 'Campo obrigatório'
      } else if (emailRegex.test(emailElement.value)) {
        this.verificaEmail = null
      } else {
        this.verificaEmail = 'Email inválido'
      }
    },
    checkTel () {
      const telefoneElement = document.getElementById('telefone')
      const telefoneRegex = /^(\(\d{2}\) \d{4,5}-\d{4})|(\(\d{2}\) 9\d{4,5}-\d{4})$/
      if (telefoneElement.value === '') {
        this.verificaTel = 'Campo obrigatório'
      } else if (telefoneRegex.test(telefoneElement.value)) {
        this.verificaTel = null
      } else {
        this.verificaTel = 'Número de telefone inválido'
      }
    }
  }
}
</script>
