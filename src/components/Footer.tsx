import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-4 border-t-2 border-homeSecondary">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">Chi Chi Party</div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-400"></a>
                        <a href="#" className="hover:text-gray-400"></a>
                        <a href="#" className="hover:text-gray-400"></a>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm">
                        © {new Date().getFullYear()} Chi Chi Party. All rights reserved.
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer