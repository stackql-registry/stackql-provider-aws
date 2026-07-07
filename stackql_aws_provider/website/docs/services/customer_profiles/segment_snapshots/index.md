--- 
title: segment_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_snapshots
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>segment_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.segment_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment_snapshot"
    values={[
        { label: 'get_segment_snapshot', value: 'get_segment_snapshot' }
    ]}
>
<TabItem value="get_segment_snapshot">

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
    <td><CopyableCode code="DataFormat" /></td>
    <td><code>string</code></td>
    <td>The format in which the segment will be exported. (CSV, JSONL, ORC)</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationUri" /></td>
    <td><code>string</code></td>
    <td>The destination to which the segment will be exported. This field must be provided if the request is not submitted from the Amazon Connect Admin Website.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKey" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the exported segment.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service principal to assume the role for conducting KMS and S3 operations. (pattern: &lt;code&gt;arn:aws:iam:.*:&#91;0-9&#93;+:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the segment snapshot. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the asynchronous job for exporting the segment snapshot. (COMPLETED, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message of the asynchronous job for exporting the segment snapshot.</td>
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
    <td><a href="#get_segment_snapshot"><CopyableCode code="get_segment_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-snapshot_id"><code>snapshot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the latest status of a segment snapshot.</td>
</tr>
<tr>
    <td><a href="#create_segment_snapshot"><CopyableCode code="create_segment_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataFormat"><code>DataFormat</code></a></td>
    <td></td>
    <td>Triggers a job to export a segment to a specified destination.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-segment_definition_name">
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the segment definition used in this snapshot request.</td>
</tr>
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the segment snapshot.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_segment_snapshot"
    values={[
        { label: 'get_segment_snapshot', value: 'get_segment_snapshot' }
    ]}
>
<TabItem value="get_segment_snapshot">

Retrieve the latest status of a segment snapshot.

```sql
SELECT
DataFormat,
DestinationUri,
EncryptionKey,
RoleArn,
SnapshotId,
Status,
StatusMessage
FROM aws.customer_profiles.segment_snapshots
WHERE domain_name = '{{ domain_name }}' -- required
AND segment_definition_name = '{{ segment_definition_name }}' -- required
AND snapshot_id = '{{ snapshot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_segment_snapshot"
    values={[
        { label: 'create_segment_snapshot', value: 'create_segment_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_segment_snapshot">

Triggers a job to export a segment to a specified destination.

```sql
INSERT INTO aws.customer_profiles.segment_snapshots (
DataFormat,
EncryptionKey,
RoleArn,
DestinationUri,
domain_name,
segment_definition_name,
region
)
SELECT 
'{{ DataFormat }}' /* required */,
'{{ EncryptionKey }}',
'{{ RoleArn }}',
'{{ DestinationUri }}',
'{{ domain_name }}',
'{{ segment_definition_name }}',
'{{ region }}'
RETURNING
SnapshotId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: segment_snapshots
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the segment_snapshots resource.
    - name: segment_definition_name
      value: "{{ segment_definition_name }}"
      description: Required parameter for the segment_snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the segment_snapshots resource.
    - name: DataFormat
      value: "{{ DataFormat }}"
      valid_values: ['CSV', 'JSONL', 'ORC']
    - name: EncryptionKey
      value: "{{ EncryptionKey }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: DestinationUri
      value: "{{ DestinationUri }}"
`}</CodeBlock>

</TabItem>
</Tabs>
