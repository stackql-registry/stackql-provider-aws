--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - servicediscovery
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

Creates, updates, deletes, gets or lists an <code>operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicediscovery.operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_operation"
    values={[
        { label: 'get_operation', value: 'get_operation' },
        { label: 'list_operations', value: 'list_operations' }
    ]}
>
<TabItem value="get_operation">

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
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC). The value of CreateDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The code associated with ErrorMessage. Values for ErrorCode include the following: ACCESS_DENIED CANNOT_CREATE_HOSTED_ZONE EXPIRED_TOKEN HOSTED_ZONE_NOT_FOUND INTERNAL_FAILURE INVALID_CHANGE_BATCH THROTTLED_REQUEST</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>If the value of Status is FAIL, the reason that the operation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the operation that you want to get information about.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the namespace associated with the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. Values include the following: SUBMITTED This is the initial state that occurs immediately after you submit a request. PENDING Cloud Map is performing the operation. SUCCESS The operation succeeded. FAIL The operation failed. For the failure reason, see ErrorMessage. (SUBMITTED, PENDING, SUCCESS, FAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>object</code></td>
    <td>The name of the target entity that's associated with the operation: NAMESPACE The namespace ID is returned in the ResourceId property. SERVICE The service ID is returned in the ResourceId property. INSTANCE The instance ID is returned in the ResourceId property.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The name of the operation that's associated with the specified ID. (CREATE_NAMESPACE, DELETE_NAMESPACE, UPDATE_NAMESPACE, UPDATE_SERVICE, REGISTER_INSTANCE, DEREGISTER_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the value of Status changed to the current value, in Unix date/time format and Coordinated Universal Time (UTC). The value of UpdateDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_operations">

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
    <td>The ID for an operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. Values include the following: SUBMITTED: This is the initial state immediately after you submit a request. PENDING: Cloud Map is performing the operation. SUCCESS: The operation succeeded. FAIL: The operation failed. For the failure reason, see ErrorMessage. (SUBMITTED, PENDING, SUCCESS, FAIL)</td>
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
    <td><a href="#get_operation"><CopyableCode code="get_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about any operation that returns an operation ID in the response, such as a CreateHttpNamespace request. To get a list of operations that match specified criteria, see ListOperations.</td>
</tr>
<tr>
    <td><a href="#list_operations"><CopyableCode code="list_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists operations that match the criteria that you specify.</td>
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
    defaultValue="get_operation"
    values={[
        { label: 'get_operation', value: 'get_operation' },
        { label: 'list_operations', value: 'list_operations' }
    ]}
>
<TabItem value="get_operation">

Gets information about any operation that returns an operation ID in the response, such as a CreateHttpNamespace request. To get a list of operations that match specified criteria, see ListOperations.

```sql
SELECT
create_date,
error_code,
error_message,
id,
owner_account,
status,
targets,
type,
update_date
FROM aws.servicediscovery.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_operations">

Lists operations that match the criteria that you specify.

```sql
SELECT
id,
status
FROM aws.servicediscovery.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
