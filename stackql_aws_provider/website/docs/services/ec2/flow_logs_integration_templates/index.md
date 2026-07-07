--- 
title: flow_logs_integration_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_logs_integration_templates
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

Creates, updates, deletes, gets or lists a <code>flow_logs_integration_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_logs_integration_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.flow_logs_integration_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow_logs_integration_template"
    values={[
        { label: 'get_flow_logs_integration_template', value: 'get_flow_logs_integration_template' }
    ]}
>
<TabItem value="get_flow_logs_integration_template">

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
    <td><CopyableCode code="Result" /></td>
    <td><code>string</code></td>
    <td>The generated CloudFormation template.</td>
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
    <td><a href="#get_flow_logs_integration_template"><CopyableCode code="get_flow_logs_integration_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-FlowLogId"><code>FlowLogId</code></a>, <a href="#parameter-ConfigDeliveryS3DestinationArn"><code>ConfigDeliveryS3DestinationArn</code></a>, <a href="#parameter-IntegrateService"><code>IntegrateService</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data. Based on the information that you provide, we configure resources in the template to do the following: Create a table in Athena that maps fields to a custom log format Create a Lambda function that updates the table with new partitions on a daily, weekly, or monthly basis Create a table partitioned between two timestamps in the past Create a set of named queries in Athena that you can use to get started quickly GetFlowLogsIntegrationTemplate does not support integration between Amazon Web Services Transit Gateway Flow Logs and Amazon Athena.</td>
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
<tr id="parameter-ConfigDeliveryS3DestinationArn">
    <td><CopyableCode code="ConfigDeliveryS3DestinationArn" /></td>
    <td><code>string</code></td>
    <td>To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.</td>
</tr>
<tr id="parameter-FlowLogId">
    <td><CopyableCode code="FlowLogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the flow log.</td>
</tr>
<tr id="parameter-IntegrateService">
    <td><CopyableCode code="IntegrateService" /></td>
    <td><code>object</code></td>
    <td>Information about the service integration.</td>
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
    defaultValue="get_flow_logs_integration_template"
    values={[
        { label: 'get_flow_logs_integration_template', value: 'get_flow_logs_integration_template' }
    ]}
>
<TabItem value="get_flow_logs_integration_template">

Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data. Based on the information that you provide, we configure resources in the template to do the following: Create a table in Athena that maps fields to a custom log format Create a Lambda function that updates the table with new partitions on a daily, weekly, or monthly basis Create a table partitioned between two timestamps in the past Create a set of named queries in Athena that you can use to get started quickly GetFlowLogsIntegrationTemplate does not support integration between Amazon Web Services Transit Gateway Flow Logs and Amazon Athena.

```sql
SELECT
Result
FROM aws.ec2.flow_logs_integration_templates
WHERE FlowLogId = '{{ FlowLogId }}' -- required
AND ConfigDeliveryS3DestinationArn = '{{ ConfigDeliveryS3DestinationArn }}' -- required
AND IntegrateService = '{{ IntegrateService }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
