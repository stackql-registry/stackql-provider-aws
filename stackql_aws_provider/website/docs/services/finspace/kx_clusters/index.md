--- 
title: kx_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_clusters
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_cluster"
    values={[
        { label: 'get_kx_cluster', value: 'get_kx_cluster' },
        { label: 'list_kx_clusters', value: 'list_kx_clusters' }
    ]}
>
<TabItem value="get_kx_cluster">

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
    <td><CopyableCode code="autoScalingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The availability zone identifiers for the requested regions. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="azMode" /></td>
    <td><code>string</code></td>
    <td>The number of availability zones you want to assign per cluster. This can be one of the following SINGLE – Assigns one availability zone per cluster. MULTI – Assigns all the availability zones per cluster. (SINGLE, MULTI)</td>
</tr>
<tr>
    <td><CopyableCode code="cacheStorageConfigurations" /></td>
    <td><code>array</code></td>
    <td>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityConfiguration" /></td>
    <td><code>object</code></td>
    <td>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterDescription" /></td>
    <td><code>string</code></td>
    <td>A description of the cluster. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-\.\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>A unique name for the cluster. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of KDB database that is being created. The following types are available: HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster. RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter. GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage. GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode. Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process. (HDB, RDB, GATEWAY, GP, TICKERPLANT)</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>object</code></td>
    <td>The structure of the customer code available within the running cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="commandLineArguments" /></td>
    <td><code>array</code></td>
    <td>Defines key-value pairs to make them available inside the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="databases" /></td>
    <td><code>array</code></td>
    <td>A list of databases mounted on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster. (pattern: &lt;code&gt;^arn:aws&#91;a-z0-9-&#93;*:iam::\d&#123;12&#125;:role\/&#91;\w-\/.@+=,&#93;&#123;1,1017&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="initializationScript" /></td>
    <td><code>string</code></td>
    <td>Specifies a Q program that will be run at launch of a cluster. It is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-\.\/\\&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseLabel" /></td>
    <td><code>string</code></td>
    <td>The version of FinSpace managed kdb to run. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="savedownStorageConfiguration" /></td>
    <td><code>object</code></td>
    <td>The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted.</td>
</tr>
<tr>
    <td><CopyableCode code="scalingGroupConfiguration" /></td>
    <td><code>object</code></td>
    <td>The structure that stores the capacity configuration details of a scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of cluster creation. PENDING – The cluster is pending creation. CREATING – The cluster creation process is in progress. CREATE_FAILED – The cluster creation process has failed. RUNNING – The cluster creation process is running. UPDATING – The cluster is in the process of being updated. DELETING – The cluster is in the process of being deleted. DELETED – The cluster has been deleted. DELETE_FAILED – The cluster failed to delete. (PENDING, CREATING, CREATE_FAILED, RUNNING, UPDATING, DELETING, DELETED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The error message when a failed state occurs. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-\.\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tickerplantLogConfiguration" /></td>
    <td><code>object</code></td>
    <td>A configuration to store the Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant, the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>A list of volumes attached to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration details about the network where the Privatelink endpoint of the cluster resides.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_clusters">

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
    <td><CopyableCode code="kxClusterSummaries" /></td>
    <td><code>array</code></td>
    <td>Lists the cluster details.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_kx_cluster"><CopyableCode code="get_kx_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a kdb cluster.</td>
</tr>
<tr>
    <td><a href="#list_kx_clusters"><CopyableCode code="list_kx_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterType"><code>clusterType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of clusters.</td>
</tr>
<tr>
    <td><a href="#create_kx_cluster"><CopyableCode code="create_kx_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a>, <a href="#parameter-clusterType"><code>clusterType</code></a>, <a href="#parameter-releaseLabel"><code>releaseLabel</code></a>, <a href="#parameter-vpcConfiguration"><code>vpcConfiguration</code></a>, <a href="#parameter-azMode"><code>azMode</code></a></td>
    <td></td>
    <td>Creates a new kdb cluster.</td>
</tr>
<tr>
    <td><a href="#update_kx_cluster_code_configuration"><CopyableCode code="update_kx_cluster_code_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-code"><code>code</code></a></td>
    <td></td>
    <td>Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster. The configuration that you want to update will override any existing configurations on the cluster.</td>
</tr>
<tr>
    <td><a href="#update_kx_cluster_databases"><CopyableCode code="update_kx_cluster_databases" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databases"><code>databases</code></a></td>
    <td></td>
    <td>Updates the databases mounted on a kdb cluster, which includes the changesetId and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one. Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.</td>
</tr>
<tr>
    <td><a href="#delete_kx_cluster"><CopyableCode code="delete_kx_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a kdb cluster.</td>
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
<tr id="parameter-cluster_name">
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster that you want to delete.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-clusterType">
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of KDB database that is being created. The following types are available: HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster. RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the savedownStorageConfiguration parameter. GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage. GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only SINGLE AZ mode. Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kx_cluster"
    values={[
        { label: 'get_kx_cluster', value: 'get_kx_cluster' },
        { label: 'list_kx_clusters', value: 'list_kx_clusters' }
    ]}
>
<TabItem value="get_kx_cluster">

Retrieves information about a kdb cluster.

```sql
SELECT
autoScalingConfiguration,
availabilityZoneId,
azMode,
cacheStorageConfigurations,
capacityConfiguration,
clusterDescription,
clusterName,
clusterType,
code,
commandLineArguments,
createdTimestamp,
databases,
executionRole,
initializationScript,
lastModifiedTimestamp,
releaseLabel,
savedownStorageConfiguration,
scalingGroupConfiguration,
status,
statusReason,
tickerplantLogConfiguration,
volumes,
vpcConfiguration
FROM aws.finspace.kx_clusters
WHERE environment_id = '{{ environment_id }}' -- required
AND cluster_name = '{{ cluster_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_clusters">

Returns a list of clusters.

```sql
SELECT
kxClusterSummaries,
nextToken
FROM aws.finspace.kx_clusters
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
AND clusterType = '{{ clusterType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_cluster"
    values={[
        { label: 'create_kx_cluster', value: 'create_kx_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_cluster">

Creates a new kdb cluster.

```sql
INSERT INTO aws.finspace.kx_clusters (
clientToken,
clusterName,
clusterType,
tickerplantLogConfiguration,
databases,
cacheStorageConfigurations,
autoScalingConfiguration,
clusterDescription,
capacityConfiguration,
releaseLabel,
vpcConfiguration,
initializationScript,
commandLineArguments,
code,
executionRole,
savedownStorageConfiguration,
azMode,
availabilityZoneId,
tags,
scalingGroupConfiguration,
environment_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ clusterName }}' /* required */,
'{{ clusterType }}' /* required */,
'{{ tickerplantLogConfiguration }}',
'{{ databases }}',
'{{ cacheStorageConfigurations }}',
'{{ autoScalingConfiguration }}',
'{{ clusterDescription }}',
'{{ capacityConfiguration }}',
'{{ releaseLabel }}' /* required */,
'{{ vpcConfiguration }}' /* required */,
'{{ initializationScript }}',
'{{ commandLineArguments }}',
'{{ code }}',
'{{ executionRole }}',
'{{ savedownStorageConfiguration }}',
'{{ azMode }}' /* required */,
'{{ availabilityZoneId }}',
'{{ tags }}',
'{{ scalingGroupConfiguration }}',
'{{ environment_id }}',
'{{ region }}'
RETURNING
autoScalingConfiguration,
availabilityZoneId,
azMode,
cacheStorageConfigurations,
capacityConfiguration,
clusterDescription,
clusterName,
clusterType,
code,
commandLineArguments,
createdTimestamp,
databases,
environmentId,
executionRole,
initializationScript,
lastModifiedTimestamp,
releaseLabel,
savedownStorageConfiguration,
scalingGroupConfiguration,
status,
statusReason,
tickerplantLogConfiguration,
volumes,
vpcConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_clusters
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_clusters resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: clusterName
      value: "{{ clusterName }}"
    - name: clusterType
      value: "{{ clusterType }}"
      valid_values: ['HDB', 'RDB', 'GATEWAY', 'GP', 'TICKERPLANT']
    - name: tickerplantLogConfiguration
      description: |
        A configuration to store the Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant, the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path.
      value:
        tickerplantLogVolumes:
          - "{{ tickerplantLogVolumes }}"
    - name: databases
      value:
        - databaseName: "{{ databaseName }}"
          cacheConfigurations: "{{ cacheConfigurations }}"
          changesetId: "{{ changesetId }}"
          dataviewName: "{{ dataviewName }}"
          dataviewConfiguration:
            dataviewName: "{{ dataviewName }}"
            dataviewVersionId: "{{ dataviewVersionId }}"
            changesetId: "{{ changesetId }}"
            segmentConfigurations:
              - dbPaths: "{{ dbPaths }}"
                volumeName: "{{ volumeName }}"
                onDemand: {{ onDemand }}
    - name: cacheStorageConfigurations
      value:
        - type_: "{{ type_ }}"
          size: {{ size }}
    - name: autoScalingConfiguration
      description: |
        The configuration based on which FinSpace will scale in or scale out nodes in your cluster.
      value:
        minNodeCount: {{ minNodeCount }}
        maxNodeCount: {{ maxNodeCount }}
        autoScalingMetric: "{{ autoScalingMetric }}"
        metricTarget: {{ metricTarget }}
        scaleInCooldownSeconds: {{ scaleInCooldownSeconds }}
        scaleOutCooldownSeconds: {{ scaleOutCooldownSeconds }}
    - name: clusterDescription
      value: "{{ clusterDescription }}"
    - name: capacityConfiguration
      description: |
        A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.
      value:
        nodeType: "{{ nodeType }}"
        nodeCount: {{ nodeCount }}
    - name: releaseLabel
      value: "{{ releaseLabel }}"
    - name: vpcConfiguration
      description: |
        Configuration details about the network where the Privatelink endpoint of the cluster resides.
      value:
        vpcId: "{{ vpcId }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
        subnetIds:
          - "{{ subnetIds }}"
        ipAddressType: "{{ ipAddressType }}"
    - name: initializationScript
      value: "{{ initializationScript }}"
    - name: commandLineArguments
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: code
      description: |
        The structure of the customer code available within the running cluster.
      value:
        s3Bucket: "{{ s3Bucket }}"
        s3Key: "{{ s3Key }}"
        s3ObjectVersion: "{{ s3ObjectVersion }}"
    - name: executionRole
      value: "{{ executionRole }}"
    - name: savedownStorageConfiguration
      description: |
        The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted.
      value:
        type_: "{{ type_ }}"
        size: {{ size }}
        volumeName: "{{ volumeName }}"
    - name: azMode
      value: "{{ azMode }}"
      valid_values: ['SINGLE', 'MULTI']
    - name: availabilityZoneId
      value: "{{ availabilityZoneId }}"
    - name: tags
      value: "{{ tags }}"
    - name: scalingGroupConfiguration
      description: |
        The structure that stores the capacity configuration details of a scaling group.
      value:
        scalingGroupName: "{{ scalingGroupName }}"
        memoryLimit: {{ memoryLimit }}
        memoryReservation: {{ memoryReservation }}
        nodeCount: {{ nodeCount }}
        cpu: {{ cpu }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kx_cluster_code_configuration"
    values={[
        { label: 'update_kx_cluster_code_configuration', value: 'update_kx_cluster_code_configuration' },
        { label: 'update_kx_cluster_databases', value: 'update_kx_cluster_databases' }
    ]}
>
<TabItem value="update_kx_cluster_code_configuration">

Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster. The configuration that you want to update will override any existing configurations on the cluster.

```sql
UPDATE aws.finspace.kx_clusters
SET 
clientToken = '{{ clientToken }}',
code = '{{ code }}',
initializationScript = '{{ initializationScript }}',
commandLineArguments = '{{ commandLineArguments }}',
deploymentConfiguration = '{{ deploymentConfiguration }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND cluster_name = '{{ cluster_name }}' --required
AND region = '{{ region }}' --required
AND code = '{{ code }}' --required;
```
</TabItem>
<TabItem value="update_kx_cluster_databases">

Updates the databases mounted on a kdb cluster, which includes the changesetId and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one. Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.

```sql
UPDATE aws.finspace.kx_clusters
SET 
clientToken = '{{ clientToken }}',
databases = '{{ databases }}',
deploymentConfiguration = '{{ deploymentConfiguration }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND cluster_name = '{{ cluster_name }}' --required
AND region = '{{ region }}' --required
AND databases = '{{ databases }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_cluster"
    values={[
        { label: 'delete_kx_cluster', value: 'delete_kx_cluster' }
    ]}
>
<TabItem value="delete_kx_cluster">

Deletes a kdb cluster.

```sql
DELETE FROM aws.finspace.kx_clusters
WHERE environment_id = '{{ environment_id }}' --required
AND cluster_name = '{{ cluster_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
