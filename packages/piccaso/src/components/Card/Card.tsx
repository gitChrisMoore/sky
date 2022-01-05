import React from 'react';

interface Props {
    headline: string;
    subhead?: string;
    supportingText: string;
    primaryActionText?: string;
    primaryActionOnClick?: any;
}

const Card: React.FC<Props> = (props) => {
    const { headline, supportingText, subhead, primaryActionText, primaryActionOnClick } = props;

    function Headline() {
        return (
            <div className="text-lg font-semibold leading-relaxed mb-1">
                {''}
                {headline}
            </div>
        );
    }

    function SupportingText() {
        return (
            <div className="text-sm font-light leading-relaxed">
                {''}
                {supportingText}
            </div>
        );
    }

    function PrimaryActionButton() {
        return (
            <button
                onClick={primaryActionOnClick}
                className="text-sm leading-relaxed bg-slate-500 text-slate-100 rounded-full py-2 px-3 ml-auto">
                {''}
                {primaryActionText}
            </button>
        );
    }

    return (
        <>
            <div className="bg-slate-100 rounded-xl p-4 m-2">
                <Headline />
                <SupportingText />
                <div className="flex mt-3">
                    {/*  */}
                    {!primaryActionText ? '' : <PrimaryActionButton />}
                </div>
            </div>
        </>
    );
};

export default Card;
