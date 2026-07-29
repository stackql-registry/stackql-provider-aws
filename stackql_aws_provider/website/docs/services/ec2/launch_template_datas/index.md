--- 
title: launch_template_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_template_datas
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

Creates, updates, deletes, gets or lists a <code>launch_template_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_template_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.launch_template_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_launch_template_data"
    values={[
        { label: 'get_launch_template_data', value: 'get_launch_template_data' }
    ]}
>
<TabItem value="get_launch_template_data">

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
    <td><CopyableCode code="block_device_mappings" /></td>
    <td><code>string</code></td>
    <td>The block device mappings.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_specification" /></td>
    <td><code>string</code></td>
    <td>Information about the Capacity Reservation targeting option.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_options" /></td>
    <td><code>string</code></td>
    <td>The CPU options for the instance. For more information, see CPU options for Amazon EC2 instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="credit_specification" /></td>
    <td><code>string</code></td>
    <td>The credit option for CPU usage of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_api_stop" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is enabled for stop protection. For more information, see Enable stop protection for your EC2 instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_api_termination" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, indicates that the instance cannot be terminated using the Amazon EC2 console, command line tool, or API.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_optimized" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is optimized for Amazon EBS I/O.</td>
</tr>
<tr>
    <td><CopyableCode code="elastic_gpu_specifications" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Amazon Elastic Graphics reached end of life on January 8, 2024.</td>
</tr>
<tr>
    <td><CopyableCode code="elastic_inference_accelerators" /></td>
    <td><code>string</code></td>
    <td>Amazon Elastic Inference is no longer available. An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads. You cannot specify accelerators from different generations in the same request.</td>
</tr>
<tr>
    <td><CopyableCode code="enclave_options" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</td>
</tr>
<tr>
    <td><CopyableCode code="hibernation_options" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an instance is configured for hibernation. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_instance_profile" /></td>
    <td><code>string</code></td>
    <td>The IAM instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI or a Systems Manager parameter. The Systems Manager parameter will resolve to the ID of the AMI at instance launch. The value depends on what you specified in the request. The possible values are: If an AMI ID was specified in the request, then this is the AMI ID. If a Systems Manager parameter was specified in the request, and ResolveAlias was configured as true, then this is the AMI ID that the parameter is mapped to in the Parameter Store. If a Systems Manager parameter was specified in the request, and ResolveAlias was configured as false, then this is the parameter value. For more information, see Use a Systems Manager parameter instead of an AMI ID in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_initiated_shutdown_behavior" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</td>
</tr>
<tr>
    <td><CopyableCode code="instance_market_options" /></td>
    <td><code>string</code></td>
    <td>The market (purchasing) option for the instances.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_requirements" /></td>
    <td><code>string</code></td>
    <td>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes. If you specify InstanceRequirements, you can't specify InstanceTypes.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="license_specifications" /></td>
    <td><code>string</code></td>
    <td>The license configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_options" /></td>
    <td><code>string</code></td>
    <td>The maintenance options for your instance.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_options" /></td>
    <td><code>string</code></td>
    <td>The metadata options for the instance. For more information, see Configure the Instance Metadata Service options in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>string</code></td>
    <td>The monitoring for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interfaces" /></td>
    <td><code>string</code></td>
    <td>The network interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="network_performance_options" /></td>
    <td><code>string</code></td>
    <td>Contains the launch template settings for network performance options for your instance.</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>string</code></td>
    <td>The placement of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name_options" /></td>
    <td><code>string</code></td>
    <td>The options for the instance hostname.</td>
</tr>
<tr>
    <td><CopyableCode code="ram_disk_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the RAM disk, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_interfaces" /></td>
    <td><code>string</code></td>
    <td>The secondary interfaces associated with the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>string</code></td>
    <td>The security group IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>The security group names.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_specifications" /></td>
    <td><code>string</code></td>
    <td>The tags that are applied to the resources that are created during instance launch.</td>
</tr>
<tr>
    <td><CopyableCode code="user_data" /></td>
    <td><code>string</code></td>
    <td>The user data for the instance.</td>
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
    <td><a href="#get_launch_template_data"><CopyableCode code="get_launch_template_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the configuration data of the specified instance. You can use this data to create a launch template. This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following actions in your IAM policy: DescribeSpotInstanceRequests, DescribeInstanceCreditSpecifications, DescribeVolumes, and DescribeInstanceAttribute. Or, you can allow describe* depending on your instance requirements.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
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
    defaultValue="get_launch_template_data"
    values={[
        { label: 'get_launch_template_data', value: 'get_launch_template_data' }
    ]}
>
<TabItem value="get_launch_template_data">

Retrieves the configuration data of the specified instance. You can use this data to create a launch template. This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following actions in your IAM policy: DescribeSpotInstanceRequests, DescribeInstanceCreditSpecifications, DescribeVolumes, and DescribeInstanceAttribute. Or, you can allow describe* depending on your instance requirements.

```sql
SELECT
block_device_mappings,
capacity_reservation_specification,
cpu_options,
credit_specification,
disable_api_stop,
disable_api_termination,
ebs_optimized,
elastic_gpu_specifications,
elastic_inference_accelerators,
enclave_options,
hibernation_options,
iam_instance_profile,
image_id,
instance_initiated_shutdown_behavior,
instance_market_options,
instance_requirements,
instance_type,
kernel_id,
key_name,
license_specifications,
maintenance_options,
metadata_options,
monitoring,
network_interfaces,
network_performance_options,
operator,
placement,
private_dns_name_options,
ram_disk_id,
secondary_interfaces,
security_group_ids,
security_groups,
tag_specifications,
user_data
FROM aws.ec2.launch_template_datas
WHERE InstanceId = '{{ InstanceId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
