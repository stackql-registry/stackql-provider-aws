--- 
title: investigations
hide_title: false
hide_table_of_contents: false
keywords:
  - investigations
  - security_ir
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.security_ir.investigations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_investigations"
    values={[
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
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
    <td><CopyableCode code="actionType" /></td>
    <td><code>string</code></td>
    <td>The type of investigation action being performed. This categorizes the investigation method or approach used in the case. (Evidence, Investigation, Summarization)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Detailed investigation results in rich markdown format. This field contains the comprehensive findings, analysis, and conclusions from the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="feedback" /></td>
    <td><code>object</code></td>
    <td>User feedback for this investigation result. This contains the user's assessment and comments about the quality and usefulness of the investigation findings.</td>
</tr>
<tr>
    <td><CopyableCode code="investigationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this investigation action. This ID is used to track and reference the specific investigation throughout its lifecycle. (pattern: &lt;code&gt;inv-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>ISO 8601 timestamp of the most recent status update. This indicates when the investigation was last modified or when its status last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current execution status of the investigation. This indicates whether the investigation is pending, in progress, completed, or failed. (Pending, InProgress, Waiting, Completed, Failed, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>Human-readable summary of the investigation focus. This provides a brief description of what the investigation is examining or analyzing.</td>
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
    <td><a href="#list_investigations"><CopyableCode code="list_investigations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Investigation performed by an agent for a security incident...</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Investigation performed by an agent for a security incident per caseID</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Investigation performed by an agent for a security incident request, returning max results</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Investigation performed by an agent for a security incident request</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_investigations"
    values={[
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="list_investigations">

Investigation performed by an agent for a security incident...

```sql
SELECT
actionType,
content,
feedback,
investigationId,
lastUpdated,
status,
title_
FROM aws.security_ir.investigations
WHERE case_id = '{{ case_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
