const currentValue = document.getElementById('currentValue');
const valueForm = document.getElementById('valueForm');

//Fetch and display the current value
async function fetchValue(){
    const res = await fetch('/value');
    const data = await res.json();
    currentValue.textContent = data.value || 'No Value';
}

valueForm.onsubmit = async (e) => {
    e.preventDefault();
    const value = document.getElementById('value').value;

    await fetch('/value', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({value})
    });
    fetchValue();
    valueForm.reset();
};
fetchValue();