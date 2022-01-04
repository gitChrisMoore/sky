import React from 'react';

interface Props {
    isNavOpen: boolean;
    setIsNavOpen: (isOpen: boolean) => void;
}

const TopAppBar: React.FC<Props> = (props) => {
    const { isNavOpen, setIsNavOpen } = props;

    const handleLogoClick = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="sticky top-0 bg-stone-100 z-20">
            <div className="p-2">
                <button
                    onClick={() => handleLogoClick()}
                    className="p-3 rounded-full  /
                                    focus:bg-stone-300 focus:outline-1 focus:outline-black /
                                    hover:bg-stone-300 hover:outline hover:outline-1 hover:outline-black ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 z-50"
                        viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default TopAppBar;
