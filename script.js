document.addEventListener("DOMContentLoaded", function () {
  const tasks = ["tasksToDo", "tasksDoing", "tasksDone"];

  tasks.forEach((taskState) => {
    const tasks = document.getElementById(taskState);

    new Sortable(tasks, {
      group: "shared",
      animation: 150,
      fallbackOnBody: true,
      chosenClass: "taskChosen",
      dragClass: "taskDrag",
    });
  });
});
