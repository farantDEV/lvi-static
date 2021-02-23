<form id="form">
  <div class="field">
    <label for="user_email">user_email</label>
    <input type="text" name="user_email" id="user_email">
  </div>
  <div class="field">
    <label for="reply_to">reply_to</label>
    <input type="text" name="reply_to" id="reply_to">
  </div>

  <input type="submit" id="button" value="Send Email" >
</form>

<script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>

<script type="text/javascript">
  emailjs.init('user_NXMQ7YnAIYzxPlZZscsiF')
</script>
<script src="sendEmail.js"></script>