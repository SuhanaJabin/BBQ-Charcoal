import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email():
    # Email server configuration
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "suhanajabinpk@gmail.com"
    sender_password = "qyac tfdx zgin mllg"
    recipient_email = "suhanajabinpk@gmail.com"

    # Create message containera
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = "Test Email Subject"

    # Email body
    body = "This is a test email sent from Python using SMTP."
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Set up the SMTP server and send the email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()  # Secure the connection
            server.login(sender_email, sender_password)  # Login
            server.sendmail(sender_email, recipient_email, msg.as_string())
        print("Email sent successfully!")
    except Exception as e:
        print("Error:", e)

send_email()
