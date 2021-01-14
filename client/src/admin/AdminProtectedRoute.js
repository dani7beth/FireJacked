const AdminProtectedRoute = ({ component: Component, ...rest }) => {

  const {adminAuthenticated} = useContext(AuthContext)
 
  const getComponent = (props) => {
 
   if (adminAuthenticated){
     return (
       <Component {...props} />
     )
   } else {
     return (
       <Redirect
         to={{pathname: "/login", state: { from: props.location }}}
         />
       )
     }
   }
   return <Route {...rest} render={(props) => getComponent(props)}/>
 }
 
 export default adminProtectedRoute