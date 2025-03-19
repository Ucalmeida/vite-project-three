import React from 'react'

const user = {
    name: 'Urian',
    age: 47,
    isAdmin: true
}

// let content;
// if (user.isAdmin) {
//     content = <p>Admin</p>;
// } else {
//     content = <p>Not Admin</p>;
// }

function MyButton() {
    return (
        <button className="bg-white text-black py-2 px-4 my-4 rounded-lg">
            Click me
        </button>
    )
}
const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <h1 className="text-2xl text-white underline">Hello, Three.js {user.name}</h1>
            <div className="text-white my-2">
                <p>My age is {user.age} And I am {user.isAdmin ? 'Admin' : 'Not Admin'}</p>
            </div>
            <MyButton />
        </main>
    )
}
export default App
