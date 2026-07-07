--- 
title: deliveries
hide_title: false
hide_table_of_contents: false
keywords:
  - deliveries
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

Creates, updates, deletes, gets or lists a <code>deliveries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deliveries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.deliveries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delivery"
    values={[
        { label: 'get_delivery', value: 'get_delivery' },
        { label: 'describe_deliveries', value: 'describe_deliveries' }
    ]}
>
<TabItem value="get_delivery">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that identifies this delivery in your account. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryDestinationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the delivery destination that is associated with this delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryDestinationType" /></td>
    <td><code>string</code></td>
    <td>Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, Firehose, or X-Ray. (S3, CWL, FH, XRAY)</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the delivery source that is associated with this delivery. (pattern: &lt;code&gt;&#91;\w-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fieldDelimiter" /></td>
    <td><code>string</code></td>
    <td>The field delimiter that is used between record fields when the final output format of a delivery is in Plain, W3C, or Raw format.</td>
</tr>
<tr>
    <td><CopyableCode code="recordFields" /></td>
    <td><code>array</code></td>
    <td>The record fields used in this delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="s3DeliveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>This structure contains delivery configurations that apply only when the delivery destination resource is an S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been assigned to this delivery.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_deliveries">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that identifies this delivery in your account. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryDestinationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the delivery destination that is associated with this delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryDestinationType" /></td>
    <td><code>string</code></td>
    <td>Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, Firehose, or X-Ray. (S3, CWL, FH, XRAY)</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the delivery source that is associated with this delivery. (pattern: &lt;code&gt;&#91;\w-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fieldDelimiter" /></td>
    <td><code>string</code></td>
    <td>The field delimiter that is used between record fields when the final output format of a delivery is in Plain, W3C, or Raw format.</td>
</tr>
<tr>
    <td><CopyableCode code="recordFields" /></td>
    <td><code>array</code></td>
    <td>The record fields used in this delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="s3DeliveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>This structure contains delivery configurations that apply only when the delivery destination resource is an S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been assigned to this delivery.</td>
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
    <td><a href="#get_delivery"><CopyableCode code="get_delivery" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns complete information about one logical delivery. A delivery is a connection between a delivery source and a delivery destination . A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in Enable logging from Amazon Web Services services. You need to specify the delivery id in this operation. You can find the IDs of the deliveries in your account with the DescribeDeliveries operation.</td>
</tr>
<tr>
    <td><a href="#describe_deliveries"><CopyableCode code="describe_deliveries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the deliveries that have been created in the account. A delivery is a connection between a delivery source and a delivery destination . A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in Enable logging from Amazon Web Services services.</td>
</tr>
<tr>
    <td><a href="#create_delivery"><CopyableCode code="create_delivery" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deliverySourceName"><code>deliverySourceName</code></a>, <a href="#parameter-deliveryDestinationArn"><code>deliveryDestinationArn</code></a></td>
    <td></td>
    <td>Creates a delivery. A delivery is a connection between a logical delivery source and a logical delivery destination that you have already created. Only some Amazon Web Services services support being configured as a delivery source using this operation. These services are listed as Supported &#91;V2 Permissions&#93; in the table at Enabling logging from Amazon Web Services services. A delivery destination can represent a log group in CloudWatch Logs, an Amazon S3 bucket, a delivery stream in Firehose, or X-Ray. To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following: Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource. Create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination. If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. To update an existing delivery configuration, use UpdateDeliveryConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_delivery_configuration"><CopyableCode code="update_delivery_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Use this operation to update the configuration of a delivery to change either the S3 path pattern or the format of the delivered logs. You can't use this operation to change the source or destination of the delivery.</td>
</tr>
<tr>
    <td><a href="#delete_delivery"><CopyableCode code="delete_delivery" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a delivery. A delivery is a connection between a logical delivery source and a logical delivery destination. Deleting a delivery only deletes the connection between the delivery source and delivery destination. It does not delete the delivery destination or the delivery source.</td>
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
    defaultValue="get_delivery"
    values={[
        { label: 'get_delivery', value: 'get_delivery' },
        { label: 'describe_deliveries', value: 'describe_deliveries' }
    ]}
>
<TabItem value="get_delivery">

Returns complete information about one logical delivery. A delivery is a connection between a delivery source and a delivery destination . A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in Enable logging from Amazon Web Services services. You need to specify the delivery id in this operation. You can find the IDs of the deliveries in your account with the DescribeDeliveries operation.

```sql
SELECT
id,
arn,
deliveryDestinationArn,
deliveryDestinationType,
deliverySourceName,
fieldDelimiter,
recordFields,
s3DeliveryConfiguration,
tags
FROM aws.logs.deliveries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_deliveries">

Retrieves a list of the deliveries that have been created in the account. A delivery is a connection between a delivery source and a delivery destination . A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in Enable logging from Amazon Web Services services.

```sql
SELECT
id,
arn,
deliveryDestinationArn,
deliveryDestinationType,
deliverySourceName,
fieldDelimiter,
recordFields,
s3DeliveryConfiguration,
tags
FROM aws.logs.deliveries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_delivery"
    values={[
        { label: 'create_delivery', value: 'create_delivery' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_delivery">

Creates a delivery. A delivery is a connection between a logical delivery source and a logical delivery destination that you have already created. Only some Amazon Web Services services support being configured as a delivery source using this operation. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services. A delivery destination can represent a log group in CloudWatch Logs, an Amazon S3 bucket, a delivery stream in Firehose, or X-Ray. To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following: Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource. Create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination. If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. To update an existing delivery configuration, use UpdateDeliveryConfiguration.

```sql
INSERT INTO aws.logs.deliveries (
deliverySourceName,
deliveryDestinationArn,
recordFields,
fieldDelimiter,
s3DeliveryConfiguration,
tags,
region
)
SELECT 
'{{ deliverySourceName }}' /* required */,
'{{ deliveryDestinationArn }}' /* required */,
'{{ recordFields }}',
'{{ fieldDelimiter }}',
'{{ s3DeliveryConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
delivery
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deliveries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deliveries resource.
    - name: deliverySourceName
      value: "{{ deliverySourceName }}"
      description: |
        The name of the delivery source to use for this delivery.
    - name: deliveryDestinationArn
      value: "{{ deliveryDestinationArn }}"
      description: |
        The ARN of the delivery destination to use for this delivery.
    - name: recordFields
      value:
        - "{{ recordFields }}"
      description: |
        The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
    - name: fieldDelimiter
      value: "{{ fieldDelimiter }}"
      description: |
        The field delimiter to use between record fields when the final output format of a delivery is in Plain, W3C, or Raw format.
    - name: s3DeliveryConfiguration
      description: |
        This structure contains parameters that are valid only when the delivery's delivery destination is an S3 bucket.
      value:
        suffixPath: "{{ suffixPath }}"
        enableHiveCompatiblePath: {{ enableHiveCompatiblePath }}
    - name: tags
      value: "{{ tags }}"
      description: |
        An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_delivery_configuration"
    values={[
        { label: 'update_delivery_configuration', value: 'update_delivery_configuration' }
    ]}
>
<TabItem value="update_delivery_configuration">

Use this operation to update the configuration of a delivery to change either the S3 path pattern or the format of the delivered logs. You can't use this operation to change the source or destination of the delivery.

```sql
UPDATE aws.logs.deliveries
SET 
id = '{{ id }}',
recordFields = '{{ recordFields }}',
fieldDelimiter = '{{ fieldDelimiter }}',
s3DeliveryConfiguration = '{{ s3DeliveryConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_delivery"
    values={[
        { label: 'delete_delivery', value: 'delete_delivery' }
    ]}
>
<TabItem value="delete_delivery">

Deletes a delivery. A delivery is a connection between a logical delivery source and a logical delivery destination. Deleting a delivery only deletes the connection between the delivery source and delivery destination. It does not delete the delivery destination or the delivery source.

```sql
DELETE FROM aws.logs.deliveries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
