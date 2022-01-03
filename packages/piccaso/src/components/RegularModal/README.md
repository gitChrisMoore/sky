#### Use in parent component

```
    const [showModal, setShowModal] = useState(false);

    const title = 'Title 1';
    const closeModal = () => {
        setShowModal(false);
    };
    const submitModal = () => {
        setShowModal(false);
        console.log('modal was submmited');
    };

```

#### Button to open the modal

```
    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        Open regular modal
    </button>

```

#### Inclusion of Modal on Page

```
    <RegularModal
        title={title}
        closeModal={closeModal}
        submitModal={submitModal}
        showModal={showModal}>
    // Children
    </RegularModal>

```
