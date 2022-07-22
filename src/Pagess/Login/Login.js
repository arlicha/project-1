import React from 'react';
import LoginAnimation from '../LoginAnimati/LoginAnimation';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user) {
        console.log(user);

    }

    const onSubmit = data => {
        
        console.log(data);
    }
    return (
        
        <div className='grid sm:grid-cols-1 my-12 md:grid-cols-2 gap-10 justify-center items-center  '>
        <div>
                
                <div className="card w-96 bg-base-100 shadow-xl ml-20   ">
                    <div className="card-body">
                        <h2 className=" text-center font-bold text-2xl  ">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                    
                                </label>

                                <input type="email"
                                 placeholder="Your Email"
                                  class="input input-bordered w-full max-w-xs" 
                                    {...register("email", {
                                        required:{
                                            value:true,
                                            message:'Email is required'
                                        },
                                        pattern: {
                                            value: /[a - z0 - 9] +@[a-z]+\.[a-z]{2, 3}/,
                                            message: 'provide a valid Email' 
                                        }
                                    } )}
                                  />
                                <label class="label">
                                    {errors.emaile?.type === 'required' && <span class="label-text-alt  text-red-500 ">{errors.emaile.message}</span> }
                                    {errors.emaile?.type === 'pattern' && <span class="label-text-alt  text-red-500 ">{errors.emaile.message}</span>}

                                    
                                </label>
                            </div>

                            {/*  */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">password </span>

                                </label>

                                <input type="password"
                                    placeholder="password "
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Must be 6 characters or longer'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'provide a valid Email'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt  text-red-500 ">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt  text-red-500 ">{errors.password.message}</span>}


                                </label>
                            </div>

                            {/*  */}
                            {/* <input  />
                            {errors.firstName?.type === 'required' && "First name is required"}

                            <input {...register("lastName", { required: true })} />
                            {errors.lastName && <p>Last name is required</p>}

                            <input {...register("mail", { required: "Email Address is required" })} />
                            <p>{errors.mail?.message}</p> */}

                            <input className='btn w-full max-w-xs  text-submit' value='Login'  />
                        </form>
                        <div className="divider">OR</div>
                        <button 
                            onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                        
                        >continue width google</button>
                    </div>
                </div>

</div>

<div style={{width:'500px',height:'500px'}}>
    <LoginAnimation></LoginAnimation>
</div>
        </div>
        
    );
};

export default Login;