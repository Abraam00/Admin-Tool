import "../styles/bootstrap.min.css"
import "../styles/logonPage.css"
import { React, useNavigate } from "react-router-dom"

const LogonComponents = () => {
    const navigate = useNavigate();

    const handleSubmitButtonClick = () => {
        navigate('/Home');
    };

    const handleEnterKey = (event) =>{
        if (event.key === 'Enter') {
            navigate('/Home');
        }
    }

    return(
        <div id="logonDiv">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="User Id"/>
                <label for="floatingInput">User Id</label>
            </div>
            <div class="form-floating" id="passwordInput">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" autocomplete="off" onKeyDown={handleEnterKey}/>
                <label for="floatingPassword">Password</label>
            </div>
            <button id="submitButton" type="button" class="btn btn-primary btn-lg" onClick={handleSubmitButtonClick}>Submit</button>
        </div>
    )
}

export default LogonComponents;