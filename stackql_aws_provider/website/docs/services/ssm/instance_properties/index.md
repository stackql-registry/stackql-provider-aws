--- 
title: instance_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_properties
  - ssm
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

Creates, updates, deletes, gets or lists an <code>instance_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.instance_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_properties"
    values={[
        { label: 'describe_instance_properties', value: 'describe_instance_properties' }
    ]}
>
<TabItem value="describe_instance_properties">

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
    <td><CopyableCode code="activation_id" /></td>
    <td><code>string</code></td>
    <td>The activation ID created by Systems Manager when the server or virtual machine (VM) was registered (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of SSM Agent running on your managed node. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;1,6&#125;(\.&#91;0-9&#93;&#123;1,6&#125;)&#123;2,3&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The CPU architecture of the node. For example, x86_64.</td>
</tr>
<tr>
    <td><CopyableCode code="association_overview" /></td>
    <td><code>object</code></td>
    <td>Status information about the aggregated associations.</td>
</tr>
<tr>
    <td><CopyableCode code="association_status" /></td>
    <td><code>string</code></td>
    <td>The status of the State Manager association applied to the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="computer_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified host name of the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The public IPv4 address assigned to the node. If a public IPv4 address isn't assigned to the node, this value is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role" /></td>
    <td><code>string</code></td>
    <td>The IAM role used in the hybrid activation to register the node with Systems Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed node. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_role" /></td>
    <td><code>string</code></td>
    <td>The instance profile attached to the node. If an instance profile isn't attached to the node, this value is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type of the managed node. For example, t3.large.</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair associated with the node. If a key pair isnt't associated with the node, this value is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="last_association_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the association was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_ping_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the SSM Agent last pinged the Systems Manager service.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_association_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date the association was successfully run.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the node was launched.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The value of the EC2 Name tag associated with the node. If a Name tag hasn't been applied to the node, this value is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="ping_status" /></td>
    <td><code>string</code></td>
    <td>Connection status of the SSM Agent on the managed node. (Online, ConnectionLost, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="platform_name" /></td>
    <td><code>string</code></td>
    <td>The name of the operating system platform running on your managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_type" /></td>
    <td><code>string</code></td>
    <td>The operating system platform type of the managed node. For example, Windows Server or Amazon Linux 2. (Windows, Linux, MacOS)</td>
</tr>
<tr>
    <td><CopyableCode code="platform_version" /></td>
    <td><code>string</code></td>
    <td>The version of the OS platform running on your managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the node was registered with Systems Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source resource. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of the source resource. (AWS::EC2::Instance, AWS::IoT::Thing, AWS::SSM::ManagedInstance)</td>
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
    <td><a href="#describe_instance_properties"><CopyableCode code="describe_instance_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>An API operation used by the Systems Manager console to display information about Systems Manager managed nodes.</td>
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
    defaultValue="describe_instance_properties"
    values={[
        { label: 'describe_instance_properties', value: 'describe_instance_properties' }
    ]}
>
<TabItem value="describe_instance_properties">

An API operation used by the Systems Manager console to display information about Systems Manager managed nodes.

```sql
SELECT
activation_id,
agent_version,
architecture,
association_overview,
association_status,
computer_name,
ip_address,
iam_role,
instance_id,
instance_role,
instance_state,
instance_type,
key_name,
last_association_execution_date,
last_ping_date_time,
last_successful_association_execution_date,
launch_time,
name,
ping_status,
platform_name,
platform_type,
platform_version,
registration_date,
resource_type,
source_id,
source_type
FROM aws.ssm.instance_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
