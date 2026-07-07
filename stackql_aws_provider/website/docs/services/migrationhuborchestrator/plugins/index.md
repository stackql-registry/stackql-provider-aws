--- 
title: plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - plugins
  - migrationhuborchestrator
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

Creates, updates, deletes, gets or lists a <code>plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_plugins"
    values={[
        { label: 'list_plugins', value: 'list_plugins' }
    ]}
>
<TabItem value="list_plugins">

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
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The name of the host.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address at which the plugin is located. (pattern: &lt;code&gt;((&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#123;2&#125;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)\.)&#123;3&#125;(&#91;0-9&#93;|&#91;1-9&#93;&#91;0-9&#93;|1&#91;0-9&#93;&#123;2&#125;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pluginId" /></td>
    <td><code>string</code></td>
    <td>The ID of the plugin. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registeredTime" /></td>
    <td><code>string</code></td>
    <td>The time at which the plugin was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the plugin. (HEALTHY, UNHEALTHY)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the plugin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#list_plugins"><CopyableCode code="list_plugins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List AWS Migration Hub Orchestrator plugins.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of plugins that can be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_plugins"
    values={[
        { label: 'list_plugins', value: 'list_plugins' }
    ]}
>
<TabItem value="list_plugins">

List AWS Migration Hub Orchestrator plugins.

```sql
SELECT
hostname,
ipAddress,
pluginId,
registeredTime,
status,
version
FROM aws.migrationhuborchestrator.plugins
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
