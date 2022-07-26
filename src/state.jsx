const user = {
	name: "Marina",
	lastname: "Petrova",
	email: "m.shorina@yandex.ru",
	id: "1",
	about: "Рассказываю о себе и своих увлечениях",
	avatar:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSot6M-oAP1lg2OuHL4lieNgospaOdne0hmQ&usqp=CAU",
};

const users = {
	0: { name: "Сергей", lastname: "Миронов" },
	1: { name: "Владислава", lastname: "Кабанова" },
	2: { name: "Андрей", lastname: "Бородин" },
	3: { name: "Юлия", lastname: "Смирнова" },
	4: { name: "Ксения", lastname: "Иванова" },
	5: { name: "Кузьма", lastname: "Чижиков" },
	6: { name: "Марина", lastname: "Петрова" },
};

export function getUser() {
	return user;
}
export function getUsers() {
	return users;
}
