export class MyExtension extends Autodesk.Viewing.Extension {
  load() {
      console.log('MyExtension has been loaded');
      this.viewer.setEnvMapBackground(false); // Hide background environment if there is one
      this.viewer.setBackgroundColor(0, 64, 128, 0, 64, 128); // Set background color
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





