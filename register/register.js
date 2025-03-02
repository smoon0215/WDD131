document.addEventListener('DOMContentLoaded', () => {
    // Ensure the addButton is only accessed after the DOM is fully loaded
    const addButton = document.getElementById('add');
    const participantsFieldset = document.querySelector('.participants');
  
    let participantCount = 1;  // Start with the first participant
  
    addButton.addEventListener('click', () => {
      participantCount++;
  
      // Generate the HTML for the new participant using the template function
      const newParticipantHTML = participantTemplate(participantCount);
  
      // Insert the new participant HTML before the Add button
      addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });
  });  

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function participantTemplate(count){
    return `
    <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
              <label for="activit${count}y">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select id="grade${count}" name="grade${count}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
        </section>
    `
}

function submitForm(event) {
    event.preventDefault();  
    // Get the total fees
    const feeTotal = totalFees();

    // Get the adult's name
    const adultName = document.getElementById('adult_name').value;

    // Calculate the number of participants
    const numParticipants = participantCount;

    // Hide the form and show the summary
    form.style.display = 'none';
    document.getElementById('summary').style.display = 'block';

    // Generate the summary message
    const summaryMessage = successTemplate({
        name: adultName,
        participants: numParticipants,
        fees: feeTotal
    });

    // Insert the message into the summary
    document.getElementById('summary').innerHTML = summaryMessage;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
  
    // Convert the NodeList to an array
    feeElements = [...feeElements];
  
    // Sum the values
    const total = feeElements.reduce((sum, feeInput) => {
      return sum + parseFloat(feeInput.value) || 0;  // Use 0 as fallback if input is empty
    }, 0);
  
    return total;
}

function successTemplate(info) {
    return `
      <p>Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees.toFixed(2)} in fees.</p>
    `;
}