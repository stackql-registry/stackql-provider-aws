--- 
title: application_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - application_operations
  - kinesisanalyticsv2
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

Creates, updates, deletes, gets or lists an <code>application_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisanalyticsv2.application_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_operation"
    values={[
        { label: 'describe_application_operation', value: 'describe_application_operation' },
        { label: 'list_application_operations', value: 'list_application_operations' }
    ]}
>
<TabItem value="describe_application_operation">

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
    <td><CopyableCode code="ApplicationVersionChangeDetails" /></td>
    <td><code>object</code></td>
    <td>Contains information about the version changes that the operation applied to the application.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="Operation" /></td>
    <td><code>string</code></td>
    <td>The type of operation that is performed on an application.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationFailureDetails" /></td>
    <td><code>object</code></td>
    <td>Provides a description of the operation failure.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. (IN_PROGRESS, CANCELLED, SUCCESSFUL, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the operation was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_operations">

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
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="Operation" /></td>
    <td><code>string</code></td>
    <td>The type of operation that is performed on an application.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>The operation ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. (IN_PROGRESS, CANCELLED, SUCCESSFUL, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the operation was created.</td>
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
    <td><a href="#describe_application_operation"><CopyableCode code="describe_application_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a detailed description of a specified application operation. To see a list of all the operations of an application, invoke the ListApplicationOperations operation. This operation is supported only for Managed Service for Apache Flink.</td>
</tr>
<tr>
    <td><a href="#list_application_operations"><CopyableCode code="list_application_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the operations performed for the specified application such as UpdateApplication, StartApplication etc. The response also includes a summary of the operation. To get the complete description of a specific operation, invoke the DescribeApplicationOperation operation. This operation is supported only for Managed Service for Apache Flink.</td>
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
    defaultValue="describe_application_operation"
    values={[
        { label: 'describe_application_operation', value: 'describe_application_operation' },
        { label: 'list_application_operations', value: 'list_application_operations' }
    ]}
>
<TabItem value="describe_application_operation">

Provides a detailed description of a specified application operation. To see a list of all the operations of an application, invoke the ListApplicationOperations operation. This operation is supported only for Managed Service for Apache Flink.

```sql
SELECT
ApplicationVersionChangeDetails,
EndTime,
Operation,
OperationFailureDetails,
OperationStatus,
StartTime
FROM aws.kinesisanalyticsv2.application_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_operations">

Lists all the operations performed for the specified application such as UpdateApplication, StartApplication etc. The response also includes a summary of the operation. To get the complete description of a specific operation, invoke the DescribeApplicationOperation operation. This operation is supported only for Managed Service for Apache Flink.

```sql
SELECT
EndTime,
Operation,
OperationId,
OperationStatus,
StartTime
FROM aws.kinesisanalyticsv2.application_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
