--- 
title: dev_environment_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - dev_environment_sessions
  - codecatalyst
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

Creates, updates, deletes, gets or lists a <code>dev_environment_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dev_environment_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.dev_environment_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dev_environment_sessions"
    values={[
        { label: 'list_dev_environment_sessions', value: 'list_dev_environment_sessions' }
    ]}
>
<TabItem value="list_dev_environment_sessions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the Dev Environment session.</td>
</tr>
<tr>
    <td><CopyableCode code="devEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the Dev Environment. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="spaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the session started, in coordinated universal time (UTC) timestamp format as specified in RFC 3339</td>
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
    <td><a href="#list_dev_environment_sessions"><CopyableCode code="list_dev_environment_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-dev_environment_id"><code>dev_environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of active sessions for a Dev Environment in a project.</td>
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
<tr id="parameter-dev_environment_id">
    <td><CopyableCode code="dev_environment_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the Dev Environment.</td>
</tr>
<tr id="parameter-project_name">
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_dev_environment_sessions"
    values={[
        { label: 'list_dev_environment_sessions', value: 'list_dev_environment_sessions' }
    ]}
>
<TabItem value="list_dev_environment_sessions">

Retrieves a list of active sessions for a Dev Environment in a project.

```sql
SELECT
id,
devEnvironmentId,
projectName,
spaceName,
startedTime
FROM aws.codecatalyst.dev_environment_sessions
WHERE space_name = '{{ space_name }}' -- required
AND project_name = '{{ project_name }}' -- required
AND dev_environment_id = '{{ dev_environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
