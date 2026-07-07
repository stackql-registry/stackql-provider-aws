--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - docdb_elastic
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb_elastic.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster"
    values={[
        { label: 'get_cluster', value: 'get_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="get_cluster">

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
    <td><CopyableCode code="adminUserName" /></td>
    <td><code>string</code></td>
    <td>The name of the elastic cluster administrator.</td>
</tr>
<tr>
    <td><CopyableCode code="authType" /></td>
    <td><code>string</code></td>
    <td>The authentication type for the elastic cluster. (PLAIN_TEXT, SECRET_ARN)</td>
</tr>
<tr>
    <td><CopyableCode code="backupRetentionPeriod" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which automatic snapshots are retained.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterEndpoint" /></td>
    <td><code>string</code></td>
    <td>The URL used to connect to the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>The time when the elastic cluster was created in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier to use to encrypt the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredBackupWindow" /></td>
    <td><code>string</code></td>
    <td>The daily time range during which automated backups are created if automated backups are enabled, as determined by backupRetentionPeriod.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi</td>
</tr>
<tr>
    <td><CopyableCode code="shardCapacity" /></td>
    <td><code>integer</code></td>
    <td>The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer</code></td>
    <td>The number of shards assigned to the elastic cluster. Maximum is 32.</td>
</tr>
<tr>
    <td><CopyableCode code="shardInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of replica instances applying to all shards in the cluster. A shardInstanceCount value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.</td>
</tr>
<tr>
    <td><CopyableCode code="shards" /></td>
    <td><code>array</code></td>
    <td>The total number of shards in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the elastic cluster. (CREATING, ACTIVE, DELETING, UPDATING, VPC_ENDPOINT_LIMIT_EXCEEDED, IP_ADDRESS_LIMIT_EXCEEDED, INVALID_SECURITY_GROUP_ID, INVALID_SUBNET_ID, INACCESSIBLE_ENCRYPTION_CREDS, INACCESSIBLE_SECRET_ARN, INACCESSIBLE_VPC_ENDPOINT, INCOMPATIBLE_NETWORK, MERGING, MODIFYING, SPLITTING, COPYING, STARTING, STOPPING, STOPPED, MAINTENANCE, INACCESSIBLE_ENCRYPTION_CREDENTIALS_RECOVERABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon EC2 subnet IDs for the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 VPC security groups associated with thie elastic cluster.</td>
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
    <td><CopyableCode code="clusterArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the elastic cluster. (CREATING, ACTIVE, DELETING, UPDATING, VPC_ENDPOINT_LIMIT_EXCEEDED, IP_ADDRESS_LIMIT_EXCEEDED, INVALID_SECURITY_GROUP_ID, INVALID_SUBNET_ID, INACCESSIBLE_ENCRYPTION_CREDS, INACCESSIBLE_SECRET_ARN, INACCESSIBLE_VPC_ENDPOINT, INCOMPATIBLE_NETWORK, MERGING, MODIFYING, SPLITTING, COPYING, STARTING, STOPPING, STOPPED, MAINTENANCE, INACCESSIBLE_ENCRYPTION_CREDENTIALS_RECOVERABLE)</td>
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
    <td><a href="#get_cluster"><CopyableCode code="get_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific elastic cluster.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns information about provisioned Amazon DocumentDB elastic clusters.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-adminUserName"><code>adminUserName</code></a>, <a href="#parameter-adminUserPassword"><code>adminUserPassword</code></a>, <a href="#parameter-authType"><code>authType</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a>, <a href="#parameter-shardCapacity"><code>shardCapacity</code></a>, <a href="#parameter-shardCount"><code>shardCount</code></a></td>
    <td></td>
    <td>Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies an elastic cluster. This includes updating admin-username/password, upgrading the API version, and setting up a backup window and maintenance window</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an elastic cluster.</td>
</tr>
<tr>
    <td><a href="#copy_cluster_snapshot"><CopyableCode code="copy_cluster_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-snapshot_arn"><code>snapshot_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetSnapshotName"><code>targetSnapshotName</code></a></td>
    <td></td>
    <td>Copies a snapshot of an elastic cluster.</td>
</tr>
<tr>
    <td><a href="#restore_cluster_from_snapshot"><CopyableCode code="restore_cluster_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-snapshot_arn"><code>snapshot_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Restores an elastic cluster from a snapshot.</td>
</tr>
<tr>
    <td><a href="#start_cluster"><CopyableCode code="start_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Restarts the stopped elastic cluster that is specified by clusterARN.</td>
</tr>
<tr>
    <td><a href="#stop_cluster"><CopyableCode code="stop_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops the running elastic cluster that is specified by clusterArn. The elastic cluster must be in the available state.</td>
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
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-snapshot_arn">
    <td><CopyableCode code="snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster snapshot.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of elastic cluster snapshot results to receive in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by max-results. If there is no more data in the responce, the nextToken will not be returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster"
    values={[
        { label: 'get_cluster', value: 'get_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="get_cluster">

Returns information about a specific elastic cluster.

```sql
SELECT
adminUserName,
authType,
backupRetentionPeriod,
clusterArn,
clusterEndpoint,
clusterName,
createTime,
kmsKeyId,
preferredBackupWindow,
preferredMaintenanceWindow,
shardCapacity,
shardCount,
shardInstanceCount,
shards,
status,
subnetIds,
vpcSecurityGroupIds
FROM aws.docdb_elastic.clusters
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Returns information about provisioned Amazon DocumentDB elastic clusters.

```sql
SELECT
clusterArn,
clusterName,
status
FROM aws.docdb_elastic.clusters
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.

```sql
INSERT INTO aws.docdb_elastic.clusters (
adminUserName,
adminUserPassword,
authType,
backupRetentionPeriod,
clientToken,
clusterName,
kmsKeyId,
preferredBackupWindow,
preferredMaintenanceWindow,
shardCapacity,
shardCount,
shardInstanceCount,
subnetIds,
tags,
vpcSecurityGroupIds,
region
)
SELECT 
'{{ adminUserName }}' /* required */,
'{{ adminUserPassword }}' /* required */,
'{{ authType }}' /* required */,
{{ backupRetentionPeriod }},
'{{ clientToken }}',
'{{ clusterName }}' /* required */,
'{{ kmsKeyId }}',
'{{ preferredBackupWindow }}',
'{{ preferredMaintenanceWindow }}',
{{ shardCapacity }} /* required */,
{{ shardCount }} /* required */,
{{ shardInstanceCount }},
'{{ subnetIds }}',
'{{ tags }}',
'{{ vpcSecurityGroupIds }}',
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
    - name: adminUserName
      value: "{{ adminUserName }}"
    - name: adminUserPassword
      value: "{{ adminUserPassword }}"
    - name: authType
      value: "{{ authType }}"
      valid_values: ['PLAIN_TEXT', 'SECRET_ARN']
    - name: backupRetentionPeriod
      value: {{ backupRetentionPeriod }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: clusterName
      value: "{{ clusterName }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: preferredBackupWindow
      value: "{{ preferredBackupWindow }}"
    - name: preferredMaintenanceWindow
      value: "{{ preferredMaintenanceWindow }}"
    - name: shardCapacity
      value: {{ shardCapacity }}
    - name: shardCount
      value: {{ shardCount }}
    - name: shardInstanceCount
      value: {{ shardInstanceCount }}
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: tags
      value: "{{ tags }}"
    - name: vpcSecurityGroupIds
      value:
        - "{{ vpcSecurityGroupIds }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster"
    values={[
        { label: 'update_cluster', value: 'update_cluster' }
    ]}
>
<TabItem value="update_cluster">

Modifies an elastic cluster. This includes updating admin-username/password, upgrading the API version, and setting up a backup window and maintenance window

```sql
UPDATE aws.docdb_elastic.clusters
SET 
adminUserPassword = '{{ adminUserPassword }}',
authType = '{{ authType }}',
backupRetentionPeriod = {{ backupRetentionPeriod }},
clientToken = '{{ clientToken }}',
preferredBackupWindow = '{{ preferredBackupWindow }}',
preferredMaintenanceWindow = '{{ preferredMaintenanceWindow }}',
shardCapacity = {{ shardCapacity }},
shardCount = {{ shardCount }},
shardInstanceCount = {{ shardInstanceCount }},
subnetIds = '{{ subnetIds }}',
vpcSecurityGroupIds = '{{ vpcSecurityGroupIds }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
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

Delete an elastic cluster.

```sql
DELETE FROM aws.docdb_elastic.clusters
WHERE cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_cluster_snapshot"
    values={[
        { label: 'copy_cluster_snapshot', value: 'copy_cluster_snapshot' },
        { label: 'restore_cluster_from_snapshot', value: 'restore_cluster_from_snapshot' },
        { label: 'start_cluster', value: 'start_cluster' },
        { label: 'stop_cluster', value: 'stop_cluster' }
    ]}
>
<TabItem value="copy_cluster_snapshot">

Copies a snapshot of an elastic cluster.

```sql
EXEC aws.docdb_elastic.clusters.copy_cluster_snapshot 
@snapshot_arn='{{ snapshot_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"copyTags": {{ copyTags }}, 
"kmsKeyId": "{{ kmsKeyId }}", 
"tags": "{{ tags }}", 
"targetSnapshotName": "{{ targetSnapshotName }}"
}'
;
```
</TabItem>
<TabItem value="restore_cluster_from_snapshot">

Restores an elastic cluster from a snapshot.

```sql
EXEC aws.docdb_elastic.clusters.restore_cluster_from_snapshot 
@snapshot_arn='{{ snapshot_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clusterName": "{{ clusterName }}", 
"kmsKeyId": "{{ kmsKeyId }}", 
"shardCapacity": {{ shardCapacity }}, 
"shardInstanceCount": {{ shardInstanceCount }}, 
"subnetIds": "{{ subnetIds }}", 
"tags": "{{ tags }}", 
"vpcSecurityGroupIds": "{{ vpcSecurityGroupIds }}"
}'
;
```
</TabItem>
<TabItem value="start_cluster">

Restarts the stopped elastic cluster that is specified by clusterARN.

```sql
EXEC aws.docdb_elastic.clusters.start_cluster 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_cluster">

Stops the running elastic cluster that is specified by clusterArn. The elastic cluster must be in the available state.

```sql
EXEC aws.docdb_elastic.clusters.stop_cluster 
@cluster_arn='{{ cluster_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
