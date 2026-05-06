import 'dart:io';

void main() {
  List<String> tasks = [];

  while (true) {
    print("\n===== TO-DO LIST MENU =====");
    print("1. Add Task");
    print("2. View Tasks");
    print("3. Delete Task");
    print("4. Exit");
    stdout.write("Enter your choice: ");

    String? choice = stdin.readLineSync();

    switch (choice) {
      case '1':
        addTask(tasks);
        break;

      case '2':
        viewTasks(tasks);
        break;

      case '3':
        deleteTask(tasks);
        break;

      case '4':
        print("Exiting... Goodbye ");
        return;

      default:
        print("Invalid choice! Try again.");
    }
  }
}

void addTask(List<String> tasks) {
  stdout.write("Enter task: ");
  String? task = stdin.readLineSync();

  if (task != null && task.isNotEmpty) {
    tasks.add(task);
    print("Task added successfully ");
  } else {
    print("Task cannot be empty!");
  }
}

void viewTasks(List<String> tasks) {
  if (tasks.isEmpty) {
    print("No tasks available.");
  } else {
    print("\nYour Tasks:");
    for (int i = 0; i < tasks.length; i++) {
      print("${i + 1}. ${tasks[i]}");
    }
  }
}

void deleteTask(List<String> tasks) {
  viewTasks(tasks);

  if (tasks.isEmpty) return;

  stdout.write("Enter task number to delete: ");
  String? input = stdin.readLineSync();

  int? index = int.tryParse(input ?? "");

  if (index != null && index > 0 && index <= tasks.length) {
    tasks.removeAt(index - 1);
    print("Task deleted successfully ");
  } else {
    print("Invalid task number!");
  }
}