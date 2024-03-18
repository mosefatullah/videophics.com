function Footer() {
    return (
        <footer className="bg-violet-700 text-white py-8 px-4">
            <div className="container mx-auto mt-6 mb-10 max-w-[1300px] gap-4 flex flex-col items-center sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4">
                        <a href="#" className="text-white hover:text-gray-100">
                            Home
                        </a>
                        <a href="#" className="text-white hover:text-gray-100">
                            Services
                        </a>
                        <a href="#" className="text-white hover:text-gray-100">
                            About
                        </a>
                        <a href="#" className="text-white hover:text-gray-100">
                            Contact
                        </a>
                        <a href="#" className="text-white hover:text-gray-100">
                            Blog
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-[1300px] gap-4 flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm">© 2024 Videophics</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-gray-100">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gray-100">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gray-100">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
