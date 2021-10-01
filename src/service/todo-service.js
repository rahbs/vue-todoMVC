import axios from "axios";

async function getTodos() {
    const response = await axios.get("/api/tasks");
    return response.data.map((todo)=>{
        todo.status = todo.status !== "active";
        return todo;
    });
}
async function postTodo(details) {
    const id = await axios.post("/api/tasks",details);
    return id;
}
async function patchTodo(id, todo) {
    await axios.patch("/api/tasks/"+id,todo);
}
async function deleteTodo(id) {
    await axios.delete("/api/tasks/"+id);

}
export {getTodos,postTodo,patchTodo,deleteTodo}