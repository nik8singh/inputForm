document.getElementById('checkin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform validation checks
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var appointmentDate = new Date(document.getElementById('appointment-date').value);
    var feedback = document.getElementById('feedback');
    var phoneNumber = document.getElementById('emergency-phone').value;
    feedback.innerHTML = '';

    if (dob > today) {
        feedback.innerHTML = 'Error: Date of Birth cannot be in the future.';
        feedback.style.color = 'red';
        return;
    }

    if (appointmentDate < today) {
        feedback.innerHTML = 'Error: Appointment date must be in the future.';
        feedback.style.color = 'red';
        return;
    }

    if (appointmentDate < today) {
        feedback.innerHTML = 'Error: Appointment date must be in the future.';
        feedback.style.color = 'red';
        return;
    }

    if (phoneNumber.match(/\d/g).length!==10) {
        feedback.innerHTML = 'Error: Phone number should have exactly 10 digits';
        feedback.style.color = 'red';
        return;
    }

    // If all validations pass
    feedback.innerHTML = 'You have been checked-in. Your information has been successfully submitted. Thank you for choosing Sunrise Hospital.';
    feedback.style.color = 'green';

    // Optionally, submit the form data to the server here
});

// Show/hide the 'Other' relationship field
document.getElementById('relationship').addEventListener('change', function() {
    var otherRelationshipContainer = document.getElementById('other-relationship-container');
    if (this.value === 'other') {
        otherRelationshipContainer.style.display = 'block';
    } else {
        otherRelationshipContainer.style.display = 'none';
    }
});

// Show/hide the 'Other' insurance provider field
document.getElementById('insurance-provider').addEventListener('change', function() {
    var otherInsuranceContainer = document.getElementById('other-insurance-container');
    if (this.value === 'Other') {
        otherInsuranceContainer.style.display = 'block';
        document.getElementById('other-insurance').required = true;
    } else {
        otherInsuranceContainer.style.display = 'none';
        document.getElementById('other-insurance').required = false;
    }
});
