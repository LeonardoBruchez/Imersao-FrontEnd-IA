const PERFIL_NOME_KEY = 'perfilAtivoNome';
const PERFIL_IMAGEM_KEY = 'perfilAtivoImagem';

document.addEventListener('DOMContentLoaded', () => {
	const perfis = document.querySelectorAll('.profile');

	perfis.forEach((perfil) => {
		perfil.addEventListener('click', () => {
			const nome = perfil.querySelector('figcaption')?.textContent?.trim();
			const imagem = perfil.querySelector('img')?.getAttribute('src');

			if (nome && imagem) {
				localStorage.setItem(PERFIL_NOME_KEY, nome);
				localStorage.setItem(PERFIL_IMAGEM_KEY, imagem);
			}
		});
	});
});
