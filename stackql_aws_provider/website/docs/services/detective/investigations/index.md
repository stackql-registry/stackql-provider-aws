--- 
title: investigations
hide_title: false
hide_table_of_contents: false
keywords:
  - investigations
  - detective
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

Creates, updates, deletes, gets or lists an <code>investigations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="investigations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.investigations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_investigation"
    values={[
        { label: 'get_investigation', value: 'get_investigation' },
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="get_investigation">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the investigation report in UTC time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN). Detective supports IAM user ARNs and IAM role ARNs. (pattern: &lt;code&gt;^arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>Type of entity. For example, Amazon Web Services accounts, such as an IAM user and/or IAM role. (IAM_ROLE, IAM_USER)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the behavior graph. (pattern: &lt;code&gt;^arn:aws&#91;-\w&#93;&#123;0,10&#125;?:detective:&#91;-\w&#93;&#123;2,20&#125;?:\d&#123;12&#125;?:graph:&#91;abcdef\d&#93;&#123;32&#125;?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="investigation_id" /></td>
    <td><code>string</code></td>
    <td>The investigation ID of the investigation report. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scope_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The data and time when the investigation began. The value is an UTC ISO8601 formatted string. For example, 2021-08-18T16:35:56.284Z.</td>
</tr>
<tr>
    <td><CopyableCode code="scope_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date and time used to set the scope time within which you want to generate the investigation report. The value is an UTC ISO8601 formatted string. For example, 2021-08-18T16:35:56.284Z.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity assigned is based on the likelihood and impact of the indicators of compromise discovered in the investigation. (INFORMATIONAL, LOW, MEDIUM, HIGH, CRITICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the investigation. An archived investigation indicates that you have completed reviewing the investigation. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status based on the completion status of the investigation. (RUNNING, FAILED, SUCCESSFUL)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_investigations">

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
    <td><CopyableCode code="investigation_details" /></td>
    <td><code>array</code></td>
    <td>Lists the summary of uncommon behavior or malicious activity which indicates a compromise.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.</td>
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
    <td><a href="#get_investigation"><CopyableCode code="get_investigation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. GetInvestigation returns the investigation results of an investigation for a behavior graph.</td>
</tr>
<tr>
    <td><a href="#list_investigations"><CopyableCode code="list_investigations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. ListInvestigations lists all active Detective investigations.</td>
</tr>
<tr>
    <td><a href="#update_investigation_state"><CopyableCode code="update_investigation_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a>, <a href="#parameter-InvestigationId"><code>InvestigationId</code></a></td>
    <td></td>
    <td>Updates the state of an investigation.</td>
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
    defaultValue="get_investigation"
    values={[
        { label: 'get_investigation', value: 'get_investigation' },
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="get_investigation">

Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. GetInvestigation returns the investigation results of an investigation for a behavior graph.

```sql
SELECT
created_time,
entity_arn,
entity_type,
graph_arn,
investigation_id,
scope_end_time,
scope_start_time,
severity,
state,
status
FROM aws.detective.investigations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_investigations">

Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. ListInvestigations lists all active Detective investigations.

```sql
SELECT
investigation_details,
next_token
FROM aws.detective.investigations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_investigation_state"
    values={[
        { label: 'update_investigation_state', value: 'update_investigation_state' }
    ]}
>
<TabItem value="update_investigation_state">

Updates the state of an investigation.

```sql
UPDATE aws.detective.investigations
SET 
GraphArn = '{{ GraphArn }}',
InvestigationId = '{{ InvestigationId }}',
State = '{{ State }}'
WHERE 
region = '{{ region }}' --required
AND GraphArn = '{{ GraphArn }}' --required
AND InvestigationId = '{{ InvestigationId }}' --required;
```
</TabItem>
</Tabs>
