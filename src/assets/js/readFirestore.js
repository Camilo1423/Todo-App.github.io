// import { auth, onAuthStateChanged, } from "./auth.js";

// const taskContainer = document.querySelector('.taskContainer')
// const logout = document.querySelector("#btn-logout")
// const btnCrear = document.querySelector('.btnFormTask')
// const title = document.querySelector('#title')
// const description = document.querySelector('.description')


// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     const btnIn = document.querySelector("#signIn-btn");
//     const btnUp = document.querySelector("#signUp-btn");
//     btnIn.classList.add("addHide");
//     btnUp.classList.add("addHide");
//     logout.classList.remove("addHide");
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     onGetTask(uid, (querySnapshot) => {
//       let html = ''
//       querySnapshot.forEach(doc => {
//         const task = doc.data()
//         html += `
//             <div class="card mb-3">
//               <div class="card-body">
//                 <h5 class="card-title">${task.titleToDo}</h5>
//                 <p class="card-text">${task.descriptionToDo}</p>
//                 <button class="btn btn-outline-dark btnEditTask" data-id="${doc.id}">Editar</button>
//                 <button class="btn btn-dark btnEndTask" data-id="${doc.id}">Terminada</button>
//               </div>
//             </div>
//         `
//       })
//       taskContainer.innerHTML = html
//       const bntDeleteTask = taskContainer.querySelectorAll('.btnEndTask')
//       bntDeleteTask.forEach( btn => {
//         btn.addEventListener('click', ({target: {dataset: {id}}}) => {
//           Swal.fire({
//             title: 'Estas seguro?',
//             text: "No podras revertir los cambios despues!",
//             icon: 'warning',
//             showCancelButton: true,
//             cancelButtonColor: '#212529',
//             confirmButtonText: 'Si, hazlo!'
//           }).then((result) => {
//             if (result.isConfirmed) {
//               deleteTask(uid, (id))
//               Swal.fire(
//                 'Eliminado!',
//                 'Tu tarea a terminado correctamente.',
//                 'success'
//               )
//             }
//           })
//         })
//       })
//       const btnEditTask = taskContainer.querySelectorAll('.btnEditTask')
//       btnEditTask.forEach(btn => {
//         btn.addEventListener('click', async ({target: {dataset: {id}}}) => {
//           const getTasks = await getTask(uid, (id))
//           const data = getTasks.data()
//           title.value = data.titleToDo
//           description.value = data.descriptionToDo
//           btnCrear.innerHTML = 'Actualizar'
//           editStatus = true
//         })
//       })
//     })
//   } else {
//     taskContainer.innerHTML = ''
//   }
// });

