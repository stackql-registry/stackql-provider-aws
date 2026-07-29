--- 
title: network_migration_deployed_stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_deployed_stacks
  - mgn
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

Creates, updates, deletes, gets or lists a <code>network_migration_deployed_stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_deployed_stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_deployed_stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_migration_deployed_stacks"
    values={[
        { label: 'list_network_migration_deployed_stacks', value: 'list_network_migration_deployed_stacks' }
    ]}
>
<TabItem value="list_network_migration_deployed_stacks">

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
    <td><CopyableCode code="failed_resources" /></td>
    <td><code>array</code></td>
    <td>A list of resources that failed to deploy.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the segment that this stack was deployed for. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stack_logical_id" /></td>
    <td><code>string</code></td>
    <td>The logical ID of the stack. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stack_physical_id" /></td>
    <td><code>string</code></td>
    <td>The physical ID of the CloudFormation stack. (pattern: &lt;code&gt;arn:aws:cloudformation:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:stack/&#91;a-zA-Z0-9-&#93;+/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the deployed stack. (CREATE_COMPLETE, CREATE_FAILED, CREATE_STARTED, DELETE_COMPLETE, DELETE_FAILED, DELETE_STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="target_account" /></td>
    <td><code>string</code></td>
    <td>The target AWS account where the stack was deployed. (pattern: &lt;code&gt;.*&#91;0-9&#93;&#123;12,&#125;.*&lt;/code&gt;)</td>
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
    <td><a href="#list_network_migration_deployed_stacks"><CopyableCode code="list_network_migration_deployed_stacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists CloudFormation stacks that have been deployed as part of the network migration.</td>
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
    defaultValue="list_network_migration_deployed_stacks"
    values={[
        { label: 'list_network_migration_deployed_stacks', value: 'list_network_migration_deployed_stacks' }
    ]}
>
<TabItem value="list_network_migration_deployed_stacks">

Lists CloudFormation stacks that have been deployed as part of the network migration.

```sql
SELECT
failed_resources,
segment_id,
stack_logical_id,
stack_physical_id,
status,
target_account
FROM aws.mgn.network_migration_deployed_stacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
