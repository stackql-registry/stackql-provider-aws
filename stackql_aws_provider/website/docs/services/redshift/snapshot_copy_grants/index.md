--- 
title: snapshot_copy_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_copy_grants
  - redshift
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

Creates, updates, deletes, gets or lists a <code>snapshot_copy_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_copy_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.snapshot_copy_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshot_copy_grants"
    values={[
        { label: 'describe_snapshot_copy_grants', value: 'describe_snapshot_copy_grants' }
    ]}
>
<TabItem value="describe_snapshot_copy_grants">

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
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the encrypted symmetric key in Amazon Web Services KMS to which Amazon Redshift is granted permission.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_copy_grant_name" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot copy grant.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tag instances.</td>
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
    <td><a href="#describe_snapshot_copy_grants"><CopyableCode code="describe_snapshot_copy_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnapshotCopyGrantName"><code>SnapshotCopyGrantName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region. For more information about managing snapshot copy grants, go to Amazon Redshift Database Encryption in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#create_snapshot_copy_grant"><CopyableCode code="create_snapshot_copy_grant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SnapshotCopyGrantName"><code>SnapshotCopyGrantName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region. For more information about managing snapshot copy grants, go to Amazon Redshift Database Encryption in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot_copy_grant"><CopyableCode code="delete_snapshot_copy_grant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SnapshotCopyGrantName"><code>SnapshotCopyGrantName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified snapshot copy grant.</td>
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
<tr id="parameter-SnapshotCopyGrantName">
    <td><CopyableCode code="SnapshotCopyGrantName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot copy grant to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. If no key is specified, the default key is used.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeSnapshotCopyGrant request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request. Constraints: You can specify either the SnapshotCopyGrantName parameter or the Marker parameter, but not both.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-SnapshotCopyGrantName">
    <td><CopyableCode code="SnapshotCopyGrantName" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot copy grant.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_snapshot_copy_grants"
    values={[
        { label: 'describe_snapshot_copy_grants', value: 'describe_snapshot_copy_grants' }
    ]}
>
<TabItem value="describe_snapshot_copy_grants">

Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region. For more information about managing snapshot copy grants, go to Amazon Redshift Database Encryption in the Amazon Redshift Cluster Management Guide.

```sql
SELECT
kms_key_id,
snapshot_copy_grant_name,
tags
FROM aws.redshift.snapshot_copy_grants
WHERE region = '{{ region }}' -- required
AND SnapshotCopyGrantName = '{{ SnapshotCopyGrantName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot_copy_grant"
    values={[
        { label: 'create_snapshot_copy_grant', value: 'create_snapshot_copy_grant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot_copy_grant">

Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region. For more information about managing snapshot copy grants, go to Amazon Redshift Database Encryption in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.snapshot_copy_grants (
SnapshotCopyGrantName,
region,
KmsKeyId,
Tags
)
SELECT 
'{{ SnapshotCopyGrantName }}',
'{{ region }}',
'{{ KmsKeyId }}',
'{{ Tags }}'
RETURNING
kms_key_id,
snapshot_copy_grant_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshot_copy_grants
  props:
    - name: SnapshotCopyGrantName
      value: "{{ SnapshotCopyGrantName }}"
      description: Required parameter for the snapshot_copy_grants resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshot_copy_grants resource.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. If no key is specified, the default key is used.
      description: The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. If no key is specified, the default key is used.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot_copy_grant"
    values={[
        { label: 'delete_snapshot_copy_grant', value: 'delete_snapshot_copy_grant' }
    ]}
>
<TabItem value="delete_snapshot_copy_grant">

Deletes the specified snapshot copy grant.

```sql
DELETE FROM aws.redshift.snapshot_copy_grants
WHERE SnapshotCopyGrantName = '{{ SnapshotCopyGrantName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
