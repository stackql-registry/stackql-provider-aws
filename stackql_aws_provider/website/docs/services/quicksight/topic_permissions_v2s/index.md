--- 
title: topic_permissions_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_permissions_v2s
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>topic_permissions_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_permissions_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.topic_permissions_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_topic_permissions_v2"
    values={[
        { label: 'describe_topic_permissions_v2', value: 'describe_topic_permissions_v2' }
    ]}
>
<TabItem value="describe_topic_permissions_v2">

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
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>A list of resource permissions that are configured to the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_topic_permissions_v2"><CopyableCode code="describe_topic_permissions_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the permissions of a topic.</td>
</tr>
<tr>
    <td><a href="#update_topic_permissions_v2"><CopyableCode code="update_topic_permissions_v2" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the permissions of a topic.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the topic that you want to update the permissions for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_topic_permissions_v2"
    values={[
        { label: 'describe_topic_permissions_v2', value: 'describe_topic_permissions_v2' }
    ]}
>
<TabItem value="describe_topic_permissions_v2">

Describes the permissions of a topic.

```sql
SELECT
permissions,
request_id,
status,
topic_arn,
topic_id
FROM aws.quicksight.topic_permissions_v2s
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_topic_permissions_v2"
    values={[
        { label: 'update_topic_permissions_v2', value: 'update_topic_permissions_v2' }
    ]}
>
<TabItem value="update_topic_permissions_v2">

Updates the permissions of a topic.

```sql
UPDATE aws.quicksight.topic_permissions_v2s
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND region = '{{ region }}' --required
RETURNING
permissions,
request_id,
status,
topic_arn,
topic_id;
```
</TabItem>
</Tabs>
