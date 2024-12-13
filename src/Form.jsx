function formHandleSubmit(event) {
  event.preventDefault();
  console.log("Form is Submited!");
  console.log(event);
  
}

function Form() {
  return (
    <form onSubmit={formHandleSubmit}>
      <input type="text" placeholder="username" />
      <br />
      <button>Login!</button>
    </form>
  );
}

export default Form;
