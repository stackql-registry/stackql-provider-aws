--- 
title: serial_console_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - serial_console_accesses
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

Creates, updates, deletes, gets or lists a <code>serial_console_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="serial_console_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.serial_console_accesses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#disable_serial_console_access"><CopyableCode code="disable_serial_console_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see Manage account access to the EC2 serial console in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_serial_console_access"><CopyableCode code="enable_serial_console_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see Manage account access to the EC2 serial console in the Amazon EC2 User Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_serial_console_access"
    values={[
        { label: 'disable_serial_console_access', value: 'disable_serial_console_access' },
        { label: 'enable_serial_console_access', value: 'enable_serial_console_access' }
    ]}
>
<TabItem value="disable_serial_console_access">

Disables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see Manage account access to the EC2 serial console in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.serial_console_accesses.disable_serial_console_access 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_serial_console_access">

Enables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see Manage account access to the EC2 serial console in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.serial_console_accesses.enable_serial_console_access 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
