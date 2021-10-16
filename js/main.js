$(document).ready(function () {
  changeActiveFilters();
  createTask();
  filterActive();
  filterAll();
  filterCompleted();
});

function changeActiveFilters() {
  $(".filters span").click(function () {
    $("span").removeClass("active-select");
    $(this).addClass("active-select");
  });
}

function createTask() {
  $(".form-task button").click(function (e) {
    e.preventDefault();

    let valueInput = $(".form-task input").val();
    const $tasks = $(".list-tasks");

    if (valueInput.length > 0) {
      $tasks.append(`<div class="task">
      <input type="checkbox" id="check" name="check" />
      <label for="check">${valueInput}</label>
      </div>`);

      valueInput = $(".form-task input").val("");
    } else {
      alert("Insira uma tarefa!");
    }

    completedTask();
  });
}

function completedTask() {
  const $input = $(".task").find("input");
  $input.click(function () {
    if (this.checked === true) {
      $(this).next().addClass("completed");
    } else {
      $(this).next().removeClass("completed");
    }
  });
}

function filterActive() {
  const $filterActive = $(".filters").find(".active");
  $filterActive.click(function () {
    const $input = $(".task").find("input");
    $input.each(function () {
      if (this.checked === false) {
        $(this).closest(".task").show();
      } else {
        $(this).closest(".task").css("display", "none");
      }
    });
  });
}

function filterAll() {
  const $filterAll = $(".filters").find(".all");
  $filterAll.click(function () {
    const $task = $(".task");
    $task.css("display", "flex");
  });
}

function filterCompleted() {
  const $filterActive = $(".filters").find(".completed");
  $filterActive.click(function () {
    const $input = $(".task").find("input");
    $input.each(function () {
      if (this.checked === true) {
        $(this).closest(".task").show();
      } else {
        $(this).closest(".task").css("display", "none");
      }
    });
  });
}
