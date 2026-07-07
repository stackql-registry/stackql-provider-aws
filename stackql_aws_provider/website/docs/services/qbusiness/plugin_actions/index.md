--- 
title: plugin_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - plugin_actions
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>plugin_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plugin_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.plugin_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_plugin_actions"
    values={[
        { label: 'list_plugin_actions', value: 'list_plugin_actions' }
    ]}
>
<TabItem value="list_plugin_actions">

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
    <td><CopyableCode code="actionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of an Amazon Q Business plugin action.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of an Amazon Q Business plugin action.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name assigned by Amazon Q Business to a plugin action. You can't modify this value.</td>
</tr>
<tr>
    <td><CopyableCode code="instructionExample" /></td>
    <td><code>string</code></td>
    <td>An Amazon Q Business suggested prompt and end user can use to invoke a plugin action. This value can be modified and sent as input to initiate an action. For example: Create a Jira task Create a chat assistant task to find the root cause of a specific incident</td>
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
    <td><a href="#list_plugin_actions"><CopyableCode code="list_plugin_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application the plugin is attached to.</td>
</tr>
<tr id="parameter-plugin_id">
    <td><CopyableCode code="plugin_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business plugin.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of plugin actions to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the number of plugin actions returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugin actions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_plugin_actions"
    values={[
        { label: 'list_plugin_actions', value: 'list_plugin_actions' }
    ]}
>
<TabItem value="list_plugin_actions">

Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application.

```sql
SELECT
actionIdentifier,
description,
displayName,
instructionExample
FROM aws.qbusiness.plugin_actions
WHERE application_id = '{{ application_id }}' -- required
AND plugin_id = '{{ plugin_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
