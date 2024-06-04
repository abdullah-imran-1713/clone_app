<template>
  <div class="dob-section">
    <div class="dob-dropdown">
      <select v-model="state.selectedDay">
        <option v-for="day in state.days" :key="day">{{ day }}</option>
      </select>
    </div>
    <div class="dob-dropdown">
      <select v-model="state.selectedMonth">
        <option v-for="(month, index) in state.months" :key="index + 1">{{ month }}</option>
      </select>
    </div>
    <div class="dob-dropdown">
      <select v-model="state.selectedYear">
        <option v-for="year in state.years" :key="year">{{ year }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const currentDate = new Date();
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const state = reactive({
  selectedDay: currentDate.getDate(),
  selectedMonth: months[currentDate.getMonth()],
  selectedYear: currentDate.getFullYear(),
  days: [],
  months: months,
  years: []
});

onMounted(() => {
  // Populate days
  for (let i = 1; i <= 31; i++) {
    state.days.push(i);
  }

  // Populate years (from current year to 100 years ago)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 100; i--) {
    state.years.push(i);
  }
});
</script>

<style scoped>
.dob-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.dob-dropdown {
  margin-right: 10px;
}
</style>
