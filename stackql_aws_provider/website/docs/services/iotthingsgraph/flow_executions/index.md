--- 
title: flow_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_executions
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>flow_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.flow_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_flow_executions"
    values={[
        { label: 'search_flow_executions', value: 'search_flow_executions' }
    ]}
>
<TabItem value="search_flow_executions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the flow execution summary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the flow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the flow. (pattern: &lt;code&gt;^urn:tdm:((&#91;a-z&#93;&#123;2&#125;-(gov-)?&#91;a-z&#93;&#123;4,9&#125;-&#91;0-9&#93;&#123;1,3&#125;/&#91;0-9&#93;+/)*&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*):(&#91;\p&#123;Alpha&#125;&#93;*):(&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the flow execution. (RUNNING, ABORTED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="system_instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the system instance that contains the flow. (pattern: &lt;code&gt;^urn:tdm:((&#91;a-z&#93;&#123;2&#125;-(gov-)?&#91;a-z&#93;&#123;4,9&#125;-&#91;0-9&#93;&#123;1,3&#125;/&#91;0-9&#93;+/)*&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*):(&#91;\p&#123;Alpha&#125;&#93;*):(&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the flow execution summary was last updated.</td>
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
    <td><a href="#search_flow_executions"><CopyableCode code="search_flow_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for AWS IoT Things Graph workflow execution instances.</td>
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
    defaultValue="search_flow_executions"
    values={[
        { label: 'search_flow_executions', value: 'search_flow_executions' }
    ]}
>
<TabItem value="search_flow_executions">

Searches for AWS IoT Things Graph workflow execution instances.

```sql
SELECT
created_at,
flow_execution_id,
flow_template_id,
status,
system_instance_id,
updated_at
FROM aws.iotthingsgraph.flow_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
