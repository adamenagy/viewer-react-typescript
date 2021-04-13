export class MyExtension extends Autodesk.Viewing.Extension {
  load() {
      console.log('MyExtension has been loaded');
      return true;
  }

  unload() {
      console.log('MyExtension has been unloaded');
      return true;
  }

  onToolbarCreated(toolbar: any) {
    console.log('onToolbarCreated');

    let button = new Autodesk.Viewing.UI.Button('myButton');
    button.setIcon('adsk-icon-measure');

    let group = new Autodesk.Viewing.UI.ControlGroup('my-custom-toolbar')
    group.addControl(button)

    toolbar?.addControl(group)
  }

  static register() {
    Autodesk.Viewing.theExtensionManager.registerExtension(
      "MyExtension",
      MyExtension
    );
  }
}; 





