// Data for the alerts
const alerts = [
    { id: 1, message: "🔒 Mandatory Security Update: Complete by end of day." },
    { id: 2, message: "🌩️ Weather Alert: Office closed tomorrow." }
  ];
  
  // Accessing the container where alerts will be displayed
  const container = document.getElementById('alertsContainer');
  
  // Retrieving previously acknowledged alerts from localStorage
  const acknowledged = JSON.parse(localStorage.getItem('ackAlerts') || '[]');
  
  // Function to create and display alert elements
  alerts.forEach(alert => {
    const div = document.createElement('div');
    div.className = 'alert';
  
    // Check if the alert has been acknowledged
    const isAck = acknowledged.includes(alert.id);
  
    // Create button for acknowledging the alert
    const btn = document.createElement('button');
    btn.className = 'ack';
    btn.textContent = isAck ? 'Acknowledged' : 'Mark as Read';
  
    // Disable the button if the alert is already acknowledged
    if (isAck) {
      btn.disabled = true;
      btn.classList.add('acknowledged');
    }
  
    // Event listener to acknowledge the alert
    btn.addEventListener('click', () => {
      acknowledged.push(alert.id);
      localStorage.setItem('ackAlerts', JSON.stringify(acknowledged));
      btn.textContent = 'Acknowledged';
      btn.disabled = true;
      btn.classList.add('acknowledged');
    });
  
    // Create the HTML content for the alert message
    div.innerHTML = `<p>${alert.message}</p>`;
    div.appendChild(btn);
  
    // Append the alert to the container
    container.appendChild(div);
  });
  