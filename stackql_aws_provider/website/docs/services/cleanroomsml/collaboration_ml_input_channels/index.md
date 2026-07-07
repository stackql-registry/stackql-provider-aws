--- 
title: collaboration_ml_input_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_ml_input_channels
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>collaboration_ml_input_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_ml_input_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.collaboration_ml_input_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration_ml_input_channel"
    values={[
        { label: 'get_collaboration_ml_input_channel', value: 'get_collaboration_ml_input_channel' },
        { label: 'list_collaboration_ml_input_channels', value: 'list_collaboration_ml_input_channels' }
    ]}
>
<TabItem value="get_collaboration_ml_input_channel">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ML input channel. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociations" /></td>
    <td><code>array</code></td>
    <td>The configured model algorithm associations that were used to create the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ML input channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member who created the ML input channel. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ML input channel. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mlInputChannelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ML input channel. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/ml-input-channel/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="numberOfRecords" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records in the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="privacyBudgets" /></td>
    <td><code>object</code></td>
    <td>Returns the privacy budgets that control access to this Clean Rooms ML input channel. Use these budgets to monitor and limit resource consumption over specified time periods.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionInDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain the data for the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ML input channel. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="syntheticDataConfiguration" /></td>
    <td><code>object</code></td>
    <td>The synthetic data configuration for this ML input channel, including parameters for generating privacy-preserving synthetic data and evaluation scores for measuring the privacy of the generated data.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ML input channel was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_ml_input_channels">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ML input channel. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociations" /></td>
    <td><code>array</code></td>
    <td>The associated configured model algorithms used to create the ML input channel.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ML input channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member who created the ML input channel. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ML input channel. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the membership that contains the ML input channel. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mlInputChannelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ML input channel. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/ml-input-channel/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ML input channel. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the ML input channel was updated.</td>
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
    <td><a href="#get_collaboration_ml_input_channel"><CopyableCode code="get_collaboration_ml_input_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ml_input_channel_arn"><code>ml_input_channel_arn</code></a>, <a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific ML input channel in a collaboration.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_ml_input_channels"><CopyableCode code="list_collaboration_ml_input_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the ML input channels in a collaboration.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the ML input channels that you want to list.</td>
</tr>
<tr id="parameter-ml_input_channel_arn">
    <td><CopyableCode code="ml_input_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ML input channel that you want to get.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaboration_ml_input_channel"
    values={[
        { label: 'get_collaboration_ml_input_channel', value: 'get_collaboration_ml_input_channel' },
        { label: 'list_collaboration_ml_input_channels', value: 'list_collaboration_ml_input_channels' }
    ]}
>
<TabItem value="get_collaboration_ml_input_channel">

Returns information about a specific ML input channel in a collaboration.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmAssociations,
createTime,
creatorAccountId,
description,
membershipIdentifier,
mlInputChannelArn,
numberOfRecords,
privacyBudgets,
retentionInDays,
status,
statusDetails,
syntheticDataConfiguration,
updateTime
FROM aws.cleanroomsml.collaboration_ml_input_channels
WHERE ml_input_channel_arn = '{{ ml_input_channel_arn }}' -- required
AND collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaboration_ml_input_channels">

Returns a list of the ML input channels in a collaboration.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmAssociations,
createTime,
creatorAccountId,
description,
membershipIdentifier,
mlInputChannelArn,
status,
updateTime
FROM aws.cleanroomsml.collaboration_ml_input_channels
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
