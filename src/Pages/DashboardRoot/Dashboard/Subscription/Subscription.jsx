import { UilCheck } from '@iconscout/react-unicons'
import { MdOutgoingMail } from 'react-icons/md';
const Subscription = () => {
    return (
        <div>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-3xl font-extrabold">
                Subscription Packages
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative mx-auto flex w-full flex-col rounded-xl bg-white bg-clip-border p-4 text-black shadow-lg">
                    <div className="relative m-0 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <h1 className="mb-1 text-center text-xl lg:text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text">
                            Starter
                        </h1>
                        <hr />
                        <h1 className="flex w-full justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-5xl">
                            <p className="-mt-2 text-2xl">$</p>10<p className="mt-6 text-xl">/mo</p>
                        </h1>
                    </div>
                    <div className="p-2">
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                    limit: 200
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-4">
                        <button style={{ borderRadius: '10px' }} className="Achronicle-button mt-4 w-full">
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Buy <MdOutgoingMail />
                                </em>
                            </span>
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Buy <MdOutgoingMail />
                                </em>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto flex w-full flex-col rounded-xl bg-white bg-clip-border p-4 text-black shadow-lg"
                    style={{ "transform": "scale(1.1)" }}
                >
                    <div className="relative m-0 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <h1 className="mb-1 text-center text-xl lg:text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 text-transparent bg-clip-text">
                            Popular
                        </h1>
                        <hr />
                        <h1 className="flex w-full justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-5xl">
                            <p className="-mt-2 text-2xl">$</p>20<p className="mt-6 text-xl">/mo</p>
                        </h1>
                    </div>
                    <div className="p-2">
                    <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                    limit: 450
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-4">
                        <button style={{ borderRadius: '10px' }} className="Achronicle-button mt-4 w-full">
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Buy <MdOutgoingMail />
                                </em>
                            </span>
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Buy <MdOutgoingMail />
                                </em>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="relative  mx-auto flex w-full flex-col rounded-xl bg-white bg-clip-border p-4 text-black shadow-lg">
                    <div className="relative m-0 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <h1 className="mb-1 text-center text-xl lg:text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text">
                            Ultimate
                        </h1>
                        <hr />
                        <h1 className="flex w-full justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-5xl">
                            <p className="-mt-2 text-2xl">$</p>50<p className="mt-6 text-xl">/mo</p>
                        </h1>
                    </div>
                    <div className="p-2">
                    <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                    limit: 1500
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                    <UilCheck />
                                </button>
                                <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-4">
                        <button style={{ borderRadius: '10px' }} className="Achronicle-button mt-4 w-full">
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Buy <MdOutgoingMail />
                                </em>
                            </span>
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Buy <MdOutgoingMail />
                                </em>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscription;