--- 
title: cloud_formation_stack_records
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_formation_stack_records
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>cloud_formation_stack_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_formation_stack_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.cloud_formation_stack_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_formation_stack_records"
    values={[
        { label: 'get_cloud_formation_stack_records', value: 'get_cloud_formation_stack_records' }
    ]}
>
<TabItem value="get_cloud_formation_stack_records">

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
    <td>The name of the CloudFormation stack record. It starts with CloudFormationStackRecord followed by a GUID. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CloudFormation stack record. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the CloudFormation stack record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationInfo" /></td>
    <td><code>object</code></td>
    <td>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon Resource Name (ARN) of the AWS CloudFormation stack.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>A list of objects describing the Availability Zone and Amazon Web Services Region of the CloudFormation stack record.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type (CloudFormationStackRecord). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInfo" /></td>
    <td><code>array</code></td>
    <td>A list of objects describing the source of the CloudFormation stack record.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the CloudFormation stack record. (Started, Succeeded, Failed)</td>
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
    <td><a href="#get_cloud_formation_stack_records"><CopyableCode code="get_cloud_formation_stack_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the CloudFormation stack record created as a result of the create cloud formation stack operation. An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</td>
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
    defaultValue="get_cloud_formation_stack_records"
    values={[
        { label: 'get_cloud_formation_stack_records', value: 'get_cloud_formation_stack_records' }
    ]}
>
<TabItem value="get_cloud_formation_stack_records">

Returns the CloudFormation stack record created as a result of the create cloud formation stack operation. An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.

```sql
SELECT
name,
arn,
createdAt,
destinationInfo,
location,
resourceType,
sourceInfo,
state
FROM aws.lightsail.cloud_formation_stack_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
