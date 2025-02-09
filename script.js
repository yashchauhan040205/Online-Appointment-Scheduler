const appointments = [];

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;
    const appointmentTime = new Date(document.getElementById('appointmentTime').value);
    const serviceType = document.getElementById('serviceType').value;

    if (!clientName || isNaN(appointmentTime.getTime())) {
        alert("Please enter a valid name and appointment time.");
        return;
    }

    const appointment = { clientName, appointmentTime, serviceType };
    appointments.push(appointment);
    updateUpcomingAppointments();
});

function updateUpcomingAppointments() {
    const upcomingList = document.getElementById('upcomingList');
    upcomingList.innerHTML = '';
    const now = new Date();
    const nextHour = new Date(now.getTime() + 60 * 60 * 1000);

    appointments.filter(a => a.appointmentTime >= now && a.appointmentTime <= nextHour)
        .forEach(a => {
            const li = document.createElement('li');
            li.textContent = `${a.clientName} - ${a.serviceType} at ${a.appointmentTime.toLocaleTimeString()}`;
            upcomingList.appendChild(li);
        });
}
