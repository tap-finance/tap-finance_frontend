import Footer from "../Footer/Footer";

const Feedback = () => {
   

    return (
        <>
            <div className="app" style={{ background: "#10172A" }}>

                <div className="grid grid-cols-3 gap-1">
                    <div className="content-center col-span-3 h-20">
                        <p className="justify-center text-5xl">We look forward to your feedback!</p>
                    </div>
                    <div className="col-span-1">
                    </div>
                    <div className="col-span-1">
                        <select className="select select-bordered">
                            <option disabled selected>Select Positivity of Review</option>
                            <option className="text-black">Positive</option>
                            <option>Negative</option>
                        </select>
                    </div>

                </div>


                <div className="flex justify-center">
                    <div className="mb-3 w-1/2">
                        <textarea
                            className="
                                    pb-5
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-4xl
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                            id="exampleFormControlTextarea1"
                            rows={10}
                            placeholder="Your message"
                        ></textarea>
                        <button onClick={() => window.location.reload()} className="mr-10 h-15 btn btn-warning">Submit</button>
                    </div>

                </div>
                <Footer />
            </div>

        </>
    );
}

export default Feedback;