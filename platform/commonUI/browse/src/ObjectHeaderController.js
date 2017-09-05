/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2017, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

 define(
 	[],
 	function() {

 		/**
 		 * Controller to provide the ability to inline edit an object name.
 		 *
 		 * @constructor
         * @memberof platform/commonUI/browse
 		 */
	 	function ObjectHeaderController($scope) {
	 		this.$scope = $scope;	 		
	 		this.$scope.name = $scope.domainObject.model.name;
	 		this.$scope.valid = true;
	 		this.$scope.inlineEdit = false;
		}


	 	/**
	 	 * Handler for the blur and enter/return key press events
	 	 * to update the object name.
	 	 *
	 	 * @param event the mouse event
	 	 */	 	
	 	ObjectHeaderController.prototype.updateName = function (event) {
	 		var enterKeyPressed = event && event.which === 13;

	 		if (event === undefined || enterKeyPressed) {
	 			this.$scope.valid = true;
	 			
		 		var name = this.$scope.name;

		 		if (name.length == 0) {
		 			this.$scope.valid = false;
		 			return;
		 		}

		 		if (name !== this.$scope.domainObject.model.name) {
		 			this.$scope.domainObject.getCapability('mutation').mutate(function (model) {
		 				model.name = name;
		 			});
		 		}
				
		 		this.$scope.inlineEdit = false;

		 		if (enterKeyPressed) {
		 		 	event.currentTarget.blur();
		 		}
		 	}	
	 	};

	 	/**
	 	 * Handler for the click event to mark the filed as inline edit.
	 	 */
	 	ObjectHeaderController.prototype.edit = function () {
	 		this.$scope.inlineEdit = true;
	 	};

	 	return ObjectHeaderController;
	}
);