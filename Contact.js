import { useForm } from "react-hook-form";

function contact() {
    let { register, handleSubmit } = useForm();

    function onFormSubmit(userObj) {
        console.log(userObj);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {/* email */}
                <div >
                    <label htmlFor="password" >
                        Password
                    </label>
                    <input type="password" id="password"  {...register("password")} />
                </div>
                <div >
                    <label htmlFor="phone" >
                        phone No
                    </label>
                    <input type="Number" id="phone"  {...register("phone")} />
                </div>
                {/* submit button */}
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
                <button type="reset" className="btn btn-success">
                    reset
                </button>
            </form>
        </div>
    )
}

export default contact;