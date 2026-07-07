--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
  - devops_agent
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

Creates, updates, deletes, gets or lists a <code>webhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.webhooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_webhooks"
    values={[
        { label: 'list_webhooks', value: 'list_webhooks' }
    ]}
>
<TabItem value="list_webhooks">

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
    <td><CopyableCode code="webhooks" /></td>
    <td><code>array</code></td>
    <td>The list of association webhooks.</td>
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
    <td><a href="#list_webhooks"><CopyableCode code="list_webhooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all webhooks for given Association</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentSpace</td>
</tr>
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the given association.</td>
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
    defaultValue="list_webhooks"
    values={[
        { label: 'list_webhooks', value: 'list_webhooks' }
    ]}
>
<TabItem value="list_webhooks">

List all webhooks for given Association

```sql
SELECT
webhooks
FROM aws.devops_agent.webhooks
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND association_id = '{{ association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
