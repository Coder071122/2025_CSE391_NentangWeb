document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addBtnBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtnBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.className = "flex justify-between items-center p-2 bg-gray-100 rounded-md";
        li.innerHTML = `
            <span class="task-text cursor-pointer">${taskText}</span>
            <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
        `;

        li.querySelector(".task-text").addEventListener("click", (e) => {
            e.target.classList.toggle("line-through");
            e.target.classList.toggle("text-gray-400");
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    });
});
