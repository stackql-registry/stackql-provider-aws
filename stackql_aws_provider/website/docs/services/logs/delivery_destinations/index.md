--- 
title: delivery_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_destinations
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

Creates, updates, deletes, gets or lists a <code>delivery_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delivery_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.delivery_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delivery_destination"
    values={[
        { label: 'get_delivery_destination', value: 'get_delivery_destination' },
        { label: 'describe_delivery_destinations', value: 'describe_delivery_destinations' }
    ]}
>
<TabItem value="get_delivery_destination">

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
    <td>The name of this delivery destination. (pattern: &lt;code&gt;&#91;\w-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_destination_configuration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the ARN of the Amazon Web Services resource that will receive the logs.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_destination_type" /></td>
    <td><code>string</code></td>
    <td>Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Firehose, or X-Ray. (S3, CWL, FH, XRAY)</td>
</tr>
<tr>
    <td><CopyableCode code="output_format" /></td>
    <td><code>string</code></td>
    <td>The format of the logs that are sent to this delivery destination. (json, plain, w3c, raw, parquet)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been assigned to this delivery destination.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_delivery_destinations">

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
    <td>The name of this delivery destination. (pattern: &lt;code&gt;&#91;\w-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_destination_configuration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the ARN of the Amazon Web Services resource that will receive the logs.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_destination_type" /></td>
    <td><code>string</code></td>
    <td>Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Firehose, or X-Ray. (S3, CWL, FH, XRAY)</td>
</tr>
<tr>
    <td><CopyableCode code="output_format" /></td>
    <td><code>string</code></td>
    <td>The format of the logs that are sent to this delivery destination. (json, plain, w3c, raw, parquet)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been assigned to this delivery destination.</td>
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
    <td><a href="#get_delivery_destination"><CopyableCode code="get_delivery_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves complete information about one delivery destination.</td>
</tr>
<tr>
    <td><a href="#describe_delivery_destinations"><CopyableCode code="describe_delivery_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the delivery destinations that have been created in the account.</td>
</tr>
<tr>
    <td><a href="#put_delivery_destination"><CopyableCode code="put_delivery_destination" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates or updates a logical delivery destination. A delivery destination is an Amazon Web Services resource that represents an Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, and Firehose are supported as logs delivery destinations and X-Ray as the trace delivery destination. To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following: Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource. Use PutDeliveryDestination to create a delivery destination in the same account of the actual delivery destination. The delivery destination that you create is a logical object that represents the actual delivery destination. If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery. You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported &#91;V2 Permissions&#93; in the table at Enabling logging from Amazon Web Services services. If you use this operation to update an existing delivery destination, all the current delivery destination parameters are overwritten with the new parameter values that you specify.</td>
</tr>
<tr>
    <td><a href="#delete_delivery_destination"><CopyableCode code="delete_delivery_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a delivery destination. A delivery is a connection between a logical delivery source and a logical delivery destination. You can't delete a delivery destination if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery destination, use the DescribeDeliveries operation and check the deliveryDestinationArn field in the results.</td>
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
    defaultValue="get_delivery_destination"
    values={[
        { label: 'get_delivery_destination', value: 'get_delivery_destination' },
        { label: 'describe_delivery_destinations', value: 'describe_delivery_destinations' }
    ]}
>
<TabItem value="get_delivery_destination">

Retrieves complete information about one delivery destination.

```sql
SELECT
name,
arn,
delivery_destination_configuration,
delivery_destination_type,
output_format,
tags
FROM aws.logs.delivery_destinations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_delivery_destinations">

Retrieves a list of the delivery destinations that have been created in the account.

```sql
SELECT
name,
arn,
delivery_destination_configuration,
delivery_destination_type,
output_format,
tags
FROM aws.logs.delivery_destinations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_delivery_destination"
    values={[
        { label: 'put_delivery_destination', value: 'put_delivery_destination' }
    ]}
>
<TabItem value="put_delivery_destination">

Creates or updates a logical delivery destination. A delivery destination is an Amazon Web Services resource that represents an Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, and Firehose are supported as logs delivery destinations and X-Ray as the trace delivery destination. To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following: Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource. Use PutDeliveryDestination to create a delivery destination in the same account of the actual delivery destination. The delivery destination that you create is a logical object that represents the actual delivery destination. If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery. You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services. If you use this operation to update an existing delivery destination, all the current delivery destination parameters are overwritten with the new parameter values that you specify.

```sql
REPLACE aws.logs.delivery_destinations
SET 
name = '{{ name }}',
outputFormat = '{{ outputFormat }}',
deliveryDestinationConfiguration = '{{ deliveryDestinationConfiguration }}',
deliveryDestinationType = '{{ deliveryDestinationType }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
delivery_destination;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_delivery_destination"
    values={[
        { label: 'delete_delivery_destination', value: 'delete_delivery_destination' }
    ]}
>
<TabItem value="delete_delivery_destination">

Deletes a delivery destination. A delivery is a connection between a logical delivery source and a logical delivery destination. You can't delete a delivery destination if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery destination, use the DescribeDeliveries operation and check the deliveryDestinationArn field in the results.

```sql
DELETE FROM aws.logs.delivery_destinations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
