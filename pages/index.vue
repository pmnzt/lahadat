<template>
  <div h-full relative>
    <div overflow-clip h-full absolute inset-0 pointer-events-none w-full>
      <Effect />

      <Effect2 />
    </div>

    <div z="10" p="1em" pt="14% sm:5%">
      <Logo  />

      <div max-w="50em" mx="auto" mt="3em" dir="auto" flex flex-col gap-2>
        <div flex gap-2 flex-col md="flex-row">
          <InputField label="First name">
            <template #placeholder>
              Jane
            </template>
          </InputField>
          <InputField label="Last name">
            <template #placeholder>
              Smitherton
            </template>
          </InputField>
        </div>
        <div>
          <InputField label="Email">
            <template #placeholder>
              email@janesfakedomain.net
            </template>
          </InputField>
        </div>
        <div>
          <TextArea label="Your message">
            <template #placeholder>
              Enter your question or message
            </template>
          </TextArea>
        </div>
        <div>
          <button px="4" py="2" bg="[#FF9F92] hover:[#FF7C6A]" text="[#025370]" rounded w-full>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
