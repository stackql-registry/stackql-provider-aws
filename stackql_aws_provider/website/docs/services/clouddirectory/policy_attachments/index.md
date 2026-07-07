--- 
title: policy_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_attachments
  - clouddirectory
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

Creates, updates, deletes, gets or lists a <code>policy_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.policy_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policy_attachments"
    values={[
        { label: 'list_policy_attachments', value: 'list_policy_attachments' }
    ]}
>
<TabItem value="list_policy_attachments">

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
    <td><CopyableCode code="object_identifier" /></td>
    <td><code>string</code></td>
    <td>A list of ObjectIdentifiers to which the policy is attached.</td>
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
    <td><a href="#list_policy_attachments"><CopyableCode code="list_policy_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Returns all of the ObjectIdentifiers to which a given policy is attached.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.</td>
</tr>
<tr id="parameter-x-amz-consistency-level">
    <td><CopyableCode code="x-amz-consistency-level" /></td>
    <td><code>string</code></td>
    <td>Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_policy_attachments"
    values={[
        { label: 'list_policy_attachments', value: 'list_policy_attachments' }
    ]}
>
<TabItem value="list_policy_attachments">

Returns all of the ObjectIdentifiers to which a given policy is attached.

```sql
SELECT
object_identifier
FROM aws.clouddirectory.policy_attachments
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-consistency-level` = '{{ x-amz-consistency-level }}'
;
```
</TabItem>
</Tabs>
