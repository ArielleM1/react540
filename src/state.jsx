const user = {
	name: "Marina",
	lastname: "Petrova",
	email: "m.shorina@yandex.ru",
	id: "1",
	about: "Рассказываю о себе и своих увлечениях",
	avatar:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU",
};

// const users = {
// 	0: { name: "Сергей", lastname: "Миронов", id: 4 },
// 	1: { name: "Владислава", lastname: "Кабанова", id: 7 },
// 	2: { name: "Андрей", lastname: "Бородин", id: 9 },
// 	3: { name: "Юлия", lastname: "Смирнова", id: 2 },
// 	4: { name: "Ксения", lastname: "Иванова", id: 12 },
// 	5: { name: "Кузьма", lastname: "Чижиков", id: 18 },
// 	6: { name: "Марина", lastname: "Петрова", id: 3 },
// };
let users = {};

export function getUser(userId) {
	for (let i = 0; i < Object.keys(users).length; i++) {
		if ((users[i].id = userId)) return users[i];
	}
	return user;
}
export async function getUsers() {
	let response = await fetch("http://tatum.p-host.in/getUsers");
	users = await response.json();
	return users;
}
