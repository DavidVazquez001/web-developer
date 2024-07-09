import { CONTACT } from '../constants';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className="border-b border-neutral-400 pb-4 pt-4">
            <h2 className="my-2 text-center text-4xl">Contacto</h2>

            <div className="flex flex-wrap items-center space-y-8 py-12 lg:space-y-0">
                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-center justify-center">
                        <FaLocationDot />
                        <div>{CONTACT.address}</div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-center justify-center">
                        <FaPhoneSquare />
                        <div>{CONTACT.phoneNo}</div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-center justify-center">
                        <IoMdMail />
                        <div>{CONTACT.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
