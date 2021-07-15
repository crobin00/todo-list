export class Task {
	constructor(title, description, dueDate, urgent, normal) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.urgent = urgent;
		this.normal = normal;
		this.complete = false;
	}

	getTitle() {
		return this.title;
	}
	getDescription() {
		return this.description;
	}
	getDueDate() {
		return this.dueDate;
	}
	getUrgent() {
		return this.urgent;
	}
	getNormal() {
		return this.normal;
	}
}
