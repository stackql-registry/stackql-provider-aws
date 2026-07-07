--- 
title: async_invokes
hide_title: false
hide_table_of_contents: false
keywords:
  - async_invokes
  - bedrock_runtime
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

Creates, updates, deletes, gets or lists an <code>async_invokes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="async_invokes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_runtime.async_invokes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_async_invoke"
    values={[
        { label: 'get_async_invoke', value: 'get_async_invoke' },
        { label: 'list_async_invokes', value: 'list_async_invokes' }
    ]}
>
<TabItem value="get_async_invoke">

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
    <td><CopyableCode code="clientRequestToken" /></td>
    <td><code>string</code></td>
    <td>The invocation's idempotency token. (pattern: &lt;code&gt;&#91;!-~&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the invocation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>An error message.</td>
</tr>
<tr>
    <td><CopyableCode code="invocationArn" /></td>
    <td><code>string</code></td>
    <td>The invocation's ARN. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:async-invoke/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The invocation's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The invocation's model ARN. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:bedrock:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;*:(provisioned-model|foundation-model)/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Output data settings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The invocation's status. (InProgress, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="submitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the invocation request was submitted.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_async_invokes">

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
    <td><CopyableCode code="clientRequestToken" /></td>
    <td><code>string</code></td>
    <td>The invocation's idempotency token. (pattern: &lt;code&gt;&#91;!-~&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the invocation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>An error message.</td>
</tr>
<tr>
    <td><CopyableCode code="invocationArn" /></td>
    <td><code>string</code></td>
    <td>The invocation's ARN. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:async-invoke/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the invocation was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The invoked model's ARN. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:bedrock:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;*:(provisioned-model|foundation-model)/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The invocation's output data settings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The invocation's status. (InProgress, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="submitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the invocation was submitted.</td>
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
    <td><a href="#get_async_invoke"><CopyableCode code="get_async_invoke" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-invocation_arn"><code>invocation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve information about an asynchronous invocation.</td>
</tr>
<tr>
    <td><a href="#list_async_invokes"><CopyableCode code="list_async_invokes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-submitTimeAfter"><code>submitTimeAfter</code></a>, <a href="#parameter-submitTimeBefore"><code>submitTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists asynchronous invocations.</td>
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
<tr id="parameter-invocation_arn">
    <td><CopyableCode code="invocation_arn" /></td>
    <td><code>string</code></td>
    <td>The invocation's ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of invocations to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>How to sort the response.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sorting order for the response.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>Filter invocations by status.</td>
</tr>
<tr id="parameter-submitTimeAfter">
    <td><CopyableCode code="submitTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Include invocations submitted after this time.</td>
</tr>
<tr id="parameter-submitTimeBefore">
    <td><CopyableCode code="submitTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Include invocations submitted before this time.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_async_invoke"
    values={[
        { label: 'get_async_invoke', value: 'get_async_invoke' },
        { label: 'list_async_invokes', value: 'list_async_invokes' }
    ]}
>
<TabItem value="get_async_invoke">

Retrieve information about an asynchronous invocation.

```sql
SELECT
clientRequestToken,
endTime,
failureMessage,
invocationArn,
lastModifiedTime,
modelArn,
outputDataConfig,
status,
submitTime
FROM aws.bedrock_runtime.async_invokes
WHERE invocation_arn = '{{ invocation_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_async_invokes">

Lists asynchronous invocations.

```sql
SELECT
clientRequestToken,
endTime,
failureMessage,
invocationArn,
lastModifiedTime,
modelArn,
outputDataConfig,
status,
submitTime
FROM aws.bedrock_runtime.async_invokes
WHERE region = '{{ region }}' -- required
AND submitTimeAfter = '{{ submitTimeAfter }}'
AND submitTimeBefore = '{{ submitTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>
