--- 
title: instance_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_informations
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

Creates, updates, deletes, gets or lists an <code>instance_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.instance_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_information"
    values={[
        { label: 'describe_instance_information', value: 'describe_instance_information' }
    ]}
>
<TabItem value="describe_instance_information">

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
    <td>The activation ID created by Amazon Web Services Systems Manager when the server or virtual machine (VM) was registered. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of SSM Agent running on your Linux managed node. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;1,6&#125;(\.&#91;0-9&#93;&#123;1,6&#125;)&#123;2,3&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_overview" /></td>
    <td><code>object</code></td>
    <td>Information about the association.</td>
</tr>
<tr>
    <td><CopyableCode code="association_status" /></td>
    <td><code>string</code></td>
    <td>The status of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="computer_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified host name of the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role" /></td>
    <td><code>string</code></td>
    <td>The role assigned to an Amazon EC2 instance configured with a Systems Manager Quick Setup host management configuration or the role assigned to an on-premises managed node. This call doesn't return the IAM role for unmanaged Amazon EC2 instances (instances not configured for Systems Manager). To retrieve the role for an unmanaged instance, use the Amazon EC2 DescribeInstances operation. For information, see DescribeInstances in the Amazon EC2 API Reference or describe-instances in the Amazon Web Services CLI Command Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The managed node ID. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest_version" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the latest version of SSM Agent is running on your Linux managed node. This field doesn't indicate whether or not the latest version is installed on Windows managed nodes, because some older versions of Windows Server use the EC2Config service to process Systems Manager requests.</td>
</tr>
<tr>
    <td><CopyableCode code="last_association_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the association was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_ping_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the agent last pinged the Systems Manager service.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_association_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date the association was successfully run.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name assigned to an on-premises server, edge device, or virtual machine (VM) when it is activated as a Systems Manager managed node. The name is specified as the DefaultInstanceName property using the CreateActivation command. It is applied to the managed node by specifying the Activation Code and Activation ID when you install SSM Agent on the node, as explained in How to install SSM Agent on hybrid Linux nodes and How to install SSM Agent on hybrid Windows Server nodes. To retrieve the Name tag of an EC2 instance, use the Amazon EC2 DescribeInstances operation. For information, see DescribeInstances in the Amazon EC2 API Reference or describe-instances in the Amazon Web Services CLI Command Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="ping_status" /></td>
    <td><code>string</code></td>
    <td>Connection status of SSM Agent. The status Inactive has been deprecated and is no longer in use. (Online, ConnectionLost, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="platform_name" /></td>
    <td><code>string</code></td>
    <td>The name of the operating system platform running on your managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_type" /></td>
    <td><code>string</code></td>
    <td>The operating system platform type. (Windows, Linux, MacOS)</td>
</tr>
<tr>
    <td><CopyableCode code="platform_version" /></td>
    <td><code>string</code></td>
    <td>The version of the OS platform running on your managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the server or VM was registered with Amazon Web Services as a managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of instance. Instances are either EC2 instances or managed instances. (ManagedInstance, EC2Instance)</td>
</tr>
<tr>
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source resource. For IoT Greengrass devices, SourceId is the Thing name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_location" /></td>
    <td><code>string</code></td>
    <td>The location of the source resource in the third-party cloud environment. (pattern: &lt;code&gt;^.&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of the source resource. For IoT Greengrass devices, SourceType is AWS::IoT::Thing. For Azure Virtual Machines, SourceType is Microsoft.Compute/virtualMachines. (AWS::EC2::Instance, AWS::IoT::Thing, AWS::SSM::ManagedInstance, Microsoft.Compute/virtualMachines)</td>
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
    <td><a href="#describe_instance_information"><CopyableCode code="describe_instance_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about one or more of your managed nodes, including the operating system platform, SSM Agent version, association status, and IP address. This operation does not return information for nodes that are either Stopped or Terminated. If you specify one or more node IDs, the operation returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error. The IamRole field returned for this API operation is the role assigned to an Amazon EC2 instance configured with a Systems Manager Quick Setup host management configuration or the role assigned to an on-premises managed node.</td>
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
    defaultValue="describe_instance_information"
    values={[
        { label: 'describe_instance_information', value: 'describe_instance_information' }
    ]}
>
<TabItem value="describe_instance_information">

Provides information about one or more of your managed nodes, including the operating system platform, SSM Agent version, association status, and IP address. This operation does not return information for nodes that are either Stopped or Terminated. If you specify one or more node IDs, the operation returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error. The IamRole field returned for this API operation is the role assigned to an Amazon EC2 instance configured with a Systems Manager Quick Setup host management configuration or the role assigned to an on-premises managed node.

```sql
SELECT
activation_id,
agent_version,
association_overview,
association_status,
computer_name,
ip_address,
iam_role,
instance_id,
is_latest_version,
last_association_execution_date,
last_ping_date_time,
last_successful_association_execution_date,
name,
ping_status,
platform_name,
platform_type,
platform_version,
registration_date,
resource_type,
source_id,
source_location,
source_type
FROM aws.ssm.instance_informations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
