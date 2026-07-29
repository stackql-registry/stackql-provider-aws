--- 
title: statements
hide_title: false
hide_table_of_contents: false
keywords:
  - statements
  - glue
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

Creates, updates, deletes, gets or lists a <code>statements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.statements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_statement"
    values={[
        { label: 'get_statement', value: 'get_statement' },
        { label: 'list_statements', value: 'list_statements' }
    ]}
>
<TabItem value="get_statement">

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
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The execution code of the statement.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_on" /></td>
    <td><code>integer (int64)</code></td>
    <td>The unix time and date that the job definition was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the statement.</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td>The output in JSON.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>number (double)</code></td>
    <td>The code execution progress.</td>
</tr>
<tr>
    <td><CopyableCode code="started_on" /></td>
    <td><code>integer (int64)</code></td>
    <td>The unix time and date that the job definition was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state while request is actioned. (WAITING, RUNNING, AVAILABLE, CANCELLING, CANCELLED, ERROR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_statements">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if not all statements have yet been returned.</td>
</tr>
<tr>
    <td><CopyableCode code="statements" /></td>
    <td><code>array</code></td>
    <td>Returns the list of statements.</td>
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
    <td><a href="#get_statement"><CopyableCode code="get_statement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the statement.</td>
</tr>
<tr>
    <td><a href="#list_statements"><CopyableCode code="list_statements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists statements for the session.</td>
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
    defaultValue="get_statement"
    values={[
        { label: 'get_statement', value: 'get_statement' },
        { label: 'list_statements', value: 'list_statements' }
    ]}
>
<TabItem value="get_statement">

Retrieves the statement.

```sql
SELECT
code,
completed_on,
id,
output,
progress,
started_on,
state
FROM aws.glue.statements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_statements">

Lists statements for the session.

```sql
SELECT
next_token,
statements
FROM aws.glue.statements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
