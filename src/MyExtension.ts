export class MyExtension extends Autodesk.Viewing.Extension {
  load() {
      console.log('MyExtension has been loaded');
      return true;
  }

  unload() {
      console.log('MyExtension has been unloaded');
      return true;
  }

  static register() {
    Autodesk.Viewing.theExtensionManager.registerExtension(
      "MyExtension",
      MyExtension
    );
  }
};





