--- 
title: ec2_instance_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2_instance_limits
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

Creates, updates, deletes, gets or lists an <code>ec2_instance_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ec2_instance_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.ec2_instance_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ec2_instance_limits"
    values={[
        { label: 'describe_ec2_instance_limits', value: 'describe_ec2_instance_limits' }
    ]}
>
<TabItem value="describe_ec2_instance_limits">

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
    <td><CopyableCode code="ec2_instance_limits" /></td>
    <td><code>array</code></td>
    <td>The maximum number of instances for the specified instance type.</td>
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
    <td><a href="#describe_ec2_instance_limits"><CopyableCode code="describe_ec2_instance_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at Amazon EC2 Instance Types. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift Servers fleets. You can request a limit increase for your account by using the Service limits page in the Amazon GameLift Servers console. Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. To learn more about how Amazon GameLift Servers handles locations, see Amazon GameLift Servers service locations. For example, the following requests all return different results: Request specifies the Region ap-northeast-1 with no location. The result is limits and usage data on all of the fleets that reside in ap-northeast-1, for all instance types that are deployed in ap-northeast-1. Request specifies the Region ap-northeast-1 with location us-west-2. The result is limits and usage data on all of the fleets that reside in ap-northeast-1, for all instance types that are deployed in us-west-2. Request specifies the Region us-east-1 with location ap-northeast-1. The result is limits and usage data on all of the fleets that reside in us-east-1, for all instance types that are deployed in ap-northeast-1. These limits do not affect fleets in any other Regions that deploy instances to ap-northeast-1. This operation can be used in the following ways: To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for. To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for. If successful, an EC2InstanceLimits object is returned with limits and usage data for each requested instance type. Learn more Setting up Amazon GameLift Servers fleets</td>
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
    defaultValue="describe_ec2_instance_limits"
    values={[
        { label: 'describe_ec2_instance_limits', value: 'describe_ec2_instance_limits' }
    ]}
>
<TabItem value="describe_ec2_instance_limits">

This API works with the following fleet types: EC2 Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at Amazon EC2 Instance Types. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift Servers fleets. You can request a limit increase for your account by using the Service limits page in the Amazon GameLift Servers console. Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. To learn more about how Amazon GameLift Servers handles locations, see Amazon GameLift Servers service locations. For example, the following requests all return different results: Request specifies the Region ap-northeast-1 with no location. The result is limits and usage data on all of the fleets that reside in ap-northeast-1, for all instance types that are deployed in ap-northeast-1. Request specifies the Region ap-northeast-1 with location us-west-2. The result is limits and usage data on all of the fleets that reside in ap-northeast-1, for all instance types that are deployed in us-west-2. Request specifies the Region us-east-1 with location ap-northeast-1. The result is limits and usage data on all of the fleets that reside in us-east-1, for all instance types that are deployed in ap-northeast-1. These limits do not affect fleets in any other Regions that deploy instances to ap-northeast-1. This operation can be used in the following ways: To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for. To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for. If successful, an EC2InstanceLimits object is returned with limits and usage data for each requested instance type. Learn more Setting up Amazon GameLift Servers fleets

```sql
SELECT
ec2_instance_limits
FROM aws.gamelift.ec2_instance_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
