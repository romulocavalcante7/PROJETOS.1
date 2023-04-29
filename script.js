const form = document.querySelector('form');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const nome = nomeInput.value;
	const email = emailInput.value;
	const senha = senhaInput.value;

	// Aqui você pode enviar os dados do formulário para um servidor
	// ou armazená-los em um banco de dados, por exemplo.
	console.log(`Nome: ${nome}`);
	console.log(`E-mail: ${email}`);
	console.log(`Senha: ${senha}`);

	form.reset();
});
