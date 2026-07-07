--- 
title: progress_update_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - progress_update_streams
  - mgh
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

Creates, updates, deletes, gets or lists a <code>progress_update_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="progress_update_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.progress_update_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_progress_update_streams"
    values={[
        { label: 'list_progress_update_streams', value: 'list_progress_update_streams' }
    ]}
>
<TabItem value="list_progress_update_streams">

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
    <td><CopyableCode code="ProgressUpdateStreamName" /></td>
    <td><code>string</code></td>
    <td>The name of the ProgressUpdateStream. Do not store personal data in this field. (pattern: &lt;code&gt;&#91;^/:|\000-\037&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_progress_update_streams"><CopyableCode code="list_progress_update_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists progress update streams associated with the user account making this call.</td>
</tr>
<tr>
    <td><a href="#create_progress_update_stream"><CopyableCode code="create_progress_update_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStreamName"><code>ProgressUpdateStreamName</code></a></td>
    <td></td>
    <td>Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.</td>
</tr>
<tr>
    <td><a href="#delete_progress_update_stream"><CopyableCode code="delete_progress_update_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits: The only parameter needed for DeleteProgressUpdateStream is the stream name (same as a CreateProgressUpdateStream call). The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts). If the stream takes time to be deleted, it might still show up on a ListProgressUpdateStreams call. CreateProgressUpdateStream, ImportMigrationTask, NotifyMigrationTaskState, and all Associate&#91;*&#93; APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted. Once the stream and all of its resources are deleted, CreateProgressUpdateStream for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</td>
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
    defaultValue="list_progress_update_streams"
    values={[
        { label: 'list_progress_update_streams', value: 'list_progress_update_streams' }
    ]}
>
<TabItem value="list_progress_update_streams">

Lists progress update streams associated with the user account making this call.

```sql
SELECT
ProgressUpdateStreamName
FROM aws.mgh.progress_update_streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_progress_update_stream"
    values={[
        { label: 'create_progress_update_stream', value: 'create_progress_update_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_progress_update_stream">

Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.

```sql
INSERT INTO aws.mgh.progress_update_streams (
ProgressUpdateStreamName,
DryRun,
region
)
SELECT 
'{{ ProgressUpdateStreamName }}' /* required */,
{{ DryRun }},
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: progress_update_streams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the progress_update_streams resource.
    - name: ProgressUpdateStreamName
      value: "{{ ProgressUpdateStreamName }}"
      description: |
        The name of the ProgressUpdateStream. Do not store personal data in this field.
    - name: DryRun
      value: {{ DryRun }}
      description: |
        Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_progress_update_stream"
    values={[
        { label: 'delete_progress_update_stream', value: 'delete_progress_update_stream' }
    ]}
>
<TabItem value="delete_progress_update_stream">

Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits: The only parameter needed for DeleteProgressUpdateStream is the stream name (same as a CreateProgressUpdateStream call). The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts). If the stream takes time to be deleted, it might still show up on a ListProgressUpdateStreams call. CreateProgressUpdateStream, ImportMigrationTask, NotifyMigrationTaskState, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted. Once the stream and all of its resources are deleted, CreateProgressUpdateStream for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).

```sql
DELETE FROM aws.mgh.progress_update_streams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
