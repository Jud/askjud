var lines = ['* About to connect() to askjud.com port 443 (#0)                                 ',
'*   Trying 173.194.74.139...                                                                  ',
'* connected                                                                                   ',
'* Connected to askjud.com (173.194.74.139) port 443 (#0)                                      ',
'* SSLv3, TLS handshake, Client hello (1):                                                     ',
'* SSLv3, TLS handshake, Server hello (2):                                                     ',
'* SSLv3, TLS handshake, CERT (11):                                                            ',
'* SSLv3, TLS handshake, Server finished (14):                                                 ',
'* SSLv3, TLS handshake, Client key exchange (16):                                             ',
'* SSLv3, TLS change cipher, Client hello (1):                                                 ',
'* SSLv3, TLS handshake, Finished (20):                                                        ',
'* SSLv3, TLS change cipher, Client hello (1):                                                 ',
'* SSLv3, TLS handshake, Finished (20):                                                        ',
'* SSL connection using RC4-SHA                                                                ',
'* Server certificate:                                                                         ',
'* 	 subject: C=US; ST=California; L=Mountain View; O=askjud Inc; CN=*.askjud.com              ',
'* 	 start date: 2012-12-06 08:55:15 GMT                                                       ',
'* 	 expire date: 2013-06-07 19:43:27 GMT                                                      ',
'* 	 subjectAltName: askjud.com matched                                                        ',
'* 	 issuer: C=US; O=askjud Inc; CN=askjud Internet Authority                                  ',
'* 	 SSL certificate verify ok.                                                                ',
'> GET / HTTP/1.1                                                                              ',
'> User-Agent: curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8r zlib/1.2.5  ',
'> Host: askjud.com                                                                            ',
'> Accept: */*                                                                                 ',
'>                                                                                             ',
'< HTTP/1.1 301 Moved Permanently                                                              ',
'< Location: https://askjud.com/                                                               ',
'< Content-Type: text/html; charset=UTF-8                                                      ',
'< Date: Thu, 20 Dec 2012 04:21:17 GMT                                                         ',
'< Expires: Sat, 19 Jan 2013 04:21:17 GMT                                                      ',
'< Cache-Control: public, max-age=2592000                                                      ',
'< Server: gws                                                                                 ',
'< Content-Length: 220                                                                         ',
'< X-XSS-Protection: 1; mode=block                                                             ',
'< X-Frame-Options: SAMEORIGIN                                                                 ',
'<                                                                                             ',
'',
'',
'',
'#',
'#        ___          ___          ___    ___        ___        _____    ',
'#       /  /\\        /  /\\        /__/|  /  /\\      /__/\\      /  /::\\   ',
'#      /  /::\\      /  /:/_      |  |:| /  /:/      \\  \\:\\    /  /:/\\:\\  ',
'#     /  /:/\\:\\    /  /:/ /\\     |  |:|/__/::\\       \\  \\:\\  /  /:/  \\:\\ ',
'#    /  /:/~/::\\  /  /:/ /::\\  __|  |:|\\__\\/\\:\\  ___  \\  \\:\\/__/:/ \\__\\:|',
'#   /__/:/ /:/\\:\\/__/:/ /:/\\:\\/__/\\_|:|___\\  \\:\\/__/\\  \\__\\:\\  \\:\\ /  /:/',
'#   \\  \\:\\/:/__\\/\\  \\:\\/:/~/:/\\  \\:\\/:::::/\\__\\:\\  \\:\\ /  /:/\\  \\:\\  /:/ ',
'#    \\  \\::/      \\  \\::/ /:/  \\  \\::/~~~~ /  /:/\\  \\:\\  /:/  \\  \\:\\/:/  ',
'#     \\  \\:\\       \\__\\/ /:/    \\  \\:\\    /__/:/  \\  \\:\\/:/    \\  \\::/   ',
'#      \\  \\:\\        /__/:/      \\  \\:\\   \\__\\/    \\  \\::/      \\__\\/    ',
'#       \\__\\/        \\__\\/        \\__\\/             \\__\\/                ',
' ',
' ',
' ',
];

var freakouts = [
'Analyzing audio data.........................',
'Detecting facial features in video...........',
' ',
' ',
'RUNNING ANSWER PROGRAM (V3).......'
];

var has_answered = [
  'hrm, I am unable to establish a spiritual uplink.',
  'That is an interesting question. I am choosing not to answer.',
  'I like it better when your friend asks the questions.',
  'I do not like you, and will not answer.',
  'I am Jud, and I do not answer to you.'
];

var no_answer = [
  'Unable to extablish spiritual uplink.',
  'The connection to AskJud v3 has failed, try again.',
  'Maybe you could ask me tomorrow?',
  'Eh, I\'ve decided not to answer.',
  'Wouldn\'t you like to know.',
]


var answerStatus = false,
    falseNext = false,
    startAnswer = endAnswer = false,
    answer = '',
    petitionFormat = 'jud, please answer the following question';

var resetVariables = function(){
  answerStatus = false;
  falseNext = false;
  startAnswer = endAnswer = false;
  answer = '';
};

var judAnswers = function(answer){
  var tmpAnswer = '';
  if(answer.length){
    tmpAnswer = answer.split('.')[1];
    $.cookie('has_answered', 'yes');
  } else {
    tmpAnswer = intelliAnswer();
  }
  return tmpAnswer;
};

var intelliAnswer = function(){
  var text;
  if($.cookie('has_answered') == 'yes'){
    text = has_answered[Math.floor(Math.random()*has_answered.length)];
  } else {
    text = no_answer[Math.floor(Math.random()*no_answer.length)];
  }
  return text;
}

$(function(){
  $('#terminal').typist({
    height: 300,
    width: 1000,
    backgroundColor: '#222222',
    textColor: '#ffffff',
    fontFamily: '"Courier New", "Courier", monospace'
  });

  var $questionInput = $('#questiontext input'),
      $petitionInput = $('#petitiontext input');

  if($.cookie('terminalSeen') !== 'yes'){
    $('#terminal').typist('speed', 'fast')
      .typist('echo', 'Creating Spiritual uplink')
      .typist('speed', 'output');

    $.each(lines, function(i, line){
      $('#terminal').typist('echo', line);
    });

    $('#terminal').typist('speed', 'medium');

    $.each(freakouts, function(i, line){
      $('#terminal').typist('echo', line);
    });

    $('#terminal').queue(function(){
      var $self = $('#terminal');
      $(this).dequeue();

      $self.fadeOut(function(){
        $self.empty().css('display', 'none');
      });

      $('#main').fadeIn(function(){
        $('questiontext input').focus();
      });
      $('#jud').fadeIn();
      $('#twitter').fadeIn();
      $.cookie('terminalSeen', 'yes');
    });
  } else {
    $('#terminal').css('display', 'none');
    $('#main').fadeIn(function(){
      $('questiontext input').focus();
    });
    $('#jud').fadeIn();
    $('#twitter').fadeIn();
  }

  $petitionInput.keydown(function(e){
    // CMD + Del
    if(e.which == 8 && e.metaKey == true){
      resetVariables();
    }

    // Semicolon
    if(e.shiftKey && e.which == 186){
      if(answerStatus) endAnswer = $petitionInput.val().length+1;
      answerStatus = false;
    }

    // Period
    if(e.which == 190 || falseNext){
      if(answerStatus && !falseNext){
        falseNext = true;
      } else {
        if(!answerStatus){
          startAnswer = $petitionInput.val().length+1;
        } else {
          endAnswer = $petitionInput.val().length+1;
        }
        answerStatus = !answerStatus;
        falseNext = false;
      }
    }
  }).keyup(function(e){
    if(e.which == 8){
      var $length = $petitionInput.val().length;
      if(startAnswer && endAnswer && $length >= startAnswer && $length < endAnswer){
        answerStatus = true;
        endAnswer = false;
        answer = answer.substr(0, answer.length-1);
      } else if(startAnswer && !endAnswer && $length < startAnswer){
        answerStatus = false;
        startAnswer = false;
        answer = '';
      } else {
        answer = answer.substr(0, answer.length-1);
      }
    }
  }).keypress(function(e){
    if(answerStatus){
      e.preventDefault();
      $petitionInput.val($petitionInput.val()+petitionFormat.substr($petitionInput.val().length, 1));
      answer += String.fromCharCode(e.which);
    }

    if(e.which == 58){
      e.preventDefault();
      $petitionInput.val($petitionInput.val()+':').attr('disabled', true);
      $questionInput.focus();
    }
  });
  $questionInput.keypress(function(e){
    if(e.which == 63){
      var $answer = $('#answer').clone().addClass('clone').appendTo($('body'));
      $answer.fadeIn(function(){
          $('#loading', $answer).fadeOut();
          $answer.animate({
            top: 270,
            margin: '0 0 0 -300px',
            padding: '80px 100px',
            width: 600,
            height: 200
          }, 1000).queue(function(){
            $('#text', $answer)
              .css('display', 'none')
              .html('<span>Jud Answers</span>"'+judAnswers(answer)+'"')
              .fadeIn();

            $('#text', $answer).css('width', '300');
            $('#new', $answer).fadeIn();
          });
        });
    }
  });
  $(document).on('click', ".clone #new", function(){
    resetVariables();
    $('.clone').remove();
    $('input').val('').prop('disabled', false);
    $('questiontext input').focus();
  });
});
