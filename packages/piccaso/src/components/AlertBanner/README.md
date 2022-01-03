#### Use in parent component

```
    const [alertBanner, setAlertBanner] = useState(false);

    const handleShowAlertBanner = () => {
        setAlertBanner(true);
    };

```

#### Button to open the modal

```
            <AlertBanner
                title="Bold"
                description="This is the longer form"
                alertBanner={alertBanner}
                setAlertBanner={setAlertBanner}></AlertBanner>

            <button type="button" onClick={handleShowAlertBanner}>
                Show Alert
            </button>

```
