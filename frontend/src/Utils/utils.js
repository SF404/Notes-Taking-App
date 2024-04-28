const formatDateTime = (date_time__string) => {
    const date = new Date(date_time__string);
    const options = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    }
    return date.toLocaleDateString('en-US', options);
}

export {
    formatDateTime,
}