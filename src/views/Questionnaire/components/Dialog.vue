<template>
  <div
    class="modal"
    :class="{'d-block':isWrite}"
  >
    <div class="modal-content">
      <span
        class="close"
        @click="$emit('close',false)"
      >&times;</span>
      <p>請填寫資料</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    isWrite: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
