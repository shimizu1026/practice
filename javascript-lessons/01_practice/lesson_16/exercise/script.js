//フォーム全体
const contactForm = document.querySelector('[data-form="contact"]');
//モーダル（dialog）
const confirmModal = document.querySelector('[data-dialog="confirm"]');
//入力確認ボタン
const confirmButton = document.querySelector('[data-command="show-modal"]');
//修正ボタン
const editButton = document.querySelector('[data-command="edit"]');
//送信ボタン
const submitButton = document.querySelector('[data-command="submit"]');

const nameElem = document.querySelector('[data-confirm="name"]');
const emailElem = document.querySelector('[data-confirm="email"]');
const messageElem = document.querySelector('[data-confirm="message"]');

// console.log(nameElem);

// 「入力確認」ボタンを押すと、入力内容をチェックし、エラーがなければ入力内容をモーダルウインドウに表示するようにす
confirmButton.addEventListener("click", (event) => {

	const checkForm = contactForm.reportValidity();

	if (!checkForm) {
		return;
	} else {
		const formData = new FormData(contactForm);

		const newData = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		}
		if (!newData.name) {
			alert("入力してください");
			return;
		}
		if (!newData.email) {
			alert("入力してください");
			return;
		}
		if (!newData.message) {
			alert("入力してください");
			return;
		}

		nameElem.textContent = newData.name;
		emailElem.textContent = newData.email;
		messageElem.textContent = newData.message;

		confirmModal.showModal();
	}

});
//  モーダルウインドウ内の「修正」ボタンを押すと、モーダルウインドウが閉じるようする
editButton.addEventListener("click", (event) => {
	confirmModal.close();

});

//  モーダルウインドウ内の「送信」ボタンを押すと、入力内容を submit() で送信し、モーダルウインドウが閉じるようする
submitButton.addEventListener("click", (event) => {
	contactForm.submit();
	confirmModal.close();
});

//  モーダルウインドウの背景（外側）をクリックしたら、モーダルウインドウが閉じるようする
confirmModal.addEventListener("click", (event) => {
	const rect = confirmModal.getBoundingClientRect();

	const isOutside =
		event.clientX < rect.left ||
		event.clientX > rect.right ||
		event.clientY < rect.top ||
		event.clientY > rect.bottom;

	if (isOutside) {
		confirmModal.close();
	}

});