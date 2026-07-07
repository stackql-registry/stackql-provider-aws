--- 
title: serial_console_access_status
hide_title: false
hide_table_of_contents: false
keywords:
  - serial_console_access_status
  - ec2
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

Creates, updates, deletes, gets or lists a <code>serial_console_access_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="serial_console_access_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.serial_console_access_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_serial_console_access_status"
    values={[
        { label: 'get_serial_console_access_status', value: 'get_serial_console_access_status' }
    ]}
>
<TabItem value="get_serial_console_access_status">

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
    <td><CopyableCode code="ManagedBy" /></td>
    <td><code>string</code></td>
    <td>The entity that manages access to the serial console. Possible values include: account - Access is managed by the account. declarative-policy - Access is managed by a declarative policy and can't be modified by the account.</td>
</tr>
<tr>
    <td><CopyableCode code="SerialConsoleAccessEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, access to the EC2 serial console of all instances is enabled for your account. If false, access to the EC2 serial console of all instances is disabled for your account.</td>
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
    <td><a href="#get_serial_console_access_status"><CopyableCode code="get_serial_console_access_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the access status of your account to the EC2 serial console of all instances. By default, access to the EC2 serial console is disabled for your account. For more information, see Manage account access to the EC2 serial console in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_serial_console_access_status"
    values={[
        { label: 'get_serial_console_access_status', value: 'get_serial_console_access_status' }
    ]}
>
<TabItem value="get_serial_console_access_status">

Retrieves the access status of your account to the EC2 serial console of all instances. By default, access to the EC2 serial console is disabled for your account. For more information, see Manage account access to the EC2 serial console in the Amazon EC2 User Guide.

```sql
SELECT
ManagedBy,
SerialConsoleAccessEnabled
FROM aws.ec2.serial_console_access_status
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
