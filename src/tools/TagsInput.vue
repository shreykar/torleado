<template>
  <div>
    <vue-tags-input v-bind="$attrs"  @tags-changed="updateValue" :tags="tags"/>
  </div>
  <!-- :tags="tags" @tags-changed="newTags => tags = newTags"  -->
  <!-- @input="$emit('update:mdoel', $event)" -->
</template>

<script>
import VueTagsInput from "@sipec/vue3-tags-input";

export default {
  components: {
    VueTagsInput,
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      tags: [],
      inputValue: this.modelValue
    };
  },
  watch: {
    modelValue(newValue) {
      this.inputValue = newValue;
    }
  },
  methods: {
    updateValue(newValue) {
      this.tags = newValue
      this.$emit('update:modelValue', newValue.map(u => u.text).join(","));
    }
  },
  created() {
    this.tags = this.inputValue.split(",");
  },
};
</script>