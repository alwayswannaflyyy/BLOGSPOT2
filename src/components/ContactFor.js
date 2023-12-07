export const ContactFor = () => {
    return <div className="flex flex-col items-center justify-center gap-[40px]">
        <div className="flex flex-col gap-20 ">
            <div className="flex flex-col gap-[20px]">
                <h1 className="text-3xl">Contact us</h1>
                <div>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <p className="text-gray-400">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum </p>
                    <p className="text-gray-400">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                    <p className="text-gray-400">labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="flex flex-row gap-[130px]">
                <div className="border-2 p-[16px] flex flex-col rounded-[12px] grow-1 gap-[10px]">
                    <h1>Address</h1>
                    <div className="text-gray-400">
                        <p>1328 Oak Ridge Drive, Saint </p>
                        <p>Louis, Missouri</p>
                    </div>

                </div>
                <div className="border-2 p-[16px] w-[245px] grow-1  flex flex-col rounded-[12px] gap-[10px]">
                    <h1>Contact</h1>
                    <div className="text-gray-400">
                        <p>313-332-8662</p>
                        <p>info@email.com</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="w-[626px] bg-gray-200 pl-[35px] pt-[29px] pr-[130px] pb-[26px] rounded-[12px] flex flex-col gap-[26.5px] ">
            <h1>Leave a Message</h1>
            <div className="flex gap-[28px]">
                <input placeholder="Your Name " className="p-1 rounded-[5px]" type="text"></input>
                <input placeholder="Your Email" className="p-1 rounded-[5px]" type="text"></input>
            </div>
            <div className="w-[451px]">
                <input className="w-[402px] p-1 rounded-[5px]" placeholder="Subject" type="text"></input>

            </div>
            <div>
                <input className="w-[402px] h-[136px] p-1 rounded-[5px]" placeholder="Write a message" type="text"></input>

            </div>
            <div className="py-[16px] px-[10px] bg-blue-600 w-fit rounded-[6px] text-white">
                <h1>Send Message</h1>

            </div>
        </div>
    </div>
}