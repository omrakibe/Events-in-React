function printHello(event) {
  console.log("Hello World");
  console.log(event);
  
}

function printBye(event) {
  console.log("Bye!!");
  console.log(event);
  
}

function handleDoubleClick() {
    console.log("You double Clicked!!");
  }

function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Here!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, molestiae
        maxime est harum vero nulla esse porro in nemo voluptatum consequuntur,
        doloribus illum quas rem pariatur facere. Ut, alias qui.
      </p>
      <button onDoubleClick={handleDoubleClick}>Click Click!</button>
    </div>
  );
}

export { Button };
