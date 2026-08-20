--- 
title: attached_file_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_file_metadatas
  - connect
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

Creates, updates, deletes, gets or lists an <code>attached_file_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_file_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.attached_file_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_attached_file_metadata"
    values={[
        { label: 'batch_get_attached_file_metadata', value: 'batch_get_attached_file_metadata' }
    ]}
>
<TabItem value="batch_get_attached_file_metadata">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>List of errors of attached files that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td>List of attached files that were successfully retrieved.</td>
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
    <td><a href="#batch_get_attached_file_metadata"><CopyableCode code="batch_get_attached_file_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-associatedResourceArn"><code>associatedResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows you to retrieve metadata about multiple attached files on an associated resource. Each attached file provided in the input list must be associated with the input AssociatedResourceArn.</td>
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
<tr id="parameter-associatedResourceArn">
    <td><CopyableCode code="associatedResourceArn" /></td>
    <td><code>string</code></td>
    <td>The resource to which the attached file is (being) uploaded to. The supported resources are Cases, Email, and Task. This value must be a valid ARN.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_attached_file_metadata"
    values={[
        { label: 'batch_get_attached_file_metadata', value: 'batch_get_attached_file_metadata' }
    ]}
>
<TabItem value="batch_get_attached_file_metadata">

Allows you to retrieve metadata about multiple attached files on an associated resource. Each attached file provided in the input list must be associated with the input AssociatedResourceArn.

```sql
SELECT
errors,
files
FROM aws.connect.attached_file_metadatas
WHERE instance_id = '{{ instance_id }}' -- required
AND associatedResourceArn = '{{ associatedResourceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
