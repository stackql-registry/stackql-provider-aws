--- 
title: subscription_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_filters
  - logs
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

Creates, updates, deletes, gets or lists a <code>subscription_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.subscription_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_subscription_filters"
    values={[
        { label: 'describe_subscription_filters', value: 'describe_subscription_filters' }
    ]}
>
<TabItem value="describe_subscription_filters">

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
    <td><CopyableCode code="applyOnTransformedLogs" /></td>
    <td><code>boolean</code></td>
    <td>This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see PutTransformer. If this value is true, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The creation time of the subscription filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="distribution" /></td>
    <td><code>string</code></td>
    <td>The method used to distribute log data to the destination, which can be either random or grouped by log stream. (Random, ByLogStream)</td>
</tr>
<tr>
    <td><CopyableCode code="emitSystemFields" /></td>
    <td><code>array</code></td>
    <td>The list of system fields that are included in the log events sent to the subscription destination. Returns the emitSystemFields value if it was specified when the subscription filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldSelectionCriteria" /></td>
    <td><code>string</code></td>
    <td>The filter expression that specifies which log events are processed by this subscription filter based on system fields. Returns the fieldSelectionCriteria value if it was specified when the subscription filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="filterName" /></td>
    <td><code>string</code></td>
    <td>The name of the subscription filter. (pattern: &lt;code&gt;&#91;^:*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="filterPattern" /></td>
    <td><code>string</code></td>
    <td>A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the log group. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#describe_subscription_filters"><CopyableCode code="describe_subscription_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.</td>
</tr>
<tr>
    <td><a href="#put_subscription_filter"><CopyableCode code="put_subscription_filter" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-filterName"><code>filterName</code></a>, <a href="#parameter-filterPattern"><code>filterPattern</code></a>, <a href="#parameter-destinationArn"><code>destinationArn</code></a></td>
    <td></td>
    <td>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format. The following destinations are supported for subscription filters: An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery. A logical destination created with PutDestination that belongs to a different account, for cross-account delivery. We currently support Kinesis Data Streams and Firehose as logical destinations. An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery. An Lambda function that belongs to the same account as the subscription filter, for same-account delivery. Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in filterName. Using regular expressions in filter patterns is supported. For these filters, there is a quotas of quota of two regular expression patterns within a single filter pattern. There is also a quota of five regular expression patterns per log group. For more information about using regular expressions in filter patterns, see Filter pattern syntax for metric filters, subscription filters, filter log events, and Live Tail. To perform a PutSubscriptionFilter operation for any destination except a Lambda function, you must also have the iam:PassRole permission.</td>
</tr>
<tr>
    <td><a href="#delete_subscription_filter"><CopyableCode code="delete_subscription_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified subscription filter.</td>
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
    defaultValue="describe_subscription_filters"
    values={[
        { label: 'describe_subscription_filters', value: 'describe_subscription_filters' }
    ]}
>
<TabItem value="describe_subscription_filters">

Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.

```sql
SELECT
applyOnTransformedLogs,
creationTime,
destinationArn,
distribution,
emitSystemFields,
fieldSelectionCriteria,
filterName,
filterPattern,
logGroupName,
roleArn
FROM aws.logs.subscription_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_subscription_filter"
    values={[
        { label: 'put_subscription_filter', value: 'put_subscription_filter' }
    ]}
>
<TabItem value="put_subscription_filter">

Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format. The following destinations are supported for subscription filters: An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery. A logical destination created with PutDestination that belongs to a different account, for cross-account delivery. We currently support Kinesis Data Streams and Firehose as logical destinations. An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery. An Lambda function that belongs to the same account as the subscription filter, for same-account delivery. Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in filterName. Using regular expressions in filter patterns is supported. For these filters, there is a quotas of quota of two regular expression patterns within a single filter pattern. There is also a quota of five regular expression patterns per log group. For more information about using regular expressions in filter patterns, see Filter pattern syntax for metric filters, subscription filters, filter log events, and Live Tail. To perform a PutSubscriptionFilter operation for any destination except a Lambda function, you must also have the iam:PassRole permission.

```sql
REPLACE aws.logs.subscription_filters
SET 
logGroupName = '{{ logGroupName }}',
filterName = '{{ filterName }}',
filterPattern = '{{ filterPattern }}',
destinationArn = '{{ destinationArn }}',
roleArn = '{{ roleArn }}',
distribution = '{{ distribution }}',
applyOnTransformedLogs = {{ applyOnTransformedLogs }},
fieldSelectionCriteria = '{{ fieldSelectionCriteria }}',
emitSystemFields = '{{ emitSystemFields }}'
WHERE 
region = '{{ region }}' --required
AND logGroupName = '{{ logGroupName }}' --required
AND filterName = '{{ filterName }}' --required
AND filterPattern = '{{ filterPattern }}' --required
AND destinationArn = '{{ destinationArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscription_filter"
    values={[
        { label: 'delete_subscription_filter', value: 'delete_subscription_filter' }
    ]}
>
<TabItem value="delete_subscription_filter">

Deletes the specified subscription filter.

```sql
DELETE FROM aws.logs.subscription_filters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
