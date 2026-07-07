--- 
title: register_account_status
hide_title: false
hide_table_of_contents: false
keywords:
  - register_account_status
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>register_account_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="register_account_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.register_account_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_register_account_status"
    values={[
        { label: 'get_register_account_status', value: 'get_register_account_status' }
    ]}
>
<TabItem value="get_register_account_status">

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
    <td><CopyableCode code="accountStatus" /></td>
    <td><code>string</code></td>
    <td>The status of registering your account and resources. The status can be one of: REGISTRATION_SUCCESS - The Amazon Web Services resource is successfully registered. REGISTRATION_PENDING - Amazon Web Services IoT FleetWise is processing the registration request. This process takes approximately five minutes to complete. REGISTRATION_FAILURE - Amazon Web Services IoT FleetWise can't register the AWS resource. Try again later. (REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the account was registered, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="customerAccountId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amazon Web Services account, provided at account creation.</td>
</tr>
<tr>
    <td><CopyableCode code="iamRegistrationResponse" /></td>
    <td><code>object</code></td>
    <td>Information about the registered IAM resources or errors, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time this registration was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="timestreamRegistrationResponse" /></td>
    <td><code>object</code></td>
    <td>Information about the registered Amazon Timestream resources or errors, if any.</td>
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
    <td><a href="#get_register_account_status"><CopyableCode code="get_register_account_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status of registering your Amazon Web Services account, IAM, and Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see Setting up Amazon Web Services IoT FleetWise. This API operation doesn't require input parameters.</td>
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
    defaultValue="get_register_account_status"
    values={[
        { label: 'get_register_account_status', value: 'get_register_account_status' }
    ]}
>
<TabItem value="get_register_account_status">

Retrieves information about the status of registering your Amazon Web Services account, IAM, and Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see Setting up Amazon Web Services IoT FleetWise. This API operation doesn't require input parameters.

```sql
SELECT
accountStatus,
creationTime,
customerAccountId,
iamRegistrationResponse,
lastModificationTime,
timestreamRegistrationResponse
FROM aws.iotfleetwise.register_account_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
