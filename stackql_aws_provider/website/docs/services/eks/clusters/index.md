--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - eks
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of your local Amazon EKS cluster on an Amazon Web Services Outpost. This property isn't available for an Amazon EKS cluster on the Amazon Web Services cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="accessConfig" /></td>
    <td><code>object</code></td>
    <td>The access configuration for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="certificateAuthority" /></td>
    <td><code>object</code></td>
    <td>The certificate-authority-data for your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="computeConfig" /></td>
    <td><code>object</code></td>
    <td>Indicates the current configuration of the compute capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your Amazon Web Services account. For more information, see EKS Auto Mode compute capability in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration used to connect to a cluster for registration.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneScalingConfig" /></td>
    <td><code>object</code></td>
    <td>The control plane scaling tier configuration. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp at object creation.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>The current deletion protection setting for the cluster. When true, deletion protection is enabled and the cluster cannot be deleted until protection is disabled. When false, the cluster can be deleted normally. This setting only applies to clusters in an active state.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>array</code></td>
    <td>The encryption configuration for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint for your Kubernetes API server.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>An object representing the health of your Amazon EKS cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="identity" /></td>
    <td><code>object</code></td>
    <td>The identity provider information for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesNetworkConfig" /></td>
    <td><code>object</code></td>
    <td>The Kubernetes network configuration for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>An object representing the logging configuration for resources in your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="outpostConfig" /></td>
    <td><code>object</code></td>
    <td>An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="platformVersion" /></td>
    <td><code>string</code></td>
    <td>The platform version of your Amazon EKS cluster. For more information about clusters deployed on the Amazon Web Services Cloud, see Platform versions in the Amazon EKS User Guide . For more information about local clusters deployed on an Outpost, see Amazon EKS local cluster platform versions in the Amazon EKS User Guide .</td>
</tr>
<tr>
    <td><CopyableCode code="remoteNetworkConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesVpcConfig" /></td>
    <td><code>object</code></td>
    <td>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC considerations and Cluster security group considerations in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the cluster. (CREATING, ACTIVE, DELETING, FAILED, UPDATING, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfig" /></td>
    <td><code>object</code></td>
    <td>Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your Amazon Web Services account. For more information, see EKS Auto Mode block storage capability in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradePolicy" /></td>
    <td><code>object</code></td>
    <td>This value indicates if extended support is enabled or disabled for the cluster. Learn more about EKS Extended Support in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The Kubernetes server version for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zonalShiftConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration for zonal shift for the cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>A list of all of the clusters for your account in the specified Amazon Web Services Region .</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_cluster"><CopyableCode code="describe_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Creating or updating a kubeconfig file for an Amazon EKS cluster. The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-resourcesVpcConfig"><code>resourcesVpcConfig</code></a></td>
    <td></td>
    <td>Creates an Amazon EKS control plane. The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. The endpoint domain name and IP address family depends on the value of the ipFamily for the cluster. For more information, see Amazon EKS Cluster Endpoint Access Control in the Amazon EKS User Guide . You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the Amazon EKS User Guide . CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing. In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Allowing users to access your cluster and Launching Amazon EKS nodes in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#register_cluster"><CopyableCode code="register_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-connectorConfig"><code>connectorConfig</code></a></td>
    <td></td>
    <td>Connects a Kubernetes cluster to the Amazon EKS control plane. Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. Cluster connection requires two steps. First, send a RegisterClusterRequest to add it to the Amazon EKS control plane. Second, a Manifest containing the activationID and activationCode must be applied to the Kubernetes cluster through it's native provider to provide visibility. After the manifest is updated and applied, the connected cluster is visible to the Amazon EKS control plane. If the manifest isn't applied within three days, the connected cluster will no longer be visible and must be deregistered using DeregisterCluster.</td>
</tr>
<tr>
    <td><a href="#update_cluster_config"><CopyableCode code="update_cluster_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with DescribeUpdate. You can use this operation to do the following actions: You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the Amazon EKS User Guide . CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing. You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Cluster API server endpoint in the Amazon EKS User Guide . You can also use this API operation to choose different subnets and security groups for the cluster. You must specify at least two subnets that are in different Availability Zones. You can't change which VPC the subnets are from, the subnets must be in the same VPC as the subnets that the cluster was created with. For more information about the VPC requirements, see https:​//docs.aws.amazon.com/eks/latest/userguide/network_reqs.html in the Amazon EKS User Guide . You can also use this API operation to enable or disable ARC zonal shift. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster. You can also use this API operation to add, change, or remove the configuration in the cluster for EKS Hybrid Nodes. To remove the configuration, use the remoteNetworkConfig key with an object containing both subkeys with empty arrays for each. Here is an inline example: "remoteNetworkConfig": &#123; "remoteNodeNetworks": &#91;&#93;, "remotePodNetworks": &#91;&#93; &#125;. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon EKS cluster control plane. If you have active services and ingress resources in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodgroup and DeleteFargateProfile.</td>
</tr>
<tr>
    <td><a href="#deregister_cluster"><CopyableCode code="deregister_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a connected cluster to remove it from the Amazon EKS control plane. A connected cluster is a Kubernetes cluster that you've connected to your control plane using the Amazon EKS Connector.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the connected cluster to deregister.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>array</code></td>
    <td>Indicates whether external clusters are included in the returned list. Use 'all' to return https:​//docs.aws.amazon.com/eks/latest/userguide/eks-connector.htmlconnected clusters, or blank to return only Amazon EKS clusters. 'all' must be in lowercase otherwise an error occurs.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

Describes an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Creating or updating a kubeconfig file for an Amazon EKS cluster. The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state.

```sql
SELECT
id,
name,
accessConfig,
arn,
certificateAuthority,
clientRequestToken,
computeConfig,
connectorConfig,
controlPlaneScalingConfig,
createdAt,
deletionProtection,
encryptionConfig,
endpoint,
health,
identity,
kubernetesNetworkConfig,
logging,
outpostConfig,
platformVersion,
remoteNetworkConfig,
resourcesVpcConfig,
roleArn,
status,
storageConfig,
tags,
upgradePolicy,
version,
zonalShiftConfig
FROM aws.eks.clusters
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Amazon Web Services Region.

```sql
SELECT
cluster
FROM aws.eks.clusters
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'register_cluster', value: 'register_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates an Amazon EKS control plane. The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster. You can use the endpointPublicAccess and endpointPrivateAccess parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. The endpoint domain name and IP address family depends on the value of the ipFamily for the cluster. For more information, see Amazon EKS Cluster Endpoint Access Control in the Amazon EKS User Guide . You can use the logging parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the Amazon EKS User Guide . CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing. In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Allowing users to access your cluster and Launching Amazon EKS nodes in the Amazon EKS User Guide.

```sql
INSERT INTO aws.eks.clusters (
name,
version,
roleArn,
resourcesVpcConfig,
kubernetesNetworkConfig,
logging,
clientRequestToken,
tags,
encryptionConfig,
outpostConfig,
accessConfig,
bootstrapSelfManagedAddons,
upgradePolicy,
zonalShiftConfig,
remoteNetworkConfig,
computeConfig,
storageConfig,
deletionProtection,
controlPlaneScalingConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ version }}',
'{{ roleArn }}' /* required */,
'{{ resourcesVpcConfig }}' /* required */,
'{{ kubernetesNetworkConfig }}',
'{{ logging }}',
'{{ clientRequestToken }}',
'{{ tags }}',
'{{ encryptionConfig }}',
'{{ outpostConfig }}',
'{{ accessConfig }}',
{{ bootstrapSelfManagedAddons }},
'{{ upgradePolicy }}',
'{{ zonalShiftConfig }}',
'{{ remoteNetworkConfig }}',
'{{ computeConfig }}',
'{{ storageConfig }}',
{{ deletionProtection }},
'{{ controlPlaneScalingConfig }}',
'{{ region }}'
RETURNING
cluster
;
```
</TabItem>
<TabItem value="register_cluster">

Connects a Kubernetes cluster to the Amazon EKS control plane. Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. Cluster connection requires two steps. First, send a RegisterClusterRequest to add it to the Amazon EKS control plane. Second, a Manifest containing the activationID and activationCode must be applied to the Kubernetes cluster through it's native provider to provide visibility. After the manifest is updated and applied, the connected cluster is visible to the Amazon EKS control plane. If the manifest isn't applied within three days, the connected cluster will no longer be visible and must be deregistered using DeregisterCluster.

```sql
INSERT INTO aws.eks.clusters (
name,
connectorConfig,
clientRequestToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ connectorConfig }}' /* required */,
'{{ clientRequestToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
cluster
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: name
      value: "{{ name }}"
    - name: version
      value: "{{ version }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: resourcesVpcConfig
      description: |
        An object representing the VPC configuration to use for an Amazon EKS cluster.
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
        endpointPublicAccess: {{ endpointPublicAccess }}
        endpointPrivateAccess: {{ endpointPrivateAccess }}
        publicAccessCidrs:
          - "{{ publicAccessCidrs }}"
    - name: kubernetesNetworkConfig
      description: |
        The Kubernetes network configuration for the cluster.
      value:
        serviceIpv4Cidr: "{{ serviceIpv4Cidr }}"
        ipFamily: "{{ ipFamily }}"
        elasticLoadBalancing:
          enabled: {{ enabled }}
    - name: logging
      description: |
        An object representing the logging configuration for resources in your cluster.
      value:
        clusterLogging:
          - types: "{{ types }}"
            enabled: {{ enabled }}
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    - name: encryptionConfig
      value:
        - resources: "{{ resources }}"
          provider:
            keyArn: "{{ keyArn }}"
    - name: outpostConfig
      description: |
        The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review Creating a local cluster on an Outpost in the Amazon EKS User Guide. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.
      value:
        outpostArns:
          - "{{ outpostArns }}"
        controlPlaneInstanceType: "{{ controlPlaneInstanceType }}"
        controlPlanePlacement:
          groupName: "{{ groupName }}"
    - name: accessConfig
      description: |
        The access configuration information for the cluster.
      value:
        bootstrapClusterCreatorAdminPermissions: {{ bootstrapClusterCreatorAdminPermissions }}
        authenticationMode: "{{ authenticationMode }}"
    - name: bootstrapSelfManagedAddons
      value: {{ bootstrapSelfManagedAddons }}
    - name: upgradePolicy
      description: |
        The support policy to use for the cluster. Extended support allows you to remain on specific Kubernetes versions for longer. Clusters in extended support have higher costs. The default value is EXTENDED. Use STANDARD to disable extended support. Learn more about EKS Extended Support in the Amazon EKS User Guide.
      value:
        supportType: "{{ supportType }}"
    - name: zonalShiftConfig
      description: |
        The configuration for zonal shift for the cluster.
      value:
        enabled: {{ enabled }}
    - name: remoteNetworkConfig
      description: |
        The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.
      value:
        remoteNodeNetworks:
          - cidrs: "{{ cidrs }}"
        remotePodNetworks:
          - cidrs: "{{ cidrs }}"
    - name: computeConfig
      description: |
        Request to update the configuration of the compute capability of your EKS Auto Mode cluster. For example, enable the capability. For more information, see EKS Auto Mode compute capability in the Amazon EKS User Guide.
      value:
        enabled: {{ enabled }}
        nodePools:
          - "{{ nodePools }}"
        nodeRoleArn: "{{ nodeRoleArn }}"
    - name: storageConfig
      description: |
        Request to update the configuration of the storage capability of your EKS Auto Mode cluster. For example, enable the capability. For more information, see EKS Auto Mode block storage capability in the Amazon EKS User Guide.
      value:
        blockStorage:
          enabled: {{ enabled }}
    - name: deletionProtection
      value: {{ deletionProtection }}
    - name: controlPlaneScalingConfig
      description: |
        The control plane scaling tier configuration. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.
      value:
        tier: "{{ tier }}"
    - name: connectorConfig
      description: |
        The configuration sent to a cluster for configuration.
      value:
        roleArn: "{{ roleArn }}"
        provider: "{{ provider }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster_config"
    values={[
        { label: 'update_cluster_config', value: 'update_cluster_config' }
    ]}
>
<TabItem value="update_cluster_config">

Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with DescribeUpdate. You can use this operation to do the following actions: You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the Amazon EKS User Guide . CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see CloudWatch Pricing. You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Cluster API server endpoint in the Amazon EKS User Guide . You can also use this API operation to choose different subnets and security groups for the cluster. You must specify at least two subnets that are in different Availability Zones. You can't change which VPC the subnets are from, the subnets must be in the same VPC as the subnets that the cluster was created with. For more information about the VPC requirements, see https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html in the Amazon EKS User Guide . You can also use this API operation to enable or disable ARC zonal shift. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster. You can also use this API operation to add, change, or remove the configuration in the cluster for EKS Hybrid Nodes. To remove the configuration, use the remoteNetworkConfig key with an object containing both subkeys with empty arrays for each. Here is an inline example: "remoteNetworkConfig": &#123; "remoteNodeNetworks": [], "remotePodNetworks": [] &#125;. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.

```sql
UPDATE aws.eks.clusters
SET 
resourcesVpcConfig = '{{ resourcesVpcConfig }}',
logging = '{{ logging }}',
clientRequestToken = '{{ clientRequestToken }}',
accessConfig = '{{ accessConfig }}',
upgradePolicy = '{{ upgradePolicy }}',
zonalShiftConfig = '{{ zonalShiftConfig }}',
computeConfig = '{{ computeConfig }}',
kubernetesNetworkConfig = '{{ kubernetesNetworkConfig }}',
storageConfig = '{{ storageConfig }}',
remoteNetworkConfig = '{{ remoteNetworkConfig }}',
deletionProtection = {{ deletionProtection }},
controlPlaneScalingConfig = '{{ controlPlaneScalingConfig }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster"
    values={[
        { label: 'delete_cluster', value: 'delete_cluster' }
    ]}
>
<TabItem value="delete_cluster">

Deletes an Amazon EKS cluster control plane. If you have active services and ingress resources in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodgroup and DeleteFargateProfile.

```sql
DELETE FROM aws.eks.clusters
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deregister_cluster"
    values={[
        { label: 'deregister_cluster', value: 'deregister_cluster' }
    ]}
>
<TabItem value="deregister_cluster">

Deregisters a connected cluster to remove it from the Amazon EKS control plane. A connected cluster is a Kubernetes cluster that you've connected to your control plane using the Amazon EKS Connector.

```sql
EXEC aws.eks.clusters.deregister_cluster 
@name='{{ name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
