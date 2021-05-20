<template>
  <div class="input_search">
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      v-model="searchValue"
    />
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        v-model="selectFilter"
        value="all"
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-success" for="btnradio1">All</label>

      <input
        v-model="selectFilter"
        value="active"
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-info" for="btnradio2">Active</label>

      <input
        v-model="selectFilter"
        value="done"
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label class="btn btn-outline-warning" for="btnradio3">Done</label>
    </div>
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import { useStore } from "../store";
export default {
  name: "TheSearch",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useStore, ["selectFilter", "searchValue"]),
  },
};
</script>
<style lang="scss" scoped>
.input_search {
  display: flex;
}

.search-input {
  margin-right: 3px;
}
</style>