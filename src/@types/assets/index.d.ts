declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
} 

// For JPEG files
declare module "*.jpg" {
  const value: string;
  export default value;
}

// For PNG files
declare module "*.png" {
  const value: string;
  export default value;
}