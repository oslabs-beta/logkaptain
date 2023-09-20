// const k8s = require('@kubernetes/client-node');
// const path = require('path');
// const fs = require('fs');
// const yaml = require('js-yaml');

// const yamlContent = fs.readFileSync(path.join(__dirname, '../k8s/bb.yaml'), 'utf8'); // Returns the YAML file content into a string

// const yamlDocuments = yamlContent.split('---'); // Split the YAML content into individual documents

// /**
//  * In this Kubernetes YAML file (bb.yaml), we have two objects, separated by the `---`:
//  *  - A `Deployment`, describing a scalable group of identical pods. In this case, we have 2 `replicas`, or copy of our pod, and those pods have just one container, based off of an app called `getting-started`.
//  *  - A `NodePort` service, which will route traffic from port 30001 on the host to port 3000 inside the pods it routes to, allowing us to reach your Todo app from the network.
//  */

// const documentIndex = 0; // Index of the first document to load (because yamlContent has been split)

// const selectedYamlDocument = yaml.load(yamlDocuments[documentIndex]); // Parsing the Deployment section of the YAML document

// const kubeConfigPath = path.join(process.env.HOME, '.kube/config'); // Loading the Kubernetes configuration from ~/.kube/config. Assuming it's in the home directory

// const kc = new k8s.KubeConfig(); //creating a new instance of the KubeConfig class. This instance is used to configure and manage a Kubernetes cluster access from a Node.js application.
// kc.loadFromFile(kubeConfigPath); // Loading configuration from the ~/.kube/config file

// // Creating Kubernetes API client instances for our cluster
// const coreV1Api = kc.makeApiClient(k8s.CoreV1Api); //  Kubernetes Core. Methods for working with core Kubernetes resources like Pods, Services, ConfigMaps...
// const appsV1Api = kc.makeApiClient(k8s.AppsV1Api); // Kubernetes APPs. Methods for working with higher-level Kubernetes resources related to application deployments.

// module.exports = { coreV1Api, appsV1Api };
