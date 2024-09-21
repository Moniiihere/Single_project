import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

const error = useRouteError();
console.log(error)

  return (
    <div>
      
      <p>{error.status}</p>
      <p>{error.statusText}</p>
      <p>Error Page</p>
      
    </div>
  )
}

export default ErrorPage
