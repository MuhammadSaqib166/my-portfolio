function copyEmail(emailLinkId, copyMessageId) {
    const email = document.getElementById(emailLinkId).href;
    navigator.clipboard.writeText(email).then(() => {
        const message = document.getElementById(copyMessageId);
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
