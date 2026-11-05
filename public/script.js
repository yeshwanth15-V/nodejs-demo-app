const checkButton = document.getElementById('checkButton');
const statusMessage = document.getElementById('statusMessage');

checkButton.addEventListener('click', async () => {
    statusMessage.textContent = 'Checking application...';

    try {
        const response = await fetch('/api/health');
        const data = await response.json();

        if (response.ok) {
            statusMessage.textContent = 'Status: ' + data.message;
            statusMessage.style.color = 'green';
        } else {
            throw new Error('Server returned an error');
        }
    } catch (error) {
        statusMessage.textContent = 'Status: Application unavailable';
        statusMessage.style.color = 'red';
    }
});