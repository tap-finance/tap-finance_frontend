import { Navbar } from "../NavBar/navbar";

const Pool = () => {

    return (
        <>
            <Navbar />

            <div className="mt-10 sm:mt-0">
                <div className="flex justify-center items-center">
                    <p className="text-7xl">
                        Create a pool on tap.finance

                    </p>
                </div>

                <div className="px-40 mt-5 md:col-span-2 md:mt-0 flex flex-col 
                    items-center justify-center">
                    <form action="#" method="POST">
                        <div className="overflow-hidden  sm:rounded-md">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-20 sm:col-span-20">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Contract Address
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>



                                    <div className="col-span-2 sm:col-span-20">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Pool Name
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            LP Token Symbol
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm justify-center"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="px-4 py-3 text-center sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </>

    );
}

export default Pool;