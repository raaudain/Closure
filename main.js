// What is a closure?
// A closure is an inner function that has access to the scope of an enclosing function

const a = "DUMMY"

function hello(){
  const text = "Hey ugly"

  function bye(){
    const h = "help"

    console.log("outer", text)
    console.log("global", a)
    console.log("inner", h)
  }

  bye()
}

hello()