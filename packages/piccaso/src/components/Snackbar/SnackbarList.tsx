import React, { useEffect } from 'react';
import { Snack } from '../../shared/interfaces/snack.interface';
import SnackbarItem from './SnackbarItem';

const SnackbarList = (props: { snacks: any }) => {
    const { snacks } = props;

    return (
        <div className="">
            <div className=" fixed bottom-2 right-2">
                {snacks.map((snack: Snack) => (
                    //
                    <div className="flex ">
                        <SnackbarItem
                            key={snack.id}
                            id={snack.id}
                            addedTime={snack.addedTime}
                            title={snack.title}
                            description={snack.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SnackbarList;
