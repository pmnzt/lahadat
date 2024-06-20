<script setup>
const isLoading = ref(false)


const firstname = ref('')
const lastname = ref('')
const email = ref('')
const message = ref('')

function handleSubmit() {
  isLoading.value = true

  setTimeout(() => {
    onComplete()
    isLoading.value = false;
  }, 2000)
}

function onComplete() {
  resetInputs()
}

function resetInputs() {
  firstname.value = ''
  lastname.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div h-full relative>
    <div overflow-clip h-full absolute inset-0 pointer-events-none w-full>
      <Effect />

      <Effect2 />
    </div>

    <div z="10" p="1em" pt="14% sm:5%">
      <Logo />

      <form @submit.prevent="handleSubmit">
        <div max-w="50em" mx="auto" mt="3em" dir="auto" flex flex-col gap-2>
          <div flex gap-2 flex-col md="flex-row">
            <InputField label="First name" required v-model="firstname">
              <template #placeholder>
                Jane
              </template>
            </InputField>
            <InputField label="Last name" required v-model="lastname">
              <template #placeholder>
                Smitherton
              </template>
            </InputField>
          </div>
          <div>
            <InputField label="Email" required type="email" v-model="email">
              <template #placeholder>
                email@janesfakedomain.net
              </template>
            </InputField>
          </div>
          <div>
            <TextArea label="Your message" required v-model="message">
    <template #placeholder>
                Enter your question or message
              </template>
  </TextArea>
          </div>
          <div>
            <button :disabled="isLoading" flex gap-2 justify-center px="4" py="2" bg="[#FF9F92]"
              :class="{ 'bg-opacity-10 bg-gray-900 cursor-not-allowed': isLoading, 'hover:bg-[#FF7C6A]': !isLoading }"
              text="[#025370]" rounded w-full>
              <div v-if="!isLoading">
                Submit
              </div>
              <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
