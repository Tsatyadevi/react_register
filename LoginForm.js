import { useForm } from "react-hook-form";

function LoginForm() {
    let { register, handleSubmit } = useForm();

    function onFormSubmit(userObj) {
        console.log(userObj);
    }

    return (
        <div>

            {/* user signup form */}
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {/* username */}
                <div >
                    <label htmlFor="FirstName" >
                        Username
                    </label>
                    <input type="text" id="username"  {...register("username")} />
                </div>
                {/* email */}
                <div >
                    <label htmlFor="MiddleName" >
                        Middle
                    </label>
                    <input type="text" id="Middle"  {...register("MiddleName")} />
                </div>
                <div >
                    <label htmlFor="LastName" >
                        last
                    </label>
                    <input type="text" id="last"  {...register("lastName")} />
                </div>
                <div >
                    <label htmlFor="DateOfBirth">
                        dof
                    </label>
                    <input type="date" id="dof"  {...register("DateOfBirth")} />
                </div>
             
            </form>
        </div>
    );
}

export default LoginForm;
      
     