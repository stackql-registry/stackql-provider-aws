--- 
title: accelerator_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - accelerator_attributes
  - globalaccelerator
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

Creates, updates, deletes, gets or lists an <code>accelerator_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accelerator_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.accelerator_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_accelerator_attributes"
    values={[
        { label: 'describe_accelerator_attributes', value: 'describe_accelerator_attributes' }
    ]}
>
<TabItem value="describe_accelerator_attributes">

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
    <td><CopyableCode code="FlowLogsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether flow logs are enabled. The default value is false. If the value is true, FlowLogsS3Bucket and FlowLogsS3Prefix must be specified. For more information, see Flow logs in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowLogsS3Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket for the flow logs. Attribute is required if FlowLogsEnabled is true. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowLogsS3Prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if FlowLogsEnabled is true. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following: s3-bucket_name//AWSLogs/aws_account_id</td>
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
    <td><a href="#describe_accelerator_attributes"><CopyableCode code="describe_accelerator_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe the attributes of an accelerator.</td>
</tr>
<tr>
    <td><a href="#update_accelerator_attributes"><CopyableCode code="update_accelerator_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcceleratorArn"><code>AcceleratorArn</code></a></td>
    <td></td>
    <td>Update the attributes for an accelerator.</td>
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
    defaultValue="describe_accelerator_attributes"
    values={[
        { label: 'describe_accelerator_attributes', value: 'describe_accelerator_attributes' }
    ]}
>
<TabItem value="describe_accelerator_attributes">

Describe the attributes of an accelerator.

```sql
SELECT
FlowLogsEnabled,
FlowLogsS3Bucket,
FlowLogsS3Prefix
FROM aws.globalaccelerator.accelerator_attributes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_accelerator_attributes"
    values={[
        { label: 'update_accelerator_attributes', value: 'update_accelerator_attributes' }
    ]}
>
<TabItem value="update_accelerator_attributes">

Update the attributes for an accelerator.

```sql
UPDATE aws.globalaccelerator.accelerator_attributes
SET 
AcceleratorArn = '{{ AcceleratorArn }}',
FlowLogsEnabled = {{ FlowLogsEnabled }},
FlowLogsS3Bucket = '{{ FlowLogsS3Bucket }}',
FlowLogsS3Prefix = '{{ FlowLogsS3Prefix }}'
WHERE 
region = '{{ region }}' --required
AND AcceleratorArn = '{{ AcceleratorArn }}' --required
RETURNING
AcceleratorAttributes;
```
</TabItem>
</Tabs>
