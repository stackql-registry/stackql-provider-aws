--- 
title: q_app_session_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - q_app_session_datas
  - qapps
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

Creates, updates, deletes, gets or lists a <code>q_app_session_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="q_app_session_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.q_app_session_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_q_app_session_data"
    values={[
        { label: 'list_q_app_session_data', value: 'list_q_app_session_data' }
    ]}
>
<TabItem value="list_q_app_session_data">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Q App data collection session.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionData" /></td>
    <td><code>array</code></td>
    <td>The collected responses of a Q App session.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App data collection session. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_q_app_session_data"><CopyableCode code="list_q_app_session_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the collected data of a Q App data collection session.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App data collection session.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_q_app_session_data"
    values={[
        { label: 'list_q_app_session_data', value: 'list_q_app_session_data' }
    ]}
>
<TabItem value="list_q_app_session_data">

Lists the collected data of a Q App data collection session.

```sql
SELECT
nextToken,
sessionArn,
sessionData,
sessionId
FROM aws.qapps.q_app_session_datas
WHERE `instance-id` = '{{ instance-id }}' -- required
AND sessionId = '{{ sessionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
