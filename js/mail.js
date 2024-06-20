const scriptURL = 'https://script.google.com/macros/s/AKfycbyc1WGzATqy9LXeyv8a0_5hazDLN_O1RE5MwfJc71nDFwDQ_nQu2Cw3wx0D85Xw6YmC/exec'
        const form = document.forms['submit-to-google-sheet']
    
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Success!', response);
                    form.reset(); // Reset the form after successful submission
                })
                .catch(error => console.error('Error!', error.message))
                form.reset();
        })