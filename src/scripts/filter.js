const tabs = document.querySelector(".tab__wrapper");
const projects = document.querySelectorAll(".project");

tabs.addEventListener("click", ({ target }) => {
  if (!target.matches("button")) return;

  const { filter } = target.dataset;

  projects.forEach((project) => {
    if (project.classList.contains(filter)) {
      project.classList.add("visible");
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
      project.classList.remove("visible");
    }
  });
});
