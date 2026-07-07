--- 
title: discovered_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_endpoints
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>discovered_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovered_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.discovered_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_discovered_endpoints"
    values={[
        { label: 'list_discovered_endpoints', value: 'list_discovered_endpoints' }
    ]}
>
<TabItem value="list_discovered_endpoints">

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
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent space associated with the discovered endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the discovered endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence" /></td>
    <td><code>string</code></td>
    <td>The evidence that led to the discovery of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The HTTP operation associated with the discovered endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="pentestJobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pentest job that discovered the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task that discovered the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the discovered endpoint.</td>
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
    <td><a href="#list_discovered_endpoints"><CopyableCode code="list_discovered_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of endpoints discovered during a pentest job execution.</td>
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
    defaultValue="list_discovered_endpoints"
    values={[
        { label: 'list_discovered_endpoints', value: 'list_discovered_endpoints' }
    ]}
>
<TabItem value="list_discovered_endpoints">

Returns a paginated list of endpoints discovered during a pentest job execution.

```sql
SELECT
agentSpaceId,
description,
evidence,
operation,
pentestJobId,
taskId,
uri
FROM aws.securityagent.discovered_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
