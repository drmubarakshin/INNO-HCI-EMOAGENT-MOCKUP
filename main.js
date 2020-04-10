jQuery(document).ready(function($) {
    let questionNum = 1;

    let firstAnswer = 'This is the first answer';
    let secondAnswer = 'This is the second one';
    let thirdAnswer = 'This is the third one';
    let currAnswer = firstAnswer;
    $('#chat-input').on('keypress', function(e) {
        let newMessage = '';

        if (e.which === 13) {
            newMessage = $(this).val();
            $(this).val('')
            $('#chat').append('<div class="message message-question">' + newMessage + '</div>');
            setTimeout(function() {
                $('#chat').append('<div class="message message-answer">' + currAnswer + '</div>');
                if (questionNum === 1) {
                    $('#rd-pain').prop('checked', true);
                    $('#rd-truth').prop('checked', true);
                    currAnswer = secondAnswer;
                } else if (questionNum === 2) {
                    $('#rd-angry').prop('checked', true);
                    $('#rd-lie').prop('checked', true);
                    currAnswer = thirdAnswer;
                } else {
                    $('#rd-sad').prop('checked', true);
                    $('#rd-uncert').prop('checked', true);
                }
                questionNum++;
            }, 5000);
        }
    });
})