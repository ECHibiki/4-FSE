class DanbooruImageAdder extends FeatureInterface{
	
	help_icon_source:string = " data:image/jpeg;base64,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"

	constructor(){
		super();
	}
	init():void{}
	retrieveStates():void{}
	storeStates(...items:any[]):void{}
	activate():void{}
	decideAction(node:any):void{}
	
}