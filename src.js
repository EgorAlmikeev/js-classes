<html>
  <script src="/j/out"></script>
  <script>{
  
  class Father {
	constructor(name = 'Dart') { this.name = name.toUpperCase(); }
	get myName() { return this.name; }
  }

  class Son extends Father {
	constructor(name2 = 'Luke') { super(); this.name2 = name2; }
	get myName() { return this.name2 + " " + super.myName + "'s son"; }
  }

const son1 = new Son();
Out.log(son1.myName);
  
}</script>
</html>
