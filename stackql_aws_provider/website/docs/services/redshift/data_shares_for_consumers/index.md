--- 
title: data_shares_for_consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - data_shares_for_consumers
  - redshift
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

Creates, updates, deletes, gets or lists a <code>data_shares_for_consumers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_shares_for_consumers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.data_shares_for_consumers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_shares_for_consumer"
    values={[
        { label: 'describe_data_shares_for_consumer', value: 'describe_data_shares_for_consumer' }
    ]}
>
<TabItem value="describe_data_shares_for_consumer">

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
    <td><CopyableCode code="AllowPubliclyAccessibleConsumers" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the datashare can be shared to a publicly accessible cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="DataShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the datashare that the consumer is to use.</td>
</tr>
<tr>
    <td><CopyableCode code="DataShareAssociations" /></td>
    <td><code>string</code></td>
    <td>A value that specifies when the datashare has an association between producer and data consumers.</td>
</tr>
<tr>
    <td><CopyableCode code="DataShareType" /></td>
    <td><code>string</code></td>
    <td>The type of the datashare created by RegisterNamespace.</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of a datashare to show its managing entity.</td>
</tr>
<tr>
    <td><CopyableCode code="ProducerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the producer namespace.</td>
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
    <td><a href="#describe_data_shares_for_consumer"><CopyableCode code="describe_data_shares_for_consumer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ConsumerArn"><code>ConsumerArn</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of datashares where the account identifier being called is a consumer account identifier.</td>
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
<tr id="parameter-ConsumerArn">
    <td><CopyableCode code="ConsumerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the consumer namespace that returns in the list of datashares.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataSharesForConsumer request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_shares_for_consumer"
    values={[
        { label: 'describe_data_shares_for_consumer', value: 'describe_data_shares_for_consumer' }
    ]}
>
<TabItem value="describe_data_shares_for_consumer">

Returns a list of datashares where the account identifier being called is a consumer account identifier.

```sql
SELECT
AllowPubliclyAccessibleConsumers,
DataShareArn,
DataShareAssociations,
DataShareType,
ManagedBy,
ProducerArn
FROM aws.redshift.data_shares_for_consumers
WHERE region = '{{ region }}' -- required
AND ConsumerArn = '{{ ConsumerArn }}'
AND Status = '{{ Status }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
