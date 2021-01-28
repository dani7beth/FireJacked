const UserProtectedRoute = ({ component: Component, ...rest }) => {

  const {userAuthenticated} = useContext(AuthContext)
 
  const getComponent = (props) => {
 
   if (userAuthenticated){
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
 
 export default UserProtectedRoute