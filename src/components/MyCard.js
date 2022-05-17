const MyCard = ({children}) => {
    return(
    <div className="card shadow-lg border-0 rounded-lg mt-5">
      <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
      <div className="card-body">
          {children}
      </div>
      <div className="card-footer text-center py-3">
          <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
      </div>
    </div>
    )
}

export default MyCard