import 'bootstrap/dist/css/bootstrap.min.css';
function ButtonComponent({text}) {
  return (
    <>
    <button className="btn btn-primary">{text}</button>
    </>
  );
}

export default ButtonComponent;