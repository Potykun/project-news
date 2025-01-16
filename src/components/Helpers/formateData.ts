const formateData = (date: any) => {
	if (!(date instanceof Date)) {
		date = new Date(date) // Преобразование в объект Date, если это строка
	}

	if (isNaN(date.getTime())) {
		// Проверка на валидность даты
		return "Invalid date"
	}

	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}

	return date.toLocaleDateString("en-US", options)
}

export default formateData
