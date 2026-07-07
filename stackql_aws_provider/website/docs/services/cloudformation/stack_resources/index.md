--- 
title: stack_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_resources
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>stack_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_resource"
    values={[
        { label: 'describe_stack_resource', value: 'describe_stack_resource' },
        { label: 'list_stack_resources', value: 'list_stack_resources' },
        { label: 'describe_stack_resources', value: 'describe_stack_resources' }
    ]}
>
<TabItem value="describe_stack_resource">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>User defined description associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="DriftInformation" /></td>
    <td><code>string</code></td>
    <td>Information about whether the resource's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>Time the status was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource specified in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>string</code></td>
    <td>The content of the Metadata attribute declared for the resource. For more information, see Metadata attribute in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ModuleInfo" /></td>
    <td><code>string</code></td>
    <td>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</td>
</tr>
<tr>
    <td><CopyableCode code="PhysicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceStatusReason" /></td>
    <td><code>string</code></td>
    <td>Success/failure message associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Type of resource. For more information, see Amazon Web Services resource and property types reference in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="StackId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name associated with the stack.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stack_resources">

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
    <td><CopyableCode code="DriftInformation" /></td>
    <td><code>string</code></td>
    <td>Information about whether the resource's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>Time the status was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource specified in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="ModuleInfo" /></td>
    <td><code>string</code></td>
    <td>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</td>
</tr>
<tr>
    <td><CopyableCode code="PhysicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier that corresponds to a physical instance ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceStatusReason" /></td>
    <td><code>string</code></td>
    <td>Success/failure message associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Type of resource. (For more information, see Amazon Web Services resource and property types reference in the CloudFormation User Guide.)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_stack_resources">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>User defined description associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="DriftInformation" /></td>
    <td><code>string</code></td>
    <td>Information about whether the resource's actual configuration differs, or has drifted, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see Detect unmanaged configuration changes to stacks and resources with drift detection.</td>
</tr>
<tr>
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource specified in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="ModuleInfo" /></td>
    <td><code>string</code></td>
    <td>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</td>
</tr>
<tr>
    <td><CopyableCode code="PhysicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceStatusReason" /></td>
    <td><code>string</code></td>
    <td>Success/failure message associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Type of resource. For more information, see Amazon Web Services resource and property types reference in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="StackId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name associated with the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string</code></td>
    <td>Time the status was updated.</td>
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
    <td><a href="#describe_stack_resource"><CopyableCode code="describe_stack_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-LogicalResourceId"><code>LogicalResourceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the specified resource in the specified stack. For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</td>
</tr>
<tr>
    <td><a href="#list_stack_resources"><CopyableCode code="list_stack_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns descriptions of all resources of the specified stack. For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</td>
</tr>
<tr>
    <td><a href="#describe_stack_resources"><CopyableCode code="describe_stack_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-LogicalResourceId"><code>LogicalResourceId</code></a>, <a href="#parameter-PhysicalResourceId"><code>PhysicalResourceId</code></a></td>
    <td>Returns Amazon Web Services resource descriptions for running and deleted stacks. If StackName is specified, all the associated resources that are part of the stack are returned. If PhysicalResourceId is specified, the associated resources of the stack that the resource belongs to are returned. Only the first 100 resources will be returned. If your stack has more resources than this, you should use ListStackResources instead. For deleted stacks, DescribeStackResources returns resource information for up to 90 days after the stack has been deleted. You must specify either StackName or PhysicalResourceId, but not both. In addition, you can specify LogicalResourceId to filter the returned result. For more information about resources, the LogicalResourceId and PhysicalResourceId, see the CloudFormation User Guide. A ValidationError is returned if you specify both StackName and PhysicalResourceId in the same request.</td>
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
<tr id="parameter-LogicalResourceId">
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource as specified in the template.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable: Running stacks: You can specify either the stack's name or its unique stack ID. Deleted stacks: You must specify the unique stack ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-LogicalResourceId">
    <td><CopyableCode code="LogicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The logical name of the resource as specified in the template.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-PhysicalResourceId">
    <td><CopyableCode code="PhysicalResourceId" /></td>
    <td><code>string</code></td>
    <td>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation. For example, for an Amazon Elastic Compute Cloud (EC2) instance, PhysicalResourceId corresponds to the InstanceId. You can pass the EC2 InstanceId to DescribeStackResources to find which stack the instance belongs to and what other resources are part of the stack. Required: Conditional. If you don't specify PhysicalResourceId, you must specify StackName.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable: Running stacks: You can specify either the stack's name or its unique stack ID. Deleted stacks: You must specify the unique stack ID. Required: Conditional. If you don't specify StackName, you must specify PhysicalResourceId.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_resource"
    values={[
        { label: 'describe_stack_resource', value: 'describe_stack_resource' },
        { label: 'list_stack_resources', value: 'list_stack_resources' },
        { label: 'describe_stack_resources', value: 'describe_stack_resources' }
    ]}
>
<TabItem value="describe_stack_resource">

Returns a description of the specified resource in the specified stack. For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.

```sql
SELECT
Description,
DriftInformation,
LastUpdatedTimestamp,
LogicalResourceId,
Metadata,
ModuleInfo,
PhysicalResourceId,
ResourceStatus,
ResourceStatusReason,
ResourceType,
StackId,
StackName
FROM aws.cloudformation.stack_resources
WHERE StackName = '{{ StackName }}' -- required
AND LogicalResourceId = '{{ LogicalResourceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stack_resources">

Returns descriptions of all resources of the specified stack. For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.

```sql
SELECT
DriftInformation,
LastUpdatedTimestamp,
LogicalResourceId,
ModuleInfo,
PhysicalResourceId,
ResourceStatus,
ResourceStatusReason,
ResourceType
FROM aws.cloudformation.stack_resources
WHERE StackName = '{{ StackName }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
<TabItem value="describe_stack_resources">

Returns Amazon Web Services resource descriptions for running and deleted stacks. If StackName is specified, all the associated resources that are part of the stack are returned. If PhysicalResourceId is specified, the associated resources of the stack that the resource belongs to are returned. Only the first 100 resources will be returned. If your stack has more resources than this, you should use ListStackResources instead. For deleted stacks, DescribeStackResources returns resource information for up to 90 days after the stack has been deleted. You must specify either StackName or PhysicalResourceId, but not both. In addition, you can specify LogicalResourceId to filter the returned result. For more information about resources, the LogicalResourceId and PhysicalResourceId, see the CloudFormation User Guide. A ValidationError is returned if you specify both StackName and PhysicalResourceId in the same request.

```sql
SELECT
Description,
DriftInformation,
LogicalResourceId,
ModuleInfo,
PhysicalResourceId,
ResourceStatus,
ResourceStatusReason,
ResourceType,
StackId,
StackName,
Timestamp
FROM aws.cloudformation.stack_resources
WHERE region = '{{ region }}' -- required
AND StackName = '{{ StackName }}'
AND LogicalResourceId = '{{ LogicalResourceId }}'
AND PhysicalResourceId = '{{ PhysicalResourceId }}'
;
```
</TabItem>
</Tabs>
