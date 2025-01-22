// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the notification button
  const notifyButton = document.getElementById('notifyBtn');
  
  // Add an event listener to the button to handle click event
  notifyButton.addEventListener('click', function() {
    // Request notification permission from the user
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        // If permission is granted, show a notification
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'assets/icons/BookNotify48.png', // Path to the notification icon
          title: 'Notifications Enabled!',
          message: 'You will be notified when bookings open.',
          priority: 2
        });
      } else {
        // If permission is denied, show an alert
        alert("Notifications are not enabled.");
      }
    });
  });
});
