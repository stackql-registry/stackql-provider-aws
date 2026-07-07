--- 
title: indicators
hide_title: false
hide_table_of_contents: false
keywords:
  - indicators
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

Creates, updates, deletes, gets or lists an <code>indicators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indicators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.indicators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_indicators"
    values={[
        { label: 'list_indicators', value: 'list_indicators' }
    ]}
>
<TabItem value="list_indicators">

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
    <td><CopyableCode code="GraphArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the behavior graph. (pattern: &lt;code&gt;^arn:aws&#91;-\w&#93;&#123;0,10&#125;?:detective:&#91;-\w&#93;&#123;2,20&#125;?:\d&#123;12&#125;?:graph:&#91;abcdef\d&#93;&#123;32&#125;?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Indicators" /></td>
    <td><code>array</code></td>
    <td>Lists the indicators of compromise.</td>
</tr>
<tr>
    <td><CopyableCode code="InvestigationId" /></td>
    <td><code>string</code></td>
    <td>The investigation ID of the investigation report. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.</td>
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
    <td><a href="#list_indicators"><CopyableCode code="list_indicators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the indicators from an investigation. You can use the information from the indicators to determine if an IAM user and/or IAM role is involved in an unusual activity that could indicate malicious behavior and its impact.</td>
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
    defaultValue="list_indicators"
    values={[
        { label: 'list_indicators', value: 'list_indicators' }
    ]}
>
<TabItem value="list_indicators">

Gets the indicators from an investigation. You can use the information from the indicators to determine if an IAM user and/or IAM role is involved in an unusual activity that could indicate malicious behavior and its impact.

```sql
SELECT
GraphArn,
Indicators,
InvestigationId,
NextToken
FROM aws.detective.indicators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
