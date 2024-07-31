import { CONTACT } from '../constants';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className="border-b border-neutral-400 pb-6 pt-12">
            <h2 className="my-2 text-center text-4xl">Contacto</h2>

            <div className="flex flex-wrap items-center space-y-8 py-8 lg:space-y-0">
                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-center justify-center">
                        <FaLocationDot className="text-3xl" />
                        <div>{CONTACT.address}</div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-center justify-center">
                        <FaPhoneSquare className="text-3xl" />
                        <div>{CONTACT.phoneNo}</div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-center justify-center">
                        <IoMdMail className="text-3xl" />
                        <div>{CONTACT.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
