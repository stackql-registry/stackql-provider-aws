--- 
title: self_upgrades
hide_title: false
hide_table_of_contents: false
keywords:
  - self_upgrades
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

Creates, updates, deletes, gets or lists a <code>self_upgrades</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="self_upgrades" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.self_upgrades" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_self_upgrades"
    values={[
        { label: 'list_self_upgrades', value: 'list_self_upgrades' }
    ]}
>
<TabItem value="list_self_upgrades">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="SelfUpgradeRequestDetails" /></td>
    <td><code>array</code></td>
    <td>A list of self-upgrade request details.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#list_self_upgrades"><CopyableCode code="list_self_upgrades" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all self-upgrade requests for a Quick account.</td>
</tr>
<tr>
    <td><a href="#update_self_upgrade"><CopyableCode code="update_self_upgrade" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpgradeRequestId"><code>UpgradeRequestId</code></a>, <a href="#parameter-Action"><code>Action</code></a></td>
    <td></td>
    <td>Updates a self-upgrade request for a Quick user by approving, denying, or verifying the request.</td>
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
    <td>The ID of the Amazon Web Services account that contains the self-upgrade request.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Quick namespace for the self-upgrade request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_self_upgrades"
    values={[
        { label: 'list_self_upgrades', value: 'list_self_upgrades' }
    ]}
>
<TabItem value="list_self_upgrades">

Lists all self-upgrade requests for a Quick account.

```sql
SELECT
NextToken,
RequestId,
SelfUpgradeRequestDetails,
Status
FROM aws.quicksight.self_upgrades
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_self_upgrade"
    values={[
        { label: 'update_self_upgrade', value: 'update_self_upgrade' }
    ]}
>
<TabItem value="update_self_upgrade">

Updates a self-upgrade request for a Quick user by approving, denying, or verifying the request.

```sql
UPDATE aws.quicksight.self_upgrades
SET 
UpgradeRequestId = '{{ UpgradeRequestId }}',
Action = '{{ Action }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
AND UpgradeRequestId = '{{ UpgradeRequestId }}' --required
AND Action = '{{ Action }}' --required
RETURNING
RequestId,
SelfUpgradeRequestDetail,
Status;
```
</TabItem>
</Tabs>
