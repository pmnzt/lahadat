<script setup lang="ts">
defineProps<fieldProps>()

const model: Ref = defineModel()

interface fieldProps {
    label?: string
}
</script>

<template>
    <div w="full">
        <label flex gap-1 flex-col class="font-asal-regular" dir="auto">
            <div text="[#FF9F92]">
                {{ label }}
            </div>

            <div relative>
                <textarea min-h="10em" max-h="20em" rows="5" v-model="model" dir="auto" py="0.3em" px="0.3em" focus="ring-2 ring-[#FF9F92] outline-none"
                    bg="[#E8E7EA]" text="black" w="full" border="1 rounded-md [#E0E0E0]" v-bind="$attrs">
                </textarea>

                <div v-if="!model" text="[#888]" pointer-events-none absolute inset-0 flex justify-between p-2>
                    <slot name="placeholder" />
                </div>
            </div>
        </label>
    </div>
</template>