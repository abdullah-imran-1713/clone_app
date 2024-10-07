<template>
  <div class="dob-section">
    <div class="dob-dropdown">
      <select v-model="state.selectedMonth" @change="updateDate">
        <option v-for="(month, index) in state.months" :key="index">{{ month }}</option>
      </select>
    </div>
    <div class="dob-dropdown">
      <select v-model="state.selectedDay" @change="updateDate">
        <option v-for="day in state.days" :key="day">{{ day }}</option>
      </select>
    </div>
    <div class="dob-dropdown">
      <select v-model="state.selectedYear" @change="updateDate">
        <option v-for="year in state.years" :key="year">{{ year }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue';

// Props to emit the date to the parent
const emit = defineEmits(['update:dob']);

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

// Populate days and years when the component is mounted
onMounted(() => {
  populateDays();
  
  // Populate years (from current year to 100 years ago)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 100; i--) {
    state.years.push(i);
  }
  
  // Emit the initial selected date when the component is mounted
  emitFormattedDate();
});

// Function to populate days based on the selected month and year
const populateDays = () => {
  state.days = [];
  
  const monthIndex = state.months.indexOf(state.selectedMonth) + 1; // +1 for 1-indexing
  const totalDays = daysInMonth(state.selectedYear, monthIndex);
  
  for (let i = 1; i <= totalDays; i++) {
    state.days.push(i);
  }

  // Reset the selected day if it exceeds the number of days in the selected month
  if (state.selectedDay > totalDays) {
    state.selectedDay = totalDays;
  }
};

// Function to get the number of days in a given month of a given year
const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate(); // 0 gets the last day of the previous month
};

// Watch for changes in month or year to update the days accordingly
const updateDate = () => {
  populateDays();
  emitFormattedDate();
};

// Emit formatted date to the parent in MM-DD-YYYY format
const emitFormattedDate = () => {
  const monthIndex = state.months.indexOf(state.selectedMonth) + 1;
  const formattedDate = `${String(monthIndex).padStart(2, '0')}-${String(state.selectedDay).padStart(2, '0')}-${state.selectedYear}`;
  emit('update:dob', formattedDate); // Emit the formatted date to the parent
};

// Computed property for formatted date
const formattedDate = computed(() => {
  const monthIndex = state.months.indexOf(state.selectedMonth) + 1; // +1 for 1-indexing
  return `${String(monthIndex).padStart(2, '0')}-${String(state.selectedDay).padStart(2, '0')}-${state.selectedYear}`;
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

.selected-date {
  margin-top: 10px;
  font-weight: bold;
}
</style>
