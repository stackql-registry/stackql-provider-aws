--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - ecs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

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
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>The list of clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
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
    <td><a href="#describe_clusters"><CopyableCode code="describe_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your clusters. For CLI examples, see describe-clusters.rst on GitHub.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name. When you call the CreateCluster API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_cluster_settings"><CopyableCode code="update_cluster_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-settings"><code>settings</code></a></td>
    <td></td>
    <td>Modifies the settings to use for a cluster.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cluster"><code>cluster</code></a></td>
    <td></td>
    <td>Updates the cluster.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified cluster. The cluster transitions to the INACTIVE state. Clusters with an INACTIVE status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on INACTIVE clusters persisting. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of existing clusters.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

Describes one or more of your clusters. For CLI examples, see describe-clusters.rst on GitHub.

```sql
SELECT
clusters,
failures
FROM aws.ecs.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name. When you call the CreateCluster API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide.

```sql
INSERT INTO aws.ecs.clusters (
clusterName,
tags,
settings,
configuration,
capacityProviders,
defaultCapacityProviderStrategy,
serviceConnectDefaults,
region
)
SELECT 
'{{ clusterName }}',
'{{ tags }}',
'{{ settings }}',
'{{ configuration }}',
'{{ capacityProviders }}',
'{{ defaultCapacityProviderStrategy }}',
'{{ serviceConnectDefaults }}',
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
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        The name of your cluster. If you don't specify a name for your cluster, you create a cluster that's named default. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
    - name: tags
      description: |
        The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: settings
      description: |
        The setting to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. If this value is specified, it overrides the containerInsights value set with PutAccountSetting or PutAccountSettingDefault.
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: configuration
      description: |
        The execute command configuration for the cluster.
      value:
        executeCommandConfiguration:
          kmsKeyId: "{{ kmsKeyId }}"
          logging: "{{ logging }}"
          logConfiguration:
            cloudWatchLogGroupName: "{{ cloudWatchLogGroupName }}"
            cloudWatchEncryptionEnabled: {{ cloudWatchEncryptionEnabled }}
            s3BucketName: "{{ s3BucketName }}"
            s3EncryptionEnabled: {{ s3EncryptionEnabled }}
            s3KeyPrefix: "{{ s3KeyPrefix }}"
        managedStorageConfiguration:
          kmsKeyId: "{{ kmsKeyId }}"
          fargateEphemeralStorageKmsKeyId: "{{ fargateEphemeralStorageKmsKeyId }}"
    - name: capacityProviders
      value:
        - "{{ capacityProviders }}"
      description: |
        The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the CreateService or RunTask actions. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the CreateCapacityProvider API operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used. The PutCapacityProvider API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
    - name: defaultCapacityProviderStrategy
      description: |
        The capacity provider strategy to set as the default for the cluster. After a default capacity provider strategy is set for a cluster, when you call the CreateService or RunTask APIs with no capacity provider strategy or launch type specified, the default capacity provider strategy for the cluster is used. If a default capacity provider strategy isn't defined for a cluster when it was created, it can be defined later with the PutClusterCapacityProviders API operation.
      value:
        - capacityProvider: "{{ capacityProvider }}"
          weight: {{ weight }}
          base: {{ base }}
    - name: serviceConnectDefaults
      description: |
        Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the enabled parameter to true in the ServiceConnectConfiguration. You can set the namespace of each service individually in the ServiceConnectConfiguration to override this default parameter. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide.
      value:
        namespace: "{{ namespace }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster_settings"
    values={[
        { label: 'update_cluster_settings', value: 'update_cluster_settings' },
        { label: 'update_cluster', value: 'update_cluster' }
    ]}
>
<TabItem value="update_cluster_settings">

Modifies the settings to use for a cluster.

```sql
UPDATE aws.ecs.clusters
SET 
cluster = '{{ cluster }}',
settings = '{{ settings }}'
WHERE 
region = '{{ region }}' --required
AND cluster = '{{ cluster }}' --required
AND settings = '{{ settings }}' --required
RETURNING
cluster;
```
</TabItem>
<TabItem value="update_cluster">

Updates the cluster.

```sql
UPDATE aws.ecs.clusters
SET 
cluster = '{{ cluster }}',
settings = '{{ settings }}',
configuration = '{{ configuration }}',
serviceConnectDefaults = '{{ serviceConnectDefaults }}'
WHERE 
region = '{{ region }}' --required
AND cluster = '{{ cluster }}' --required
RETURNING
cluster;
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

Deletes the specified cluster. The cluster transitions to the INACTIVE state. Clusters with an INACTIVE status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on INACTIVE clusters persisting. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.

```sql
DELETE FROM aws.ecs.clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_clusters"
    values={[
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="list_clusters">

Returns a list of existing clusters.

```sql
EXEC aws.ecs.clusters.list_clusters 
@region='{{ region }}' --required 
@@json=
'{
"nextToken": "{{ nextToken }}", 
"maxResults": {{ maxResults }}
}'
;
```
</TabItem>
</Tabs>
