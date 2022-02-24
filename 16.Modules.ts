/*

	It is a block of code in which we write our related. It can be 
	related functions,classes,variables.

	We write Modules when we have multiple files and those few 
	of those files contain same name functions or classes 
	in them. Then a problem can occur.

	If we have Student and Teacher two files and we want to implement
	Login Feature in both of them. Then a issue might be raised.

	We can use "export default" in front of the class,function name.
	Then this problem wont occur

 */

	import Slogin from './16.1Student'
	import Tlogin from './16.2Teacher'

	let teacher = new Tlogin();
	console.log(teacher.data);

	let student = new Slogin();
	console.log(student.data);
	
	