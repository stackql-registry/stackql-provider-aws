--- 
title: instance_access
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_access
  - gamelift
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

Creates, updates, deletes, gets or lists an <code>instance_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.instance_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_access"
    values={[
        { label: 'get_instance_access', value: 'get_instance_access' }
    ]}
>
<TabItem value="get_instance_access">

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
    <td><CopyableCode code="Credentials" /></td>
    <td><code>object</code></td>
    <td>Security credentials that are required to access the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="FleetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet containing the instance to be accessed. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the instance to be accessed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddress" /></td>
    <td><code>string</code></td>
    <td>IP address assigned to the instance. (pattern: &lt;code&gt;^&#91;0-9A-Fa-f\:\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingSystem" /></td>
    <td><code>string</code></td>
    <td>Operating system that is running on the instance. (WINDOWS_2012, AMAZON_LINUX, AMAZON_LINUX_2, WINDOWS_2016, AMAZON_LINUX_2023, WINDOWS_2022)</td>
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
    <td><a href="#get_instance_access"><CopyableCode code="get_instance_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Requests authorization to remotely connect to an instance in an Amazon GameLift Servers managed fleet. Use this operation to connect to instances with game servers that use Amazon GameLift Servers server SDK 4.x or earlier. To connect to instances with game servers that use server SDK 5.x or later, call https:​//docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess. To request access to an instance, specify IDs for the instance and the fleet it belongs to. You can retrieve instance IDs for a fleet by calling DescribeInstances with the fleet ID. If successful, this operation returns an IP address and credentials. The returned credentials match the operating system of the instance, as follows: For a Windows instance: returns a user name and secret (password) for use with a Windows Remote Desktop client. For a Linux instance: returns a user name and secret (RSA private key) for use with an SSH client. You must save the secret to a .pem file. If you're using the CLI, see the example Get credentials for a Linux instance for tips on automatically saving the secret to a .pem file. Learn more Remotely connect to fleet instances Debug fleet issues Related actions All APIs by task</td>
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
    defaultValue="get_instance_access"
    values={[
        { label: 'get_instance_access', value: 'get_instance_access' }
    ]}
>
<TabItem value="get_instance_access">

This API works with the following fleet types: EC2 Requests authorization to remotely connect to an instance in an Amazon GameLift Servers managed fleet. Use this operation to connect to instances with game servers that use Amazon GameLift Servers server SDK 4.x or earlier. To connect to instances with game servers that use server SDK 5.x or later, call https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetComputeAccess. To request access to an instance, specify IDs for the instance and the fleet it belongs to. You can retrieve instance IDs for a fleet by calling DescribeInstances with the fleet ID. If successful, this operation returns an IP address and credentials. The returned credentials match the operating system of the instance, as follows: For a Windows instance: returns a user name and secret (password) for use with a Windows Remote Desktop client. For a Linux instance: returns a user name and secret (RSA private key) for use with an SSH client. You must save the secret to a .pem file. If you're using the CLI, see the example Get credentials for a Linux instance for tips on automatically saving the secret to a .pem file. Learn more Remotely connect to fleet instances Debug fleet issues Related actions All APIs by task

```sql
SELECT
Credentials,
FleetId,
InstanceId,
IpAddress,
OperatingSystem
FROM aws.gamelift.instance_access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
