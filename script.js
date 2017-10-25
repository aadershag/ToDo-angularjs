var appx = angular.module('mainApp',[]);

appx.controller('app',function($scope) {
	$scope.tasks = [];
	var taskData = localStorage['tasksList'];
	if(taskData !== undefined){
		$scope.tasks = JSON.parse(taskData);
	}
	$scope.searchEnter = function(event) {
		//console.log(event.keyCode); 
		if(event.which==13 && $scope.task!=''){
			$scope.addTask();
		}
	};
	$scope.addTask=function(event){
		$scope.tasks.push({'taskmsg':$scope.task, 'status':false});
		//console.log($scope.task);
		$scope.task='';
		localStorage['tasksList']=JSON.stringify($scope.tasks);
	};
	$scope.editContent=function(event,mm){
		console.log(mm);
		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].taskmsg==mm){
				console.log(i);
				$scope.tasks[i].taskmsg=event.target.innerText;
			}
		}
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
		localStorage['tasksList']=JSON.stringify($scope.tasks);
		//event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};
	$scope.enter=function(event,msg){
		if(event.which==13 && msg!=''){
		//console.log('asd');
		$scope.editContent(msg);
		}
		///console.log('wq');
	}
	$scope.delfield=function(mm){
		console.log("2");
		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].taskmsg==mm){
				console.log(mm);
				console.log(localStorage['tasksList']);
				$scope.tasks.splice(i,1);
				localStorage['tasksList']=JSON.stringify($scope.tasks);
			}
		}
	}
	$scope.sort=function(){
		console.log("sort");
		
	}
});