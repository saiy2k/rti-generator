var rtiApp = angular.module('rtiApp', []);

rtiApp.controller('rtiIndexController', 
	[
		'$scope',
    	'$window',
		function($scope,$window) {
			$scope.refreshAll = function () {
	      		$scope.title = $window.locTitle;
	      		$scope.tagLine = $window.locTagLine;
				$scope.listQs = $window.listQuestions;
				$scope.backTxt = $window.locBackText;
				$scope.feedbackFormTxt = $window.feedbackFormText;
				$scope.currentlangTxt = $window.currentlangText;
				$scope.switchLangTxt =  $window.switchLangText;
				$scope.fromTxt = $window.fromText;
				$scope.subjectTxt = $window.subjectText;
				$scope.applicationTxt = $window.applicationText;
				$scope.briefDescTxt = $window.briefDescText;
				$scope.descriptionTxt = $window.descriptionText;
				$scope.periodText = $window.periodTxt;
				$scope.claimBelowPovertyTxt = $window.claimBelowPovertyText;
				$scope.chargeTxt = $window.chargeText;
				$scope.courtFeeStampTxt = $window.courtFeeStampText;
				$scope.courtFeeStatesTxt = $window.courtFeeStatesText;
				$scope.postalOrderTxt = $window.postalOrderText;
				$scope.postalOrderStatesTxt = $window.postalOrderStatesText;
				$scope.ddTxt = $window.ddText;
				$scope.ddStatesTxt = $window.ddStatesText;
				$scope.saveRtiTxt = $window.saveRtiText;
				$scope.tweetTxt = $window.tweetText;
				$scope.tipTxt = $window.tipText;
				$scope.tip1Txt = $window.tip1Text;
				$scope.tip2Txt = $window.tip2Text;
				$scope.tip3Txt = $window.tip3Text;
				$scope.tip4Txt = $window.tip4Text;
				$scope.bhagatSinghQouteTxt = $window.bhagatSinghQouteText;
				$scope.softLicStartTxt = $window.softLicStartText;
				$scope.gnuLicTxt = $window.gnuLicText;
				$scope.srcCodeTxt = $window.srcCodeText;
				$scope.githubTxt = $window.githubText;
				$scope.$apply();
			  	console.log('done');
	    	};	

		}
	]
);