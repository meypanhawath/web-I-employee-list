  let id = 2;

  let employees = [
  { name: "Mey Panhawath", position: "Software Engineer" },
  { name: "Hansol", position: "Frontend developer" },
];

function renderEmployees(list = employees) {
  const employeeCard = document.getElementById('employee-card');
  employeeCard.innerHTML = "";
  list.forEach((employee, idx) => {
    employeeCard.innerHTML += `
      <div class="bg-[#090040] text-white w-70 p-5 rounded-2xl mt-5 border-b-7 border-red-500">
        <h3 class="font-medium">${idx + 1}. <span class="ml-3 font-medium">${employee.name}</span></h3>
        <p class="ml-8 font-medium">${employee.position}</p>
      </div>
    `;
  });
  document.getElementById('total-employee').textContent = list.length;
}

const addEmployee = () => {
  let employeeName = document.getElementById('employee-name').value; 
  let employeePosition = document.getElementById('employee-position').value; 

  if (employeeName == "") alert("Please fill employee name");
  else if(employeePosition == "") alert("Please fill employee position");
  else {
    employees.push({ name: employeeName, position: employeePosition });
    id += 1;
    renderEmployees();
  }
  console.log(`employee add successfully: ${employeeName}, ${employeePosition}`);

}

const searchEmployee = () => {
  let query = document.getElementById('search').value.trim().toLowerCase();
  let filtered = employees.filter(
    s => s.name.toLowerCase().includes(query) || s.position.toLowerCase().includes(query)
  );
  renderEmployees(filtered);
}

const resetSearch = () => {
  document.getElementById('search').value = "";
  renderEmployees();
}

document.querySelector('button.bg-blue-900').onclick = function(e) {
  e.preventDefault();
  addEmployee();
};

document.querySelector('button.bg-pink-300').onclick = function(e) {
  e.preventDefault();
  searchEmployee();
};
document.querySelector('button.bg-red-600').onclick = function(e) {
  e.preventDefault();
  resetSearch();
};


