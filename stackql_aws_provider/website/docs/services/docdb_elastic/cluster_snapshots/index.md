--- 
title: cluster_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_snapshots
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

Creates, updates, deletes, gets or lists a <code>cluster_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb_elastic.cluster_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_snapshot"
    values={[
        { label: 'get_cluster_snapshot', value: 'get_cluster_snapshot' },
        { label: 'list_cluster_snapshots', value: 'list_cluster_snapshots' }
    ]}
>
<TabItem value="get_cluster_snapshot">

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
    <td><CopyableCode code="admin_user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the elastic cluster administrator.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_creation_time" /></td>
    <td><code>string</code></td>
    <td>The time when the elastic cluster was created in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_creation_time" /></td>
    <td><code>string</code></td>
    <td>The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the elastic cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_type" /></td>
    <td><code>string</code></td>
    <td>The type of cluster snapshots to be returned. You can specify one of the following values: automated - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account. manual - Return all cluster snapshots that you have manually created for your Amazon Web Services account. (MANUAL, AUTOMATED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the elastic cluster snapshot. (CREATING, ACTIVE, DELETING, UPDATING, VPC_ENDPOINT_LIMIT_EXCEEDED, IP_ADDRESS_LIMIT_EXCEEDED, INVALID_SECURITY_GROUP_ID, INVALID_SUBNET_ID, INACCESSIBLE_ENCRYPTION_CREDS, INACCESSIBLE_SECRET_ARN, INACCESSIBLE_VPC_ENDPOINT, INCOMPATIBLE_NETWORK, MERGING, MODIFYING, SPLITTING, COPYING, STARTING, STOPPING, STOPPED, MAINTENANCE, INACCESSIBLE_ENCRYPTION_CREDENTIALS_RECOVERABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The Amazon EC2 subnet IDs for the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_group_ids" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 VPC security groups to associate with the elastic cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cluster_snapshots">

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
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_creation_time" /></td>
    <td><code>string</code></td>
    <td>The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the elastic cluster snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the elastic cluster snapshot. (CREATING, ACTIVE, DELETING, UPDATING, VPC_ENDPOINT_LIMIT_EXCEEDED, IP_ADDRESS_LIMIT_EXCEEDED, INVALID_SECURITY_GROUP_ID, INVALID_SUBNET_ID, INACCESSIBLE_ENCRYPTION_CREDS, INACCESSIBLE_SECRET_ARN, INACCESSIBLE_VPC_ENDPOINT, INCOMPATIBLE_NETWORK, MERGING, MODIFYING, SPLITTING, COPYING, STARTING, STOPPING, STOPPED, MAINTENANCE, INACCESSIBLE_ENCRYPTION_CREDENTIALS_RECOVERABLE)</td>
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
    <td><a href="#get_cluster_snapshot"><CopyableCode code="get_cluster_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-snapshot_arn"><code>snapshot_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific elastic cluster snapshot</td>
</tr>
<tr>
    <td><a href="#list_cluster_snapshots"><CopyableCode code="list_cluster_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterArn"><code>clusterArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-snapshotType"><code>snapshotType</code></a></td>
    <td>Returns information about snapshots for a specified elastic cluster.</td>
</tr>
<tr>
    <td><a href="#create_cluster_snapshot"><CopyableCode code="create_cluster_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterArn"><code>clusterArn</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a></td>
    <td></td>
    <td>Creates a snapshot of an elastic cluster.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_snapshot"><CopyableCode code="delete_cluster_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-snapshot_arn"><code>snapshot_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an elastic cluster snapshot.</td>
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
<tr id="parameter-snapshot_arn">
    <td><CopyableCode code="snapshot_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster snapshot that is to be deleted.</td>
</tr>
<tr id="parameter-clusterArn">
    <td><CopyableCode code="clusterArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the elastic cluster.</td>
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
<tr id="parameter-snapshotType">
    <td><CopyableCode code="snapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of cluster snapshots to be returned. You can specify one of the following values: automated - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account. manual - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster_snapshot"
    values={[
        { label: 'get_cluster_snapshot', value: 'get_cluster_snapshot' },
        { label: 'list_cluster_snapshots', value: 'list_cluster_snapshots' }
    ]}
>
<TabItem value="get_cluster_snapshot">

Returns information about a specific elastic cluster snapshot

```sql
SELECT
admin_user_name,
cluster_arn,
cluster_creation_time,
kms_key_id,
snapshot_arn,
snapshot_creation_time,
snapshot_name,
snapshot_type,
status,
subnet_ids,
vpc_security_group_ids
FROM aws.docdb_elastic.cluster_snapshots
WHERE snapshot_arn = '{{ snapshot_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cluster_snapshots">

Returns information about snapshots for a specified elastic cluster.

```sql
SELECT
cluster_arn,
snapshot_arn,
snapshot_creation_time,
snapshot_name,
status
FROM aws.docdb_elastic.cluster_snapshots
WHERE region = '{{ region }}' -- required
AND clusterArn = '{{ clusterArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND snapshotType = '{{ snapshotType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster_snapshot"
    values={[
        { label: 'create_cluster_snapshot', value: 'create_cluster_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_snapshot">

Creates a snapshot of an elastic cluster.

```sql
INSERT INTO aws.docdb_elastic.cluster_snapshots (
clusterArn,
snapshotName,
tags,
region
)
SELECT 
'{{ clusterArn }}' /* required */,
'{{ snapshotName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
snapshot
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_snapshots resource.
    - name: clusterArn
      value: "{{ clusterArn }}"
    - name: snapshotName
      value: "{{ snapshotName }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_snapshot"
    values={[
        { label: 'delete_cluster_snapshot', value: 'delete_cluster_snapshot' }
    ]}
>
<TabItem value="delete_cluster_snapshot">

Delete an elastic cluster snapshot.

```sql
DELETE FROM aws.docdb_elastic.cluster_snapshots
WHERE snapshot_arn = '{{ snapshot_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
