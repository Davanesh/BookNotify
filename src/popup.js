document.getElementById('notifyBtn').addEventListener('click', function() {
  // Request permission for notifications
  Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
      // Show a notification if permission is granted
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'assets/icons/BookNotify48.png', // 48X48 icon
        title: 'Notifications Enabled!',
        message: 'You will be notified when bookings open.',
        priority: 2
      });
    } else {
      alert("Notifications are not enabled.");
    }
  });
});