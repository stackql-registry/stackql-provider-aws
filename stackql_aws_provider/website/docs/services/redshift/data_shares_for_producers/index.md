--- 
title: data_shares_for_producers
hide_title: false
hide_table_of_contents: false
keywords:
  - data_shares_for_producers
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

Creates, updates, deletes, gets or lists a <code>data_shares_for_producers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_shares_for_producers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.data_shares_for_producers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_shares_for_producer"
    values={[
        { label: 'describe_data_shares_for_producer', value: 'describe_data_shares_for_producer' }
    ]}
>
<TabItem value="describe_data_shares_for_producer">

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
    <td><CopyableCode code="allow_publicly_accessible_consumers" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the datashare can be shared to a publicly accessible cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="data_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the datashare that the consumer is to use.</td>
</tr>
<tr>
    <td><CopyableCode code="data_share_associations" /></td>
    <td><code>string</code></td>
    <td>A value that specifies when the datashare has an association between producer and data consumers.</td>
</tr>
<tr>
    <td><CopyableCode code="data_share_type" /></td>
    <td><code>string</code></td>
    <td>The type of the datashare created by RegisterNamespace.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of a datashare to show its managing entity.</td>
</tr>
<tr>
    <td><CopyableCode code="producer_arn" /></td>
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
    <td><a href="#describe_data_shares_for_producer"><CopyableCode code="describe_data_shares_for_producer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ProducerArn"><code>ProducerArn</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of datashares when the account identifier being called is a producer account identifier.</td>
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
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataSharesForProducer request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-ProducerArn">
    <td><CopyableCode code="ProducerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the producer namespace that returns in the list of datashares.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>An identifier giving the status of a datashare in the producer. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_shares_for_producer"
    values={[
        { label: 'describe_data_shares_for_producer', value: 'describe_data_shares_for_producer' }
    ]}
>
<TabItem value="describe_data_shares_for_producer">

Returns a list of datashares when the account identifier being called is a producer account identifier.

```sql
SELECT
allow_publicly_accessible_consumers,
data_share_arn,
data_share_associations,
data_share_type,
managed_by,
producer_arn
FROM aws.redshift.data_shares_for_producers
WHERE region = '{{ region }}' -- required
AND ProducerArn = '{{ ProducerArn }}'
AND Status = '{{ Status }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
