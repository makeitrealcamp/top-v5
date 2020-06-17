const nodemailer = require('nodemailer');

async function main() {
  let account = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  });

  const styles = 'width:100%;background-color:yellow;color:blue;height:80px;font-size:32px;display:flex;justify-content:center'

  let info = await transporter.sendMail({
    from: '"Simón Hoyos" <simon@test.com>',
    to: 'maria@test.com',
    subject: 'hello world',
    html: `<h1 style="${styles}">hello world</h1><p>lorem ipsum dolor sit</p><img src="Ash_Tree_-_geograph.org.uk_-_590710.jpg" />`,
    text: 'hello world,\nlorem ipsum dolor sit',
  });

  console.log(nodemailer.getTestMessageUrl(info));
}

main();
