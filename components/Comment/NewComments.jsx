import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { submitComment } from '../../services';
export default function NewComments({slug}) {

    const { register, handleSubmit,reset, watch,setValue, formState: { errors } } = useForm();



    const onSubmitHandler = (value) =>{
        
        submitComment(value)
        .then((res)=>{
            console.log('response',res);
            if(res?.createComment?.id){
                toast.success("You have commented successfully.", {
                    theme: "dark"
                  })
                  reset();
            }
           
        })

    }



    return (
        <div className="">
            <form className="border border-gray-300  rounded-md mb-10" onSubmit={handleSubmit(onSubmitHandler)}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className=" flex flex-col gap-5">
                    <div className='flex flex-col gap-3 p-5'>
                        <label htmlFor="blog" className="sr-only">
                            Comment
                        </label>
                        <textarea
                            id="blog"
                            name="blog"
                            type="textarea"
                            rows="5"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border-0 bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                            placeholder="Write a comment..."
                            {...register("comment")}
                        />
                        <input
                            id="Name"
                            name="Name"
                            type="text"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border-0 bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                            placeholder="Name..."
                            {...register("name")}
                        />
                        <input
                            id="Email"
                            name="Email"
                            type="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border-0 bg-slate-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                            placeholder="Email..."
                            {...register("email")}
                        />
                    </div>

                </div>
                <div className='py-2 px-2 flex items-center bg-zinc-100'>
                    {/* <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-white">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-full w-32"
                                alt="Avatar"
                            />
                        </div>
                        <p className="ml-16 text-sm font-medium text-emerald-400 cursor-pointer hover:underline" >Rizèl Scarlett</p>
                    </dt>
                    <dd className=" ml-16 text-xs text-slate-400">April 14,2021</dd>
                </div> */}
                    <button
                        type="submit"
                        className="w-32 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        onClick={()=>setValue('slug',slug)}
                    >
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    )
}
