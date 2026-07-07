--- 
title: targets
hide_title: false
hide_table_of_contents: false
keywords:
  - targets
  - codestar_notifications
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

Creates, updates, deletes, gets or lists a <code>targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codestar_notifications.targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_targets"
    values={[
        { label: 'list_targets', value: 'list_targets' }
    ]}
>
<TabItem value="list_targets">

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
    <td><CopyableCode code="TargetAddress" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the target. (PENDING, ACTIVE, UNREACHABLE, INACTIVE, DEACTIVATED)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetType" /></td>
    <td><code>string</code></td>
    <td>The type of the target (for example, SNS). Amazon Q Developer in chat applications topics are specified as SNS. Amazon Q Developer in chat applications clients are specified as AWSChatbotSlack. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_targets"><CopyableCode code="list_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the notification rule targets for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_target"><CopyableCode code="delete_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified target for notifications.</td>
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
    defaultValue="list_targets"
    values={[
        { label: 'list_targets', value: 'list_targets' }
    ]}
>
<TabItem value="list_targets">

Returns a list of the notification rule targets for an Amazon Web Services account.

```sql
SELECT
TargetAddress,
TargetStatus,
TargetType
FROM aws.codestar_notifications.targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_target"
    values={[
        { label: 'delete_target', value: 'delete_target' }
    ]}
>
<TabItem value="delete_target">

Deletes a specified target for notifications.

```sql
DELETE FROM aws.codestar_notifications.targets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
