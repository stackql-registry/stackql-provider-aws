--- 
title: discovery_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - discovery_summaries
  - discovery
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

Creates, updates, deletes, gets or lists a <code>discovery_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovery_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.discovery_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_discovery_summary"
    values={[
        { label: 'get_discovery_summary', value: 'get_discovery_summary' }
    ]}
>
<TabItem value="get_discovery_summary">

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
    <td><CopyableCode code="agentSummary" /></td>
    <td><code>object</code></td>
    <td>Details about discovered agents, including agent status and health.</td>
</tr>
<tr>
    <td><CopyableCode code="agentlessCollectorSummary" /></td>
    <td><code>object</code></td>
    <td>Details about Agentless Collector collectors, including status.</td>
</tr>
<tr>
    <td><CopyableCode code="applications" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of applications discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorSummary" /></td>
    <td><code>object</code></td>
    <td>Details about discovered connectors, including connector status and health.</td>
</tr>
<tr>
    <td><CopyableCode code="meCollectorSummary" /></td>
    <td><code>object</code></td>
    <td>Details about Migration Evaluator collectors, including collector status and health.</td>
</tr>
<tr>
    <td><CopyableCode code="servers" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of servers discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="serversMappedToApplications" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of servers mapped to applications.</td>
</tr>
<tr>
    <td><CopyableCode code="serversMappedtoTags" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of servers mapped to tags.</td>
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
    <td><a href="#get_discovery_summary"><CopyableCode code="get_discovery_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a short summary of discovered assets. This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</td>
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
    defaultValue="get_discovery_summary"
    values={[
        { label: 'get_discovery_summary', value: 'get_discovery_summary' }
    ]}
>
<TabItem value="get_discovery_summary">

Retrieves a short summary of discovered assets. This API operation takes no request parameters and is called as is at the command prompt as shown in the example.

```sql
SELECT
agentSummary,
agentlessCollectorSummary,
applications,
connectorSummary,
meCollectorSummary,
servers,
serversMappedToApplications,
serversMappedtoTags
FROM aws.discovery.discovery_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
