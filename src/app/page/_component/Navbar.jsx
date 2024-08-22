import Image from 'next/image';
import Button from './Button';
import logo from './logo.png'
import url from '../page'


const Navbar = () => {
    return (

        <>
            <nav class="bg-gray-800 p-4">
                <div class="container mx-auto flex justify-between items-center">

                    {/* <!-- Logo --> */}
                    <div class="flex items-center">
                        <a href='../page' class="text-white text-2xl font-bold"><Image src={logo} height={42} width={42}/></a>
                    </div>

                    {/* <!-- Buttons (Login and Sign Up) --> */}
                    <Button />
                </div>

            </nav>
        </>
    );
};

export default Navbar;
